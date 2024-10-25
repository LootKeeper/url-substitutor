export enum TabType {
  GET_URL = 'GET_URL',
  SET_URL = 'SET_URL',
  GET_PATH = 'GET_PATH',
  SET_PATH = 'SET_PATH',
}

export type TabMessagePayload = GetUrlMessage | SetUrlMessage | GetPathMessage | SetPathMessage;

export type BaseTabMessage<T> = {
  payload: T
}

export type GetUrlMessage = {
  type: TabType.GET_URL;
};

export type SetUrlMessage = {
  type: TabType.SET_URL;
} & BaseTabMessage<{ url: string }>

export type GetPathMessage = {
  type: TabType.GET_PATH;
}

export type SetPathMessage = {
  type: TabType.SET_PATH;
} & BaseTabMessage<{ path: string }>;

