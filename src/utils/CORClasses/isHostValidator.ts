import { IValidator } from "./IValidator";

export class IsHostValidator implements IValidator {
  regexpMatcher: RegExp = /http(s ?): \/\/[a-zA-Z.0-9]+\//g;
  constructor(next?: IValidator) {
    this.next = next;
  }
  next?: IValidator;
  isValid(arg: unknown): boolean {
    if (this.regexpMatcher.test(arg as string)) {
      if (this.next) {
        return this.next.isValid(arg);
      }
      return true;
    }
    return false;
  }
}