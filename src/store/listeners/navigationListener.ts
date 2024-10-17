import { ListenerEffectAPI, PayloadAction } from '@reduxjs/toolkit';
import { init, add, update, remove, set } from '@root/feature/navigation/navigationSlice';
import { AddActionType, RemoveActionType, UpdateActionType, InitActionType } from '@root/feature/navigation/navigationSlice/actions';
import listener from './main';
import { Message, MessageType } from 'background/message';
import { AppDispatch, RootState } from '..';

type ListenerApi = ListenerEffectAPI<RootState, AppDispatch>;

const initEffect = async (action: InitActionType, listenerApi: ListenerApi) => {
  const message: Message = { type: MessageType.GET_ALL };
  const navigation = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set({ navigation }));
}

listener.startListening({
  actionCreator: init,
  effect: initEffect,
});

const addEffect = async (action: PayloadAction<AddActionType>, listenerApi: ListenerApi) => {
  const message: Message = { type: MessageType.ADD, payload: { name: '', host: '' } };
  console.log({ TEST: true, message });
  const navigation = await chrome.runtime.sendMessage(message);
  console.log({ TEST: true, navigation });

  listenerApi.dispatch(set(navigation));
}

listener.startListening({
  actionCreator: add,
  effect: addEffect,
});

const updateEffect = async (action: PayloadAction<UpdateActionType>, listenerApi: ListenerApi) => {
  const message: Message = { type: MessageType.UPDATE_BY_ID, payload: action.payload };
  const navigation = await chrome.runtime.sendMessage(message);
  listenerApi.dispatch(set(navigation));
}

listener.startListening({
  actionCreator: update,
  effect: updateEffect,
})

