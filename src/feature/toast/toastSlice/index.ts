import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToastActionType } from './actions';

interface IToastSliceState {
  toast: object;
}

const initialState: IToastSliceState = {
  toast: null
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (_, __: PayloadAction<ToastActionType>) => _
  }
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
