const currentTabQueryInfo = { active: true };

export const getCurrentTab = async () => {
  const [tab] = await chrome.tabs.query(currentTabQueryInfo);
  return tab;
}

export const changeHost = (currentUrl: string, newHost: string): URL => {
  const url = new URL(currentUrl);
  const newUrl = new URL(newHost);


  url.host = newUrl.host;

  return url;
}