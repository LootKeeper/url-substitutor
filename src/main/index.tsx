import React from 'react';

import List from '@root/components/NavList';
import AddNewItem from '@root/components/AddNewNavItem';

import {root, listWrapper} from './styles.module.css';

const Main = () => 
  <div className={root}>
      <div className={listWrapper}>
        <List />
        <AddNewItem />
      </div>
  </div>

export default Main;