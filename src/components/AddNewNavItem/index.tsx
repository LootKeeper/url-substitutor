import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from '@root/components/common/Button';

import { add } from '@root/feature/navigation/navigationSlice';
import { btnContainer } from './styles.module.css';

const NewNavItem = () => {
  const dispatch = useDispatch();
  const onClickCallback = useCallback(() => {
    console.log({ TEST: true });
    dispatch(add());
  }, []);
  return (
    <div className={btnContainer}>
      <Button label={'Добавить'} onClick={onClickCallback} colorScheme="blue" />
    </div>
  );
};

export default NewNavItem;
