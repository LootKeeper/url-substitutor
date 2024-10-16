import React from 'react';
import {Navigation} from 'src/feature/navigation';

import * as styles from './styles.module.css';

export type Props = {
  item: Navigation;
};

const NavItem = ({item}: Props) => {
  const {name, host} = item;
  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <div className={styles.host}>{host}</div>
      <div className={styles.actions}>TEST</div>
    </div>
  );
};

export default NavItem;