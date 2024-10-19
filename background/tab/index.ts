export enum TabType {
  GET_URL = 'GET_URL',
  SET_URL = 'SET_URL',
}

export type TabMessagePayload = GetUrlMessage | SetUrlMessage;

export type BaseTabMessage<T> = {
  payload: T
}

export type GetUrlMessage = {
  type: TabType.GET_URL;
};

export type SetUrlMessage = {
  type: TabType.SET_URL;
} & BaseTabMessage<{ url: string }>

