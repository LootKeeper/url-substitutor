import { TabMessagePayload, TabType } from '.';
import { changeHost, changePath, getCurrentTab } from './helper';

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (
  message: TabMessagePayload,
  _: never,
  sendResponse: ResponseSender
) => {
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
      case TabType.GET_PATH: {
        const tab = await getCurrentTab();
        if (tab) {
          const url = new URL(tab.url);
          if (url.pathname) {
            const path = `${url.pathname}${url.search}${url.hash}`;
            sendResponse({ success: true, payload: { path } });
            return;
          }
        }
        sendResponse({ success: false });
        break;
      }
      case TabType.SET_PATH: {
        const tab = await getCurrentTab();
        const path = message.payload.path;
        if (tab) {
          const newUrl = changePath(tab.url, path);
          await chrome.tabs.update(tab.id, { url: newUrl });
          sendResponse({ success: true });
          return;
        }
        sendResponse({ success: false });
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
};
