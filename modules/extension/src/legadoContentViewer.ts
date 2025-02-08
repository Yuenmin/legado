import * as vscode from "vscode";
import { messageBroker } from "./extension";
import { MESSAGE_COMMAND } from "./utils";
import type { BookChapter } from "../../web/src/book";

class LegadoContentViewer {
  public static readonly viewType = "legadoContentWebview";
  private _panel?: vscode.WebviewPanel;
  private _chapter?: BookChapter;

  constructor(readonly context: vscode.ExtensionContext) {}

  async showContent(chapter: BookChapter) {
    this._chapter = chapter;
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (this._panel) {
      // If we already have a panel, show it in the target column
      this._panel.reveal(columnToShowIn);
    } else {
      // Otherwise, create a new panel
      this._panel = vscode.window.createWebviewPanel(
        LegadoContentViewer.viewType,
        chapter.title,
        columnToShowIn || vscode.ViewColumn.One
      );

      // Reset when the current panel is closed
      this._panel.onDidDispose(
        () => {
          this._panel = undefined;
        },
        null,
        this.context.subscriptions
      );
    }
    this._panel.webview.html = "Loading...";
    this._panel.webview.html = this._getWebviewContent(
      await this._getChapterContent()
    );
  }

  private _getChapterContent(): Promise<string> {
    if (!messageBroker || !this._chapter) {
      return Promise.resolve("");
    }

    return messageBroker
      .postMessage<string>({
        command: MESSAGE_COMMAND.GetContent,
        value: {
          bookUrl: this._chapter.bookUrl,
          chapterIndex: this._chapter.index,
        },
      })
      .then((ack) => ack?.value || "");
  }

  private _getWebviewContent(content: string) {
    return `
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
}

export default LegadoContentViewer;
