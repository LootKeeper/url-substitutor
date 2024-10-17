import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { init } from '@root/feature/navigation/navigationSlice';

import List from '@root/components/NavList';
import AddNewItem from '@root/components/AddNewNavItem';

import { root, listWrapper } from './styles.module.css';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, []);

  return (
    <div className={root}>
      <div className={listWrapper}>
        <List />
        <AddNewItem />
      </div>
    </div>
  );
};

export default Main;
