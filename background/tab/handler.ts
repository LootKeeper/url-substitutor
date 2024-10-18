import { TabMessagePayload, TabType } from ".";

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (message: TabMessagePayload, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    console.log({ TEST: true, message });
    switch (message.type) {
      case TabType.GET_URL: {
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
}