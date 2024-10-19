import { Message, Type } from ".";

import { defaultHandler as navigationHandler } from 'background/navigation/handler';
import { defaultHandler as tabHandler } from "background/tab/handler";

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (message: Message, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    switch (message.type) {
      case Type.NAV: {
        navigationHandler(message.payload, _, sendResponse);
        break;
      }
      case Type.TAB: {
        tabHandler(message.payload, _, sendResponse);
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
}