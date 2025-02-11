import * as vscode from "vscode";
import * as fs from "fs";
import { messageBroker } from "./extension";
import { getRemoteUrl } from "./utils";
import { baseURL_localStorage_key } from "./legado-web/lib";

class LegadoWebViewer {
  public static readonly viewType = "legadoWebWebview";
  private _panel?: vscode.WebviewPanel;

  constructor(private readonly _context: vscode.ExtensionContext) {}

  showWebview() {
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (this._panel) {
      // If we already have a panel, show it in the target column
      this._panel.reveal(columnToShowIn);
    } else {
      // Otherwise, create a new panel
      this._panel = vscode.window.createWebviewPanel(
        LegadoWebViewer.viewType,
        "Legado Web",
        columnToShowIn || vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [this._context.extensionUri],
        }
      );

      // Reset when the current panel is closed
      this._panel.onDidDispose(() => {
        messageBroker?.removeTarget();
        this._panel = undefined;
      });
    }
    this._panel.webview.html = this._getWebviewContent(this._panel.webview);
    messageBroker?.setTarget(this._panel.webview);
  }

  reload() {
    if (!this._panel?.webview.html) {
      return;
    }
    const newContent = this._getWebviewContent(this._panel.webview);
    if (this._panel.webview.html !== newContent) {
      this._panel.webview.html = newContent;
    }
  }

  private _getWebviewContent(webview: vscode.Webview) {
    const legadoRoot = "src/legado-web";
    try {
      const indexHtmlPath = webview.asWebviewUri(
        vscode.Uri.joinPath(
          this._context.extensionUri,
          legadoRoot,
          "index.html"
        )
      ).fsPath;
      const newPath = webview
        .asWebviewUri(
          vscode.Uri.joinPath(this._context.extensionUri, legadoRoot)
        )
        .toString();
      return fs
        .readFileSync(indexHtmlPath, "utf-8")
        .replace(/(href|src)="\.\/([^"]*)"/g, (_, attribute, value) => {
          return `${attribute}="${newPath}/${value}"`;
        })
        .replace(
          "<head>",
          `<head><script>localStorage.setItem("${baseURL_localStorage_key}", "${getRemoteUrl()}")</script>`
        );
    } catch (e) {
      console.error(e);
    }
    return "";
  }
}

export default LegadoWebViewer;
