import { NavMessagePayload } from "background/navigation";
import { Message, Type } from ".";

import { defaultHandler as navigationHandler } from '../navigation/handler';

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (message: Message, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    console.log({ TEST: true, message });
    switch (message.type) {
      case Type.NAV: {
        navigationHandler(message.payload as NavMessagePayload, _, sendResponse);
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
}