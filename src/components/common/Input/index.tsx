import React, {
  useCallback,
  SyntheticEvent,
  KeyboardEvent,
  useRef
} from 'react';

import { Input } from '@chakra-ui/react';

export type Props = {
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
  size?: 'xs' | 'sm';
};

const View = ({ value, placeholder, onChange, size = 'xs' }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitCallback = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  }, []);

  const onBlurCallback = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  }, []);

  return (
    <Input
      ref={inputRef}
      width="100%"
      size={size}
      placeholder={placeholder}
      variant="flushed"
      defaultValue={value}
      onBlur={onBlurCallback}
      onKeyDown={onSubmitCallback}
    />
  );
};

export default View;
