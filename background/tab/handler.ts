import { TabMessagePayload, TabType } from ".";
import { changeHost, getCurrentTab } from './helper';

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (message: TabMessagePayload, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    switch (message.type) {
      case TabType.GET_URL: {
        const tab = await getCurrentTab();
        if (tab) {
          sendResponse({ url: tab.url });
        }
        sendResponse({});
        break;
      }
      case TabType.SET_URL: {
        const tab = await getCurrentTab();
        const nextHost = message.payload.url;
        if (tab) {
          const newUrl = changeHost(tab.url, nextHost);
          await chrome.tabs.update(tab.id, { url: newUrl.toString() });
        }
        sendResponse({});
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
}