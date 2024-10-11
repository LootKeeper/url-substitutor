import { createSlice } from '@reduxjs/toolkit'
import { Navigation } from '../index';

export const counterSlice = createSlice({
  name: 'navigation',
  initialState: {
    navigation: [],
  },
  reducers: {
    add: (state, action) => {
      if (action.payload) {
        state.navigation.push(action.payload);
      }
    },
    remove: (state, action) => {
      if (action.payload) {
        const navToRemoveIndex = state.navigation.findIndex(action.payload);
        state.navigation.splice(navToRemoveIndex, 1);
      }
    },
    update: (state, action) => {
      if (action.payload) {
        const navToUpdateIndex = state.navigation.findIndex(action.payload.current);
        state.navigation[navToUpdateIndex] = action.payload.new;
      }
    }
  },
});


export const { add, remove, update } = counterSlice.actions

export default counterSlice.reducer