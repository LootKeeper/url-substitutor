import { NavMessagePayload, NavType } from "./index";
import { Navigation } from "@root/feature/navigation";

export type ResponseSender = (e: unknown) => void;

export const defaultHandler = async (message: NavMessagePayload, _: never, sendResponse: ResponseSender) => {
  if (message && message.type) {
    switch (message.type) {
      case NavType.GET_ALL: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation;
        sendResponse({ navigation });
        break;
      }
      case NavType.ADD: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation as Navigation[];
        const index = navigation.length;
        const newNav: Navigation = { id: index, name: message.payload.name, host: message.payload.host };
        navigation.push(newNav);
        chrome.storage.local.set({ navigation });
        sendResponse({ navigation });

        break;
      }
      case NavType.UPDATE_BY_ID: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation as Navigation[];
        const idToUpdate = message.payload.id;
        const indexToRemove = navigation.findIndex((nav) => nav.id === idToUpdate);
        const navToUpdate = navigation[indexToRemove];
        const { host, name } = message.payload;
        if (typeof host === 'string') {
          navToUpdate.host = message.payload.host;
        }
        if (typeof name === 'string') {
          navToUpdate.name = message.payload.name;
        }
        chrome.storage.local.set({ navigation });
        sendResponse({ navigation });

        break;
      }
      case NavType.REMOVE_BY_ID: {
        const navigationDb = await chrome.storage.local.get('navigation');
        const navigation = navigationDb.navigation as Navigation[];
        const idToRemove = message.payload.id;
        const indexToRemove = navigation.findIndex((nav) => nav.id === idToRemove);
        navigation.splice(indexToRemove, 1);

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