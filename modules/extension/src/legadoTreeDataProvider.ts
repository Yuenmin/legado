import * as vscode from "vscode";
import { messageBroker } from "./extension";
import { MESSAGE_COMMAND, VSCODE_COMMAND } from "./utils";
import { apis, BookChapter } from "./legado-web/lib";

export class LegadoTreeDataProvider
  implements vscode.TreeDataProvider<vscode.TreeItem>
{
  private _onDidChangeTreeDataEmitter = new vscode.EventEmitter<
    vscode.TreeItem | undefined | null | void
  >();
  readonly onDidChangeTreeData = this._onDidChangeTreeDataEmitter.event;

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
    if (element && element instanceof BookItem) {
      return this._getChaptersForBook(element);
    }
    return this._getBookshelfItems();
  }

  refresh() {
    this._onDidChangeTreeDataEmitter.fire();
  }

  private _getBookshelfItems(): Thenable<vscode.TreeItem[]> {
    return apis
      .getBookShelf()
      .then((res) => {
        return res.data.data;
      })
      .then((books) =>
        books.map(
          (book) =>
            new BookItem(
              book.name,
              book.author,
              book.intro || "",
              book.bookUrl,
              vscode.TreeItemCollapsibleState.Collapsed
            )
        )
      );
  }

  private _getChaptersForBook(bookItem: BookItem): Thenable<vscode.TreeItem[]> {
    if (!messageBroker) {
      return Promise.resolve([]);
    }

    return messageBroker
      .postMessage<BookChapter[]>({
        command: MESSAGE_COMMAND.GetChapterList,
        value: bookItem.bookUrl,
      })
      .then((ack) => {
        return (ack?.value || []).map(
          (chapter) =>
            new ChapterItem(
              chapter.title,
              chapter.bookUrl,
              chapter.index,
              vscode.TreeItemCollapsibleState.None,
              {
                command: VSCODE_COMMAND.LoadContent,
                title: "Load Content",
                arguments: [chapter],
              }
            )
        );
      });
  }
}

class BookItem extends vscode.TreeItem {
  constructor(
    readonly label: string,
    author: string,
    description: string,
    readonly bookUrl: string,
    readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.description = author;
    this.tooltip = description;
  }
}

class ChapterItem extends vscode.TreeItem {
  constructor(
    readonly label: string,
    readonly bookUrl: string,
    readonly chapterIndex: number,
    readonly collapsibleState: vscode.TreeItemCollapsibleState,
    readonly command: vscode.Command
  ) {
    super(label, collapsibleState);
  }
}
