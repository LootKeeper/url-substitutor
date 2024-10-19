import { IValidator } from "./IValidator";

export class IsNonEmptyValidator implements IValidator {
  constructor(next?: IValidator) {
    this.next = next;
  }
  next?: IValidator;
  isValid(arg: unknown): boolean {
    if (Object.prototype.hasOwnProperty.call(arg, 'length') && (arg as []).length) {
      if (this.next) {
        return this.next.isValid(arg);
      }
      return true;
    }

    return false;
  }
}