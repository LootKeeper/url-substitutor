import { Message } from './message';
import { defaultHandler, ResponseSender } from './message/handler';
import { Navigation } from '@root/feature/navigation';

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    const navigation: Navigation[] = [];
    chrome.storage.local.set({
      navigation
    });
  }
})

chrome.runtime.onMessage.addListener((message: Message, _: never, sendResponse: ResponseSender) => {
  defaultHandler(message, _, sendResponse);
  return true;
});