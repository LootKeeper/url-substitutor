import { IValidator } from "./IValidator";

export class IsHostValidator implements IValidator {
  constructor(next?: IValidator) {
    this.next = next;
  }
  next?: IValidator;
  isValid(arg: unknown): boolean {
    if (URL.canParse(arg as string)) {
      if (this.next) {
        return this.next.isValid(arg);
      }
      return true;
    }
    return false;
  }
}