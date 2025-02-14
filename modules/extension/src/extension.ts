import * as vscode from "vscode";
import {
  VSCODE_COMMAND,
  REMOTE_URL_REGEX,
  REMOTE_URL_SETTING,
  getRemoteUrl,
} from "./utils";
import MessageBroker from "./messageBroker";
import LegadoWebViewer from "./legadoWebViewer";
import LegadoContentViewer from "./legadoContentViewer";
import { axiosInstance } from "./legado-web/lib";

export let messageBroker: MessageBroker | undefined;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  axiosInstance.defaults.timeout = 5000;
  axiosInstance.defaults.baseURL = getRemoteUrl();
  const legadoContentViewer = new LegadoContentViewer(context);
  const legadoWebViewer = new LegadoWebViewer(context);
  messageBroker = new MessageBroker();

  const configureRemoteUrlDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.ConfigureRemoteUrl,
    () => {
      const initialRemoteUrl = getRemoteUrl();
      vscode.window
        .showInputBox({
          placeHolder: "Address with port number (eg. http://10.10.10.10:2000)",
          value: initialRemoteUrl,
          validateInput: (text) => {
            return REMOTE_URL_REGEX.test(text) ? null : "Invalid remote url";
          },
        })
        .then((value) => {
          if (value === undefined || initialRemoteUrl === value) {
            return;
          }
          vscode.workspace
            .getConfiguration()
            .update(
              REMOTE_URL_SETTING,
              value,
              vscode.ConfigurationTarget.Global
            );
        });
    }
  );
  const showLegadoWebDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.ShowLegadoWeb,
    () => {
      legadoWebViewer.showWebview();
    }
  );
  const showContentInWebviewDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.ShowContentInWebview,
    () => {
      legadoContentViewer.promptSelectContent().then((selected) => {
        if (selected) {
          legadoContentViewer.showContentInWebview();
        }
      });
    }
  );
  const showContentInEditorDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.ShowContentInEditor,
    () => {
      legadoContentViewer.promptSelectContent().then((selected) => {
        if (selected) {
          legadoContentViewer.showContentAsComment(true);
        }
      });
    }
  );

  context.subscriptions.push(
    configureRemoteUrlDisp,
    showLegadoWebDisp,
    showContentInWebviewDisp,
    showContentInEditorDisp,
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(REMOTE_URL_SETTING)) {
        axiosInstance.defaults.baseURL = getRemoteUrl();
        legadoWebViewer?.reload();
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {
  messageBroker = undefined;
}
