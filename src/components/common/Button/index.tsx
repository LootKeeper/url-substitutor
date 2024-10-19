import React, { SyntheticEvent } from 'react';
import cn from 'classnames';

import { Button } from '@chakra-ui/react';

export type Props = {
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
  disabled?: boolean;
  colorScheme?: 'blue' | 'teal' | 'red';
  variant?: 'ghost' | 'outline';
  size?: 'xs' | 'sm';
};

const View = ({
  onClick,
  label,
  className,
  disabled,
  size = 'xs',
  colorScheme,
  variant = 'ghost'
}: Props) => (
  <Button
    variant={variant}
    colorScheme={colorScheme}
    disabled={disabled}
    className={cn(className)}
    onClick={onClick}
    size={size}
  >
    {label}
  </Button>
);

export default View;
