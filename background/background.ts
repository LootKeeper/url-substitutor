import { Message, MessageType } from './message';
import { Navigation } from '@root/feature/navigation';

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    chrome.storage.local.set({
      navigation: []
    });
  }
})

chrome.runtime.onMessage.addListener((message: Message, _: never, sendResponse) => {
  if (message && message.type) {
    console.log({ TEST: true, message });
    switch (message.type) {
      case MessageType.GET_ALL: {
        const navigation = (chrome.storage.local.get('navigation') as unknown as Navigation[]);
        console.log({ TEST: true, navigation });

        sendResponse({ navigation });
        break;
      }
      case MessageType.ADD: {
        const navigation = (chrome.storage.local.get('navigation') as unknown as Navigation[]);

        const index = navigation.length;
        const newNav: Navigation = { id: index, name: message.payload.name, host: message.payload.host };
        navigation.push(newNav);
        console.log({ TEST: true, navigation });
        chrome.storage.local.set({ navigation });
        sendResponse({ navigation });

        break;
      }
      case MessageType.UPDATE_BY_ID: {
        const navigation = (chrome.storage.local.get('navigation') as unknown as Navigation[]);
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
})