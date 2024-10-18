export interface IValidator {
  next?: IValidator;
  isValid(arg: unknown): boolean;
}