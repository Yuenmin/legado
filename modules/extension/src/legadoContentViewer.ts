import * as vscode from "vscode";
import { apis, Book, BookChapter } from "./legado-web/lib";

class LegadoContentViewer {
  public static readonly viewType = "legadoContentWebview";
  private _panel?: vscode.WebviewPanel;
  private _book?: Book;
  private _chapter?: BookChapter;
  private _content = Promise.resolve("");

  selectChapter() {
    const selectBookTitle = "选择书籍";
    const selectChapterTitle = "选择章节";
    // TODO Show current selected chapter in status bar
    return new Promise<boolean>(async (resolve) => {
      const quickPick = vscode.window.createQuickPick<
        vscode.QuickPickItem & { book?: Book; chapter?: BookChapter }
      >();
      quickPick.title = selectBookTitle;
      quickPick.busy = true;
      quickPick.show();
      quickPick.items = await apis.getBookShelf().then((res) =>
        res.data.data.map((b) => ({
          label: b.name,
          description: b.author,
          book: b,
        }))
      );
      quickPick.busy = false;
      quickPick.onDidHide(() => {
        resolve(!!this._book && !!this._chapter);
      });
      quickPick.onDidChangeSelection(async (e) => {
        if (quickPick.title === selectBookTitle) {
          this._book = e[0].book;
          if (!this._book?.bookUrl) {
            quickPick.dispose();
            return;
          }

          quickPick.title = selectChapterTitle;
          quickPick.busy = true;
          quickPick.items = await apis
            .getChapterList(this._book.bookUrl)
            .then((res) => {
              const chapters: (vscode.QuickPickItem & {
                chapter?: BookChapter;
              })[] = [];
              res.data.data.forEach((v) => {
                const chapter = {
                  label: v.title,
                  chapter: v,
                };
                if (v.index === this._book?.durChapterIndex) {
                  chapters.unshift(
                    {
                      label: "last read",
                      kind: vscode.QuickPickItemKind.Separator,
                    },
                    chapter,
                    {
                      label: "all",
                      kind: vscode.QuickPickItemKind.Separator,
                    }
                  );
                }
                chapters.push(chapter);
              });
              return chapters;
            });
          quickPick.busy = false;
        } else if (quickPick.title === selectChapterTitle) {
          this._chapter = e[0].chapter;
          this._content = this._getContent();
          quickPick.dispose();
        }
      });
    });
  }

  private _getContent() {
    if (!this._book || !this._chapter) {
      return Promise.resolve("Error occurred when loading the content");
    }

    return apis
      .getBookContent(this._chapter.bookUrl, this._chapter.index)
      .then((res) => {
        if (this._book && this._chapter) {
          apis.saveBookProgress({
            name: this._book.name,
            author: this._book.author,
            durChapterIndex: this._chapter.index,
            durChapterPos: 0,
            durChapterTime: Date.now(),
            durChapterTitle: this._chapter.title,
          });
        }
        return res.data.data;
      })
      .catch(() => {
        return "Error occurred when loading the content";
      });
  }

  showContentInWebview() {
    // TODO Add button to switch chapter/ change title
    if (!this._book || !this._chapter) {
      return;
    }

    const panelTitle = this._chapter.title;
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (this._panel) {
      this._panel.title = panelTitle;
      // If we already have a panel, show it in the target column
      this._panel.reveal(columnToShowIn);
    } else {
      // Otherwise, create a new panel
      this._panel = vscode.window.createWebviewPanel(
        LegadoContentViewer.viewType,
        panelTitle,
        columnToShowIn || vscode.ViewColumn.One
      );

      // Reset when the current panel is closed
      this._panel.onDidDispose(() => {
        this._panel = undefined;
      });
    }

    this._renderWebview("Loading...");
    this._content.then((content) => {
      this._renderWebview(content);
    });
  }

  showContentAsComment() {
    if (!this._book || !this._chapter) {
      return;
    }

    this._renderComment("Loading...").then((value) => {
      if (value) {
        this._content.then((content) => {
          this._renderComment(content);
        });
      }
    });
  }

  private _renderWebview(content: string) {
    if (!this._panel) {
      return;
    }

    // TODO Enable change style
    this._panel.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Legado</title>
      </head>
      <body>
        <pre>${content}</pre>
      </body>
      </html>
    `;
  }

  private _renderComment(content: string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return Promise.resolve(false);
    }

    const formattedContent = `\n${content}\n`;
    const startFlag = "-lStart-";
    const endFlag = "-lEnd-";
    const matches = new RegExp(`${startFlag}(.*)${endFlag}`, "gs").exec(
      editor.document.getText()
    );

    if (!matches) {
      return editor.insertSnippet(
        new vscode.SnippetString(
          `$BLOCK_COMMENT_START${startFlag}${formattedContent}${endFlag}$BLOCK_COMMENT_END`
        ),
        editor.selection.active
      );
    }

    const range = new vscode.Range(
      editor.document.positionAt(matches.index + startFlag.length),
      editor.document.positionAt(
        matches.index + startFlag.length + matches[1].length
      )
    );

    return editor
      .edit((editBuilder) => {
        editBuilder.replace(range, formattedContent);
      })
      .then((edited) => {
        if (edited) {
          editor.revealRange(range);
        }
        return edited;
      });
  }
}

export default LegadoContentViewer;
