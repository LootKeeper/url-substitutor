import { Navigation } from '.';

const isNavigation = (value: unknown): value is Navigation => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const navigation = value as Partial<Navigation>;
  return (
    typeof navigation.id === 'number' &&
    Number.isInteger(navigation.id) &&
    typeof navigation.name === 'string' &&
    typeof navigation.host === 'string'
  );
};

export const loadNavigation = async (): Promise<Navigation[]> => {
  const navigationDb = await chrome.storage.local.get('navigation');
  const navigation = navigationDb.navigation;

  if (!Array.isArray(navigation) || !navigation.every(isNavigation)) {
    throw new Error('Navigation storage is not initialized or is corrupted');
  }

  return navigation;
};
