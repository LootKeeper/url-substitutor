import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Navigation } from '../index';
import { AddActionType, RemoveActionType, UpdateActionType, InitActionType, SetActionType } from './actions';

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
      state.items = action.payload.navigation;
    },
    add: (state, _: PayloadAction<AddActionType>) => state,
    remove: (state, action: PayloadAction<RemoveActionType>) => {
      if (action.payload) {
        const newItems = state.items.filter(item => item.id != action.payload.id);
        state.items = newItems;
      }
    },
    update: (state, _: PayloadAction<UpdateActionType>) => state,
  },
});


export const { add, remove, update, init, set } = navigationSlice.actions

export default navigationSlice.reducer