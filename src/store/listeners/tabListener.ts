import { ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { init, setCurrentUrl, applyUrl } from '@root/feature/tab/tabSlice';
import { ApplyUrlActionType, InitActionType } from '@root/feature/tab/tabSlice/actions';
import listener from './main';
import { Message, Type } from 'background/message';
import { TabMessagePayload, TabType } from 'background/tab';
import { AppDispatch, RootState } from '..';

type ListenerApi = ListenerEffectAPI<RootState, AppDispatch>;

const initEffect = async (_: InitActionType, listenerApi: ListenerApi) => {
  const tabMessage: TabMessagePayload = { type: TabType.GET_URL };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  const { url } = await chrome.runtime.sendMessage(message);
  if (url) {
    listenerApi.dispatch(setCurrentUrl({ url }))
  }
}

listener.startListening({
  actionCreator: init,
  effect: initEffect
});

const applyUrlEffect = async (action: PayloadAction<ApplyUrlActionType>, listenerApi: ListenerApi) => {
  const tabMessage: TabMessagePayload = { type: TabType.SET_URL, payload: action.payload };
  const message: Message = { type: Type.TAB, payload: tabMessage };
  await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(init());
}

listener.startListening({
  actionCreator: applyUrl,
  effect: applyUrlEffect,
})