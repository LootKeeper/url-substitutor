import { Navigation } from "@root/feature/navigation";

export enum MessageType {
  GET_ALL = 'GET_ALL',
  GET_BY_ID = 'GET_BY_ID',
  UPDATE_BY_ID = 'UPDATE',
  ADD = 'ADD',
}

export type Message = GetAllMessage | AddMessage | UpdateMessage;

export type BaseMessage<T> = {
  payload: T
}

export type GetAllMessage = {
  type: MessageType.GET_ALL;
}

export type AddMessage = {
  type: MessageType.ADD;
} & BaseMessage<Pick<Navigation, 'host' | 'name'>>

export type UpdateMessage = {
  type: MessageType.UPDATE_BY_ID;
} & BaseMessage<Navigation>;