import * as vscode from "vscode";

export const REMOTE_URL_SETTING = "legadoExt.remoteUrl";

export const REMOTE_URL_REGEX = /^$|^(http|https):\/\/.+$/;

export const VSCODE_COMMAND = {
  ConfigureRemoteUrl: "legadoExt.configureRemoteUrl",
  RefreshData: "legadoExt.refreshData",
  LoadContent: "legadoExt.loadContent",
} as const;

export const MESSAGE_COMMAND = {
  SetRemoteUrl: "setRemoteUrl",
  GetBookshelf: "getBookshelf",
  GetChapterList: "getChapterList",
  GetContent: "getContent",
} as const;

export function getRemoteUrl() {
  return vscode.workspace.getConfiguration().get<string>(REMOTE_URL_SETTING);
}

/**
 * 按照阅读的默认规则 解析阅读HTTP WebSocket API入口地址
 * @returns [http_url, webSocekt_url]
 */
export const parseLegadoHttpUrl = (
  http_url: string | URL
): [string, string] => {
  let url = new URL(http_url);
  const { protocol, port } = url;
  // websocket服务端口 为http服务端口 + 1
  let legado_webSocket_port;
  if (port !== "") {
    legado_webSocket_port = String(Number(port) + 1);
  } else {
    legado_webSocket_port = protocol.startsWith("https:") ? "444" : "81";
  }
  // websocket协议是否为加密版本
  const legado_webSocket_protocol = protocol.startsWith("https:")
    ? "wss://"
    : "ws://";

  const http_entry_point = url.toString();

  url.protocol = legado_webSocket_protocol;
  url.port = legado_webSocket_port;
  const webSocket_entry_point = url.toString();

  console.info("legado_api_config:");
  console.info({
    "http API入口": http_entry_point,
    "webSocket API入口": webSocket_entry_point,
  });
  return [http_entry_point, webSocket_entry_point];
};
