import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { isValidHost } from '@root/utils/url';

import { Box } from '@chakra-ui/react';

import { Navigation } from 'src/feature/navigation';
import { remove, update } from 'src/feature/navigation/navigationSlice';
import { applyUrl } from '@root/feature/tab/tabSlice';

import Input from '@root/components/common/Input';
import Button from '@root/components/common/Button';

import * as styles from './styles.module.css';

export type Props = {
  item: Navigation;
  current: boolean;
};

const NavItem = ({ item, current }: Props) => {
  const dispatch = useDispatch();
  const { name, host, id } = item;

  const onNameChangeCallback = useCallback(
    (value: string) => {
      dispatch(update({ id, name: value }));
    },
    [id]
  );

  const onHostChangeCallback = useCallback(
    (value: string) => {
      dispatch(update({ id, host: value }));
    },
    [id]
  );

  const onRemoveBtnClickCallback = useCallback(() => {
    dispatch(remove({ id }));
  }, [id]);

  const onApplyBtnClickCallback = useCallback(() => {
    dispatch(applyUrl({ url: host }));
  }, [host]);

  const validHost = isValidHost(host);
  const isEnableToApply = !current && validHost;
  return (
    <Box className={styles.wrapper} bg={current ? 'green.50' : 'gray.50'}>
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
          <Button
            disabled={!isEnableToApply}
            onClick={onApplyBtnClickCallback}
            label="Apply"
            colorScheme="blue"
          />
          <Button
            onClick={onRemoveBtnClickCallback}
            label="Delete"
            colorScheme="red"
            variant="outline"
          />
        </div>
      </div>
    </Box>
  );
};

export default NavItem;
