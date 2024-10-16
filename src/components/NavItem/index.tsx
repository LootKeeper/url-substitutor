import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { isValidHost } from '@root/utils/url';

import { Navigation } from 'src/feature/navigation';
import { remove, update } from 'src/feature/navigation/navigationSlice';

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

  const onRemoveBtnClickCallback = useCallback(() => {
    dispatch(remove({ id }));
  }, []);

  return (
    <div className={styles.root}>
      <div className={cn(styles.input, styles.name)}>
        <Input
          value={name}
          placeholder={'Name...'}
          onChange={onNameChangeCallback}
        />
      </div>
      <div className={cn(styles.input, styles.host)}>
        <Input
          value={host}
          placeholder={'Host...'}
          onChange={onHostChangeCallback}
        />
      </div>
      <div className={styles.actions}>
        <Button
          disabled={isValidHost(host)}
          className={styles.action}
          onClick={() => console.log('apply')}
          label="✅"
        />
        <Button
          className={styles.action}
          onClick={onRemoveBtnClickCallback}
          label="❎"
        />
      </div>
    </div>
  );
};

export default NavItem;
