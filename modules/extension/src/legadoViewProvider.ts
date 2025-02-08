import * as vscode from "vscode";
import * as fs from "fs";
import { legadoDataProvider, messageBroker } from "./extension";
import { getRemoteUrl, MESSAGE_COMMAND } from "./utils";

class LegadoViewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "legadoWebview";

  private _view?: vscode.WebviewView;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    messageBroker?.setTarget(webviewView.webview);
    this.syncRemoteUrl();
    webviewView.onDidChangeVisibility(() => {
      this.syncRemoteUrl();
    });
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const legadoRoot = "src/legado-web";
    try {
      const indexHtmlPath = webview.asWebviewUri(
        vscode.Uri.joinPath(this._extensionUri, legadoRoot, "index.html")
      ).fsPath;
      const newPath = webview
        .asWebviewUri(vscode.Uri.joinPath(this._extensionUri, legadoRoot))
        .toString();
      return fs
        .readFileSync(indexHtmlPath, "utf-8")
        .replace(/(href|src)="\.\/([^"]*)"/g, (_, attribute, value) => {
          return `${attribute}="${newPath}/${value}"`;
        });
    } catch (e) {
      console.error(e);
    }
    return "";
  }

  syncRemoteUrl() {
    if (!this._view?.visible || !messageBroker) {
      return;
    }
    const remoteUrl = getRemoteUrl();
    if (!remoteUrl) {
      return;
    }

    messageBroker
      .postMessage({
        command: MESSAGE_COMMAND.SetRemoteUrl,
        value: remoteUrl,
      })
      .then((acknowledged) => {
        if (acknowledged) {
          this.refresh();
        }
      });
  }

  refresh() {
    if (!this._view?.webview.html) {
      return;
    }
    const temp = this._view.webview.html;
    this._view.webview.html = "";
    this._view.webview.html = temp;
    legadoDataProvider?.refresh();
  }
}

export default LegadoViewProvider;
