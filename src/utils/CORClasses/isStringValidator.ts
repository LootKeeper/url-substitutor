import { IValidator } from "./IValidator";

export class IsStringValidator implements IValidator {
  constructor(next?: IValidator) {
    this.next = next;
  }
  next?: IValidator;
  isValid(arg: unknown): boolean {
    if (typeof arg === 'string') {
      if (this.next) {
        return this.next.isValid(arg);
      }
      return true;
    }

    return false;
  }
}