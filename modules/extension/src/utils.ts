import * as vscode from "vscode";

export const REMOTE_URL_SETTING = "legadoExt.remoteUrl";

export const REMOTE_URL_REGEX = /^$|^(http|https):\/\/.+$/;

export const VSCODE_COMMAND = {
  ConfigureRemoteUrl: "legadoExt.configureRemoteUrl",
  ShowLegadoWeb: "legadoExt.showLegadoWeb",
  ShowContentInWebview: "legadoExt.showContentInWebview",
  ShowContentInEditor: "legadoExt.showContentInEditor",
} as const;

export const MESSAGE_COMMAND = {
  SetRemoteUrl: "setRemoteUrl",
} as const;

export function getRemoteUrl() {
  return vscode.workspace.getConfiguration().get<string>(REMOTE_URL_SETTING);
}
