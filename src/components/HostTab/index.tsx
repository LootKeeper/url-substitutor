import React from 'react';
import List from '@root/components/NavList';
import AddNewItem from '@root/components/AddNewNavItem';

import * as styles from './styles.module.css';

const View = () => {
  return (
    <div className={styles.listWrapper}>
      <List />
      <AddNewItem />
    </div>
  )
}

export default View;