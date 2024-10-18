import { NavMessagePayload } from '../navigation/index';

export enum Type {
  TAB = 'TAB',
  NAV = 'NAVIGATION',
}

export type Message = TabMessage | NavMessage;

export type BaseMessage<T> = {
  payload: T
}

export type TabMessage = {
  type: Type.TAB;
} & BaseMessage<unknown>

export type NavMessage = {
  type: Type.NAV;
} & BaseMessage<NavMessagePayload>;
