import React, {
  useState,
  useCallback,
  useRef,
  SyntheticEvent,
  KeyboardEvent,
  useEffect
} from 'react';

import Label from '@root/components/common/Label';

import { root, input } from './styles.module.css';

export type Props = {
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const Input = ({ value, placeholder, onChange }: Props) => {
  const [inFocuse, setInFocuse] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickCallback = useCallback(() => {
    if (!inFocuse) {
      setInFocuse(true);
      inputRef.current?.focus();
    }
  }, [inFocuse]);

  const onSubmitCallback = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (inFocuse && e.key === 'Enter') {
        setInFocuse(false);
        onChange(e.currentTarget.value);
      }
    },
    [inFocuse]
  );

  const onBlurCallback = useCallback(
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
          className={input}
          autoFocus
          placeholder={placeholder}
          defaultValue={value}
          onBlur={onBlurCallback}
          onKeyDown={onSubmitCallback}
        />
      ) : (
        <Label text={value.length > 0 ? value : placeholder} />
      )}
    </div>
  );
};

export default Input;
