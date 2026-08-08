import { NavMessagePayload, NavType } from './index';
import { Navigation } from '@root/feature/navigation';

export type ResponseSender = (e: unknown) => void;

type MutationResult = {
  success: boolean;
  navigation: Navigation[];
};

let mutationQueue: Promise<unknown> = Promise.resolve();

const loadNavigation = async (): Promise<Navigation[]> => {
  const navigationDb = await chrome.storage.local.get('navigation');
  return Array.isArray(navigationDb.navigation) ? navigationDb.navigation : [];
};

const mutateNavigation = (
  mutation: (navigation: Navigation[]) => boolean
): Promise<MutationResult> => {
  const operation = mutationQueue.then(async () => {
    const navigation = await loadNavigation();
    const success = mutation(navigation);

    if (success) {
      await chrome.storage.local.set({ navigation });
    }

    return { success, navigation };
  });

  mutationQueue = operation.catch(() => undefined);
  return operation;
};

export const defaultHandler = async (
  message: NavMessagePayload,
  _: never,
  sendResponse: ResponseSender
) => {
  if (message && message.type) {
    switch (message.type) {
      case NavType.GET_ALL: {
        await mutationQueue;
        const navigation = await loadNavigation();
        sendResponse({ navigation });
        break;
      }
      case NavType.ADD: {
        const response = await mutateNavigation((navigation) => {
          const id =
            navigation.reduce(
              (maxId, item) => Math.max(maxId, item.id),
              -1
            ) + 1;
          const newNav: Navigation = {
            id,
            name: message.payload.name,
            host: message.payload.host
          };
          navigation.push(newNav);
          return true;
        });
        sendResponse(response);
        break;
      }
      case NavType.UPDATE_BY_ID: {
        const response = await mutateNavigation((navigation) => {
          const idToUpdate = message.payload.id;
          const indexToUpdate = navigation.findIndex(
            (nav) => nav.id === idToUpdate
          );
          if (indexToUpdate === -1) {
            return false;
          }

          const navToUpdate = navigation[indexToUpdate];
          const { host, name } = message.payload;
          if (typeof host === 'string') {
            navToUpdate.host = host;
          }
          if (typeof name === 'string') {
            navToUpdate.name = name;
          }
          return true;
        });
        sendResponse(response);
        break;
      }
      case NavType.REMOVE_BY_ID: {
        const response = await mutateNavigation((navigation) => {
          const idToRemove = message.payload.id;
          const indexToRemove = navigation.findIndex(
            (nav) => nav.id === idToRemove
          );
          if (indexToRemove === -1) {
            return false;
          }

          navigation.splice(indexToRemove, 1);
          return true;
        });
        sendResponse(response);
        break;
      }
      default: {
        sendResponse({});
      }
    }
  }
};
