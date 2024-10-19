import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from '@chakra-ui/react';

import { init as navInit } from '@root/feature/navigation/navigationSlice';
import { init as tabInit } from '@root/feature/tab/tabSlice';

import List from '@root/components/NavList';
import AddNewItem from '@root/components/AddNewNavItem';

import { root, listWrapper } from './styles.module.css';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(navInit());
    dispatch(tabInit());
  }, []);

  return (
    <Box className={root}>
      <div className={listWrapper}>
        <List />
        <AddNewItem />
      </div>
    </Box>
  );
};

export default Main;
