import * as vscode from "vscode";
import { LegadoTreeDataProvider } from "./legadoTreeDataProvider";
import {
  VSCODE_COMMAND,
  REMOTE_URL_REGEX,
  REMOTE_URL_SETTING,
  getRemoteUrl,
} from "./utils";
import MessageBroker from "./messageBroker";
import LegadoViewProvider from "./legadoViewProvider";
import LegadoContentViewer from "./legadoContentViewer";
import { axiosInstance } from "./legado-web/lib";

let extensionContext: vscode.ExtensionContext | undefined;
let configChangedDisposable: vscode.Disposable | undefined;
export let messageBroker: MessageBroker | undefined;
export let legadoDataProvider: LegadoTreeDataProvider | undefined;
export let legadoContentViewer: LegadoContentViewer | undefined;
export let legadoViewProvider: LegadoViewProvider | undefined;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const remoteUrl = getRemoteUrl();
  if (remoteUrl) {
    axiosInstance.defaults.baseURL = remoteUrl;
  }
  extensionContext = context;
  messageBroker = new MessageBroker();
  legadoDataProvider = new LegadoTreeDataProvider();
  legadoContentViewer = new LegadoContentViewer(context);
  legadoViewProvider = new LegadoViewProvider(context.extensionUri);

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
        .then(async (value) => {
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
  const refreshDataDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.RefreshData,
    () => legadoViewProvider?.refresh()
  );
  const loadContentDisp = vscode.commands.registerCommand(
    VSCODE_COMMAND.LoadContent,
    async (chapter) => {
      if (!chapter) {
        return;
      }
      legadoContentViewer?.showContent(chapter);
    }
  );
  context.subscriptions.push(
    configureRemoteUrlDisp,
    refreshDataDisp,
    loadContentDisp,
    vscode.window.registerWebviewViewProvider(
      LegadoViewProvider.viewType,
      legadoViewProvider
    )
  );

  attachConfigChangedListener();

  vscode.window.createTreeView("bookshelf", {
    treeDataProvider: legadoDataProvider,
  });
}

// This method is called when your extension is deactivated
export function deactivate() {
  removeConfigChangedListener();
  extensionContext = undefined;
  messageBroker = undefined;
  legadoDataProvider = undefined;
  legadoContentViewer = undefined;
  legadoViewProvider = undefined;
}

export function attachConfigChangedListener() {
  configChangedDisposable = vscode.workspace.onDidChangeConfiguration(
    (e) => {
      if (e.affectsConfiguration(REMOTE_URL_SETTING)) {
        legadoViewProvider?.syncRemoteUrl();
      }
    },
    null,
    extensionContext?.subscriptions
  );
}

export function removeConfigChangedListener() {
  configChangedDisposable?.dispose();
}
