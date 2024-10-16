import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Navigation } from '../index';
import { AddActionType, RemoveActionType, UpdateActionType } from './actions';

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
    add: (state, action: PayloadAction<AddActionType>) => {
      if (action.payload) {
        const id = state.items.length + 1;
        const { name, host } = action.payload;
        state.items.push({ id, name: name ?? host, host });
      }
    },
    remove: (state, action: PayloadAction<RemoveActionType>) => {
      if (action.payload) {
        const newItems = state.items.filter(item => item.id != action.payload.id);
        state.items = newItems;
      }
    },
    update: (state, action: PayloadAction<UpdateActionType>) => {
      if (action.payload) {
        const { id, host, name } = action.payload;
        const navToUpdate = state.items.find(item => item.id === id);
        if (host) {
          navToUpdate.host = host;
        }
        if (name) {
          navToUpdate.name = name;
        }
      }
    }
  },
});


export const { add, remove, update } = navigationSlice.actions

export default navigationSlice.reducer