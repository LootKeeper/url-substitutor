export enum TabType {
  GET_URL = 'GET_URL',
}

export type TabMessagePayload = GetUrlMessage;

export type BaseTabMessage<T> = {
  payload: T
}

export type GetUrlMessage = {
  type: TabType.GET_URL;
} & BaseTabMessage<{ url: string }>

