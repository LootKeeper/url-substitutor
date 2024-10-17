import { configureStore, } from '@reduxjs/toolkit';
import navigationReducer from '@root/feature/navigation/navigationSlice/index';
import listener from './listeners/main';
import './listeners/navigationListener';

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listener.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;