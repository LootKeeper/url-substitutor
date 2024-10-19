import { Navigation } from "@root/feature/navigation";
import { RemoveActionType } from "@root/feature/navigation/navigationSlice/actions";

export enum NavType {
  GET_ALL = 'GET_ALL',
  GET_BY_ID = 'GET_BY_ID',
  UPDATE_BY_ID = 'UPDATE',
  ADD = 'ADD',
  REMOVE_BY_ID = 'REMOVE_BY_ID'
}

export type NavMessagePayload = GetAllMessage | AddMessage | UpdateMessage | RemoveMessage;

export type BaseNavMessage<T> = {
  payload: T
}

export type GetAllMessage = {
  type: NavType.GET_ALL;
}

export type AddMessage = {
  type: NavType.ADD;
} & BaseNavMessage<Pick<Navigation, 'host' | 'name'>>

export type UpdateMessage = {
  type: NavType.UPDATE_BY_ID;
} & BaseNavMessage<Partial<Navigation>>;

export type RemoveMessage = {
  type: NavType.REMOVE_BY_ID;
} & BaseNavMessage<RemoveActionType>;