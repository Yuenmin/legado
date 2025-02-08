/* eslint-disable @typescript-eslint/ban-ts-comment */
import { baseURL_localStorage_key } from '@/api/axios'

export const MESSAGE_COMMAND = {
  SetRemoteUrl: 'setRemoteUrl',
} as const

declare global {
  interface Window {
    MessageBroker?: MessageBroker
  }
}

type Message<T = any> = {
  command: (typeof MESSAGE_COMMAND)[keyof typeof MESSAGE_COMMAND]
  value?: T
  isAck?: boolean
}

type Vscode = { postMessage(message: any): void } | undefined

class MessageBroker {
  private target?: Vscode
  private pendingMessages: Map<string, (value?: Message) => void>

  constructor() {
    this.pendingMessages = new Map()
    this.setTarget(
      // @ts-ignore
      typeof acquireVsCodeApi === 'function' ? acquireVsCodeApi() : undefined,
    )
  }

  setTarget(target: Vscode) {
    this.target = target
    window.addEventListener('message', this.handleMessageReceived.bind(this))
  }

  removeTarget() {
    this.target = undefined
    window.removeEventListener('message', this.handleMessageReceived.bind(this))
  }

  postMessage(message: Message, maxAttempts = 3, delay = 1000) {
    const { command } = message
    let retryInterval: ReturnType<typeof setInterval>
    return new Promise<Message | void>(resolve => {
      this.pendingMessages.set(command, resolve)
      let attempt = 0
      retryInterval = setInterval(() => {
        if (attempt >= maxAttempts) {
          console.log(`Max attempts reached for message: ${command}`)
          clearInterval(retryInterval)
          resolve()
          return
        }

        attempt += 1
        if (!this.target) {
          console.error('Target is not set.')
          return
        }
        this.target.postMessage(message)
        console.log(`Attempt ${attempt}: ${JSON.stringify(message)}`)
      }, delay)
    }).then(value => {
      if (retryInterval) {
        clearInterval(retryInterval)
      }
      return value
    })
  }

  private handleMessageReceived(event: MessageEvent) {
    const { command, value, isAck } = event.data
    // When ack is received, stop retrying
    if (isAck) {
      const promiseResolve = this.pendingMessages.get(command)
      if (promiseResolve) {
        promiseResolve(event.data)
        this.pendingMessages.delete(command)
      }
      console.log(`Acknowledgment received for message: ${command}`)
      return
    }

    switch (command) {
      case MESSAGE_COMMAND.SetRemoteUrl:
        localStorage.setItem(baseURL_localStorage_key, value)
        this.sendAcknowledgement({ command })
        break
    }
  }

  private sendAcknowledgement(message: Message) {
    if (!this.target) {
      console.error('Target is not set.')
      return
    }
    this.target.postMessage({ ...message, isAck: true })
  }
}
window.MessageBroker = new MessageBroker()
