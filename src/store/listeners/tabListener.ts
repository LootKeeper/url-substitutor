import { PayloadAction } from '@reduxjs/toolkit';
import {
  applyUrl,
  getPath,
  init,
  setCurrentUrl,
  setPath
} from '@root/feature/tab/tabSlice';
import {
  ApplyUrlActionType,
  GetCurrentPathActionType,
  InitActionType,
  SetCurrentPathActionType
} from '@root/feature/tab/tabSlice/actions';
import listener from './main';
import { Message, Type } from 'background/message';
import { TabMessagePayload, TabType } from 'background/tab';
import { ListenerApi } from '..';
import { showToast } from '@root/feature/toast/toastSlice';

const initEffect = async (_: InitActionType, listenerApi: ListenerApi) => {
  const tabMessage: TabMessagePayload = { type: TabType.GET_URL };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  const { url } = await chrome.runtime.sendMessage(message);
  if (url) {
    listenerApi.dispatch(setCurrentUrl({ url }));
  }
};

listener.startListening({
  actionCreator: init,
  effect: initEffect
});

const applyUrlEffect = async (
  action: PayloadAction<ApplyUrlActionType>,
  listenerApi: ListenerApi
) => {
  const tabMessage: TabMessagePayload = {
    type: TabType.SET_URL,
    payload: action.payload
  };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(init());
};

listener.startListening({
  actionCreator: applyUrl,
  effect: applyUrlEffect
});

const getPathEffect = async (
  _: PayloadAction<GetCurrentPathActionType>,
  listenerApi: ListenerApi
) => {
  const tabMessage: TabMessagePayload = { type: TabType.GET_PATH };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  const response = await chrome.runtime.sendMessage(message);
  if (response && response.success) {
    try {
      await navigator.clipboard.writeText(response.payload.path);
      listenerApi.dispatch(showToast({ toast: { status: 'success' } }));
    } catch (e) {
      console.error(e);
      listenerApi.dispatch(showToast({ toast: { status: 'error' } }));
    }
  }
};

listener.startListening({
  actionCreator: getPath,
  effect: getPathEffect
});

const setPathEffect = async (
  action: PayloadAction<SetCurrentPathActionType>,
  listenerApi: ListenerApi
) => {
  const tabMessage: TabMessagePayload = {
    type: TabType.SET_PATH,
    payload: action.payload
  };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  const response = await chrome.runtime.sendMessage(message);
  if (response && response.success) {
    listenerApi.dispatch(showToast({ toast: { status: 'success' } }));
  } else {
    listenerApi.dispatch(showToast({ toast: { status: 'error' } }));
  }
};

listener.startListening({
  actionCreator: setPath,
  effect: setPathEffect
});
