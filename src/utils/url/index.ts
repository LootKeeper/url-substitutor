const parseHttpUrl = (value?: string): URL | null => {
  if (typeof value !== 'string') {
    return null;
  }

  try {
    const url = new URL(value);
    if (['http:', 'https:'].includes(url.protocol) && url.hostname) {
      return url;
    }
  } catch {
    // Invalid URLs are handled by returning null.
  }

  return null;
};

export const isValidHost = (host: unknown): boolean => {
  return parseHttpUrl(typeof host === 'string' ? host : undefined) !== null;
};

export const isHostsEqual = (host1?: string, host2?: string): boolean => {
  const url1 = parseHttpUrl(host1);
  const url2 = parseHttpUrl(host2);

  return url1 !== null && url2 !== null && url1.origin === url2.origin;
};
