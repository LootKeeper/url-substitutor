import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tab } from '../index';
import { InitActionType, SetCurrentUrlActionType, ApplyUrlActionType } from './actions';

interface ITabState {
  currentTab: Tab;
}

const initialState: ITabState = {
  currentTab: { url: '' }
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    init: (state, _: InitActionType) => state,
    setCurrentUrl: (state, action: PayloadAction<SetCurrentUrlActionType>) => {
      state.currentTab.url = action.payload.url;
    },
    applyUrl: (state, _: PayloadAction<ApplyUrlActionType>) => state,
  },
});


export const { init, setCurrentUrl, applyUrl } = tabSlice.actions

export default tabSlice.reducer