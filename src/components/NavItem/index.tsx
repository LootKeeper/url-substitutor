import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from 'src/feature/navigation';
import { update } from 'src/feature/navigation/navigationSlice';

import Input from '@root/components/common/Input';
import Button from '@root/components/common/Button';

import * as styles from './styles.module.css';

export type Props = {
  item: Navigation;
};

const NavItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { name, host, id } = item;

  const onNameChangeCallback = useCallback(
    (value: string) => {
      dispatch(update({ id, name: value, host }));
    },
    [id]
  );

  const onHostChangeCallback = useCallback(
    (value: string) => {
      dispatch(update({ id, host: value, name }));
    },
    [id]
  );

  return (
    <div className={styles.root}>
      <div className={styles.name}>
        <Input
          value={name}
          placeholder={'Name...'}
          onChange={onNameChangeCallback}
        />
      </div>
      <div className={styles.host}>
        <Input
          value={host}
          placeholder={'Host...'}
          onChange={onHostChangeCallback}
        />
      </div>
      <div className={styles.actions}>
        <Button onClick={() => console.log('apply')} label=":check:" />
        <Button onClick={() => console.log('delete')} label=":cross:" />
      </div>
    </div>
  );
};

export default NavItem;
