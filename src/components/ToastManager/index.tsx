import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { addAppListener, ListenerApi } from '@root/store';

import { PayloadAction } from '@reduxjs/toolkit';
import { ToastActionType } from '@root/feature/toast/toastSlice/actions';
import { showToast } from '@root/feature/toast/toastSlice';
import { Toast } from '@root/feature/toast';

const View = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const showToastCallback = useCallback((toastCfg: Toast) => {
    toast(toastCfg);
  }, []);

  useEffect(() => {
    dispatch(
      addAppListener({
        actionCreator: showToast,
        effect: (action: PayloadAction<ToastActionType>, _: ListenerApi) =>
          showToastCallback(action.payload.toast)
      })
    );
  });
  return <></>;
};

export default View;
