import * as vscode from "vscode";
import { apis, Book, BookChapter } from "./legado-web/lib";

class LegadoContentViewer {
  public static readonly viewType = "legadoContentWebview";
  private _errorMessage = "An error occurred when loading the data.";
  private _statusBarItem: vscode.StatusBarItem;
  private _content: Promise<{
    originalText: string;
    text: string;
    lastReadIndex: number;
  }>;
  private _panel?: vscode.WebviewPanel;
  private _book?: Book;
  private _chapter?: BookChapter;

  constructor(private readonly _context: vscode.ExtensionContext) {
    this._content = Promise.resolve({
      originalText: "",
      text: "",
      lastReadIndex: -1,
    });
    this._statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Right,
      100
    );
    this._context.subscriptions.push(this._statusBarItem);
  }

  promptSelectContent() {
    const selectBookTitle = "Select a book";
    const selectChapterTitle = "Select a chapter";
    return new Promise<boolean>(async (resolve) => {
      const quickPick = vscode.window.createQuickPick<
        vscode.QuickPickItem & { book?: Book; chapter?: BookChapter }
      >();
      quickPick.onDidHide(() => {
        resolve(!!this._book && !!this._chapter);
      });
      quickPick.title = selectBookTitle;
      quickPick.show();
      quickPick.busy = true;
      quickPick.items = await this._getBookQuickPickItems();
      quickPick.busy = false;
      quickPick.onDidChangeSelection(async (e) => {
        if (quickPick.title === selectBookTitle) {
          this._book = e[0].book;
          quickPick.title = selectChapterTitle;
          quickPick.busy = true;
          quickPick.items = await this._getChapterQuickPickItems();
          quickPick.busy = false;
        } else if (quickPick.title === selectChapterTitle) {
          this._chapter = e[0].chapter;
          if (this._book && this._chapter) {
            this._statusBarItem.name = this._chapter.title;
            this._statusBarItem.tooltip = this._book.name;
            this._statusBarItem.show();
          }
          quickPick.dispose();
        }
      });
    });
  }

  previousContent() {}

  // TODO Add button to switch chapter/ change title
  nextContent() {
    this._content.then((content) => {
      const startPos = content.lastReadIndex + 1;
      const endPos = content.lastReadIndex + 100;
      if (endPos >= content.originalText.length) {
        this._content = new Promise(async (resolve) => {
          const newChapter = (await this._getChapterQuickPickItems()).find(
            (value) =>
              this._chapter &&
              value.chapter &&
              value.chapter.index === this._chapter.index + 1
          );
          if (!newChapter) {
            resolve(content);
            return;
          }

          this._chapter = newChapter.chapter;
          const originalText = await this._getContent();
          resolve({
            originalText,
            text: originalText.substring(startPos, endPos),
            lastReadIndex: endPos,
          });
        });
      } else {
        this._content = Promise.resolve({
          originalText: content.originalText,
          text: content.originalText.substring(startPos, endPos),
          lastReadIndex: endPos,
        });
      }
      if (this._panel) {
        this.showContentInWebview();
      }
      this.showContentAsComment();
    });
  }

  showContentInWebview() {
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
      this._panel.onDidDispose(
        () => {
          this._panel = undefined;
        },
        null,
        this._context.subscriptions
      );
    }

    this._renderWebview("Loading...");
    this._content.then((content) => {
      this._renderWebview(content.text);
    });
  }

  showContentAsComment(insertWhenNoMatch = false) {
    if (!this._book || !this._chapter) {
      return;
    }

    this._renderComment("Loading...", insertWhenNoMatch).then((canEdit) => {
      if (!canEdit) {
        return;
      }

      this._content.then((content) => {
        this._renderComment(content.text);
      });
    });
  }

  private _getBookQuickPickItems() {
    return apis
      .getBookShelf()
      .then((res) =>
        res.data.data.map((b) => ({
          label: b.name,
          description: b.author,
          book: b,
        }))
      )
      .catch(() => {
        vscode.window.showErrorMessage(this._errorMessage);
        return [];
      });
  }

  private _getChapterQuickPickItems() {
    if (!this._book) {
      vscode.window.showErrorMessage(this._errorMessage);
      return Promise.resolve([]);
    }
    return apis
      .getChapterList(this._book.bookUrl)
      .then((res) => {
        let lastReadChapterIndex = -1;
        const chapters: (vscode.QuickPickItem & {
          chapter?: BookChapter;
        })[] = res.data.data.map((v, i) => {
          if (v.index === this._book?.durChapterIndex) {
            lastReadChapterIndex = i;
          }
          return {
            label: v.title,
            chapter: v,
          };
        });
        if (lastReadChapterIndex >= 0) {
          chapters.unshift(
            {
              label: "last read",
              kind: vscode.QuickPickItemKind.Separator,
            },
            chapters[lastReadChapterIndex],
            {
              label: "all",
              kind: vscode.QuickPickItemKind.Separator,
            }
          );
        }
        return chapters;
      })
      .catch(() => {
        vscode.window.showErrorMessage(this._errorMessage);
        return [];
      });
  }

  private _getContent() {
    if (!this._book || !this._chapter) {
      return Promise.resolve(this._errorMessage);
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
        return this._errorMessage;
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

  private _renderComment(content: string, insertWhenNoMatch = false) {
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
      if (!insertWhenNoMatch) {
        return Promise.resolve(false);
      }
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
