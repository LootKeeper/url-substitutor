import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Navigation } from '../index';
import { AddActionType, RemoveActionType, UpdateActionType, InitActionType, SetActionType, SaveAllActionType } from './actions';

interface INavigationState {
  items: Navigation[];
}

const initialState: INavigationState = {
  items: []
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    init: (state, _: InitActionType) => state,
    set: (state, action: PayloadAction<SetActionType>) => {
      console.log({ TEST: true, set: action });
      state.items = action.payload.navigation;
    },
    add: (state, _: PayloadAction<AddActionType>) => state,
    remove: (state, _: PayloadAction<RemoveActionType>) => state,
    update: (state, _: PayloadAction<UpdateActionType>) => state,
    saveAll: (state, _: PayloadAction<SaveAllActionType>) => state,
  },
});


export const { add, remove, update, init, set, saveAll } = navigationSlice.actions

export default navigationSlice.reducer