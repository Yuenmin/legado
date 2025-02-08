import * as vscode from "vscode";
import { MESSAGE_COMMAND, REMOTE_URL_SETTING } from "./utils";
import {
  attachConfigChangedListener,
  removeConfigChangedListener,
} from "./extension";

export type Message<T = any> = {
  command: (typeof MESSAGE_COMMAND)[keyof typeof MESSAGE_COMMAND];
  value?: T;
  isAck?: boolean;
};

class MessageBroker {
  private target?: vscode.Webview;
  private pendingMessages: Map<string, (value?: Message) => void>;

  constructor() {
    this.pendingMessages = new Map();
  }

  setTarget(target: vscode.Webview) {
    this.target = target;
    this.target.onDidReceiveMessage(this.handleMessageReceived.bind(this));
  }

  removeTarget() {
    this.target = undefined;
  }

  postMessage<T>(message: Message, maxAttempts = 3, delay = 1000) {
    const { command } = message;
    let retryInterval: NodeJS.Timeout;
    return new Promise<Message<T> | void>((resolve) => {
      this.pendingMessages.set(command, resolve);
      let attempt = 0;
      retryInterval = setInterval(() => {
        if (attempt >= maxAttempts) {
          console.log(`Max attempts reached for message: ${command}`);
          clearInterval(retryInterval);
          resolve();
          return;
        }

        attempt += 1;
        if (!this.target) {
          console.error("Target is not set.");
          return;
        }
        this.target.postMessage(message);
        console.log(`Attempt ${attempt}: ${JSON.stringify(message)}`);
      }, delay);
    }).then((value) => {
      if (retryInterval) {
        clearInterval(retryInterval);
      }
      return value;
    });
  }

  private handleMessageReceived(message: Message) {
    const { command, value, isAck } = message;
    // When ack is received, stop retrying
    if (isAck) {
      const promiseResolve = this.pendingMessages.get(command);
      if (promiseResolve) {
        promiseResolve(message);
        this.pendingMessages.delete(command);
      }
      console.log(`Acknowledgment received for message: ${command}`);
      return;
    }

    switch (command) {
      case MESSAGE_COMMAND.SetRemoteUrl:
        removeConfigChangedListener();
        vscode.workspace
          .getConfiguration()
          .update(REMOTE_URL_SETTING, value, vscode.ConfigurationTarget.Global)
          .then(() => {
            attachConfigChangedListener();
          });
        this.sendAcknowledgement({ command });
        break;
    }
  }

  private sendAcknowledgement(message: Message) {
    if (!this.target) {
      console.error("Target is not set.");
      return;
    }
    this.target.postMessage({ ...message, isAck: true });
  }
}

export default MessageBroker;
