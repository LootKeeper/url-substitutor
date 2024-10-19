import { IsHostValidator } from "../CORClasses/isHostValidator";
import { IsStringValidator } from "../CORClasses/isStringValidator";

const CORHost = new IsStringValidator(new IsHostValidator());

export const isValidHost = (host: unknown): boolean => {
  return CORHost.isValid(host);
}

export const isHostsEqual = (host1?: string, host2?: string): boolean => {
  if (URL.canParse(host1) && URL.canParse(host2)) {
    const url1 = new URL(host1);
    const url2 = new URL(host2);
    return url1.host === url2.host;
  }
  return false;
}