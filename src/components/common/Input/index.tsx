import React, { useState, useCallback, SyntheticEvent } from 'react';

import Label from '@root/components/common/Label';

import { root } from './styles.module.css';

export type Props = {
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const Input = ({ value, placeholder, onChange }: Props) => {
  const [inFocuse, setInFocuse] = useState<boolean>(false);
  const onClickCallback = useCallback(() => {
    if (!inFocuse) {
      setInFocuse(true);
    }
  }, [inFocuse]);

  const onSubmitCallback = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      if (inFocuse) {
        setInFocuse(false);
        onChange(e.currentTarget.value);
      }
    },
    [inFocuse]
  );

  console.log({ TEST: true, value, placeholder });
  return (
    <div className={root} onClick={onClickCallback}>
      {inFocuse ? (
        <input
          placeholder={placeholder}
          defaultValue={value}
          onBlur={onSubmitCallback}
          onSubmit={onSubmitCallback}
        />
      ) : (
        <Label text={value.length > 0 ? value : placeholder} />
      )}
    </div>
  );
};

export default Input;
