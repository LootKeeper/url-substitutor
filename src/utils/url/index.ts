import { IsHostValidator } from "../CORClasses/isHostValidator";
import { IsStringValidator } from "../CORClasses/isStringValidator";

const CORHost = new IsStringValidator(new IsHostValidator());

export const isValidHost = (host: unknown): boolean => {
  return CORHost.isValid(host);
} 