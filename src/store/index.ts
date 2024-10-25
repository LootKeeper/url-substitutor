import {
  addListener,
  configureStore,
  ListenerEffectAPI
} from '@reduxjs/toolkit';
import navigationReducer from '@root/feature/navigation/navigationSlice/index';
import tabReducer from '@root/feature/tab/tabSlice/index';
import toastReducer from '@root/feature/toast/toastSlice/index';

import listener from './listeners/main';
import './listeners/navigationListener';
import './listeners/tabListener';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    tab: tabReducer,
    toast: toastReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listener.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ListenerApi = ListenerEffectAPI<RootState, AppDispatch>;
export const addAppListener = addListener.withTypes<RootState, AppDispatch>();

export default store;
