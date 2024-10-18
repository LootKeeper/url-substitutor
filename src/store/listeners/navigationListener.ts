import { ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { init, add, update, remove, set } from '@root/feature/navigation/navigationSlice';
import { AddActionType, RemoveActionType, UpdateActionType, InitActionType } from '@root/feature/navigation/navigationSlice/actions';
import listener from './main';
import { Message, Type } from 'background/message';
import { NavMessagePayload, NavType } from 'background/navigation';
import { AppDispatch, RootState } from '..';

type ListenerApi = ListenerEffectAPI<RootState, AppDispatch>;

const initEffect = async (_: InitActionType, listenerApi: ListenerApi) => {
  const navMessage: NavMessagePayload = { type: NavType.GET_ALL };
  const message: Message = { type: Type.NAV, payload: navMessage };
  const { navigation } = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set({ navigation }));
}

listener.startListening({
  actionCreator: init,
  effect: initEffect,
});

const addEffect = async (_: PayloadAction<AddActionType>, listenerApi: ListenerApi) => {
  const navMessage: NavMessagePayload = { type: NavType.ADD, payload: { name: '', host: '' } };
  const message: Message = { type: Type.NAV, payload: navMessage };
  const { navigation } = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set({ navigation }));
}

listener.startListening({
  actionCreator: add,
  effect: addEffect,
});

const updateEffect = async (action: PayloadAction<UpdateActionType>, listenerApi: ListenerApi) => {
  const navMessage: NavMessagePayload = { type: NavType.UPDATE_BY_ID, payload: action.payload };
  const message: Message = { type: Type.NAV, payload: navMessage };
  const { navigation } = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set({ navigation }));
}

listener.startListening({
  actionCreator: update,
  effect: updateEffect,
})

const removeEffect = async (action: PayloadAction<RemoveActionType>, listenerApi: ListenerApi) => {
  const navMessage: NavMessagePayload = { type: NavType.REMOVE_BY_ID, payload: action.payload };
  const message: Message = { type: Type.NAV, payload: navMessage };
  const { navigation } = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set({ navigation }));
}

listener.startListening({
  actionCreator: remove,
  effect: removeEffect,
})

