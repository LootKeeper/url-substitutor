const currentTabQueryInfo = { active: true, currentWindow: true };

export const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query(currentTabQueryInfo);
  return tab;
};

export const changeHost = (currentUrl: string, newHost: string): URL => {
  const url = new URL(currentUrl);
  const newUrl = new URL(newHost);

  if (!['http:', 'https:'].includes(newUrl.protocol) || !newUrl.hostname) {
    throw new TypeError('Base URL must use HTTP or HTTPS');
  }

  url.protocol = newUrl.protocol;
  url.host = newUrl.host;

  return url;
};

export const changePath = (currentUrl: string, newPath: string): string => {
  const url = new URL(currentUrl);
  const normalizedPath = newPath.startsWith('/') ? newPath : `/${newPath}`;
  const newUrl = new URL(normalizedPath, url.origin);

  if (newUrl.origin !== url.origin) {
    throw new TypeError('Path must not change the current origin');
  }

  return newUrl.toString();
};
