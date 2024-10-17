import { Message, MessageType } from ".";
import { Navigation } from "@root/feature/navigation";

export type ResponseSender = (e: any) => void;

export const defaultHandler = async (message: Message, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    console.log({ TEST: true, message });
    switch (message.type) {
      case MessageType.GET_ALL: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation;
        console.log({ TEST: true, navigation });

        sendResponse({ navigation });
        break;
      }
      case MessageType.ADD: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation;
        const index = navigation.length;
        const newNav: Navigation = { id: index, name: message.payload.name, host: message.payload.host };
        navigation.push(newNav);
        console.log({ TEST: true, navigation });
        chrome.storage.local.set({ navigation });
        sendResponse({ navigation });

        break;
      }
      case MessageType.UPDATE_BY_ID: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation;
        const navToUpdate = navigation[message.payload.id];
        navToUpdate.host = message.payload.host;
        navToUpdate.name = message.payload.name;

        chrome.storage.local.set({ navigation });
        sendResponse({ navigation });

        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
}