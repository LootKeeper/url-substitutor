import React, { SyntheticEvent } from 'react';
import cn from 'classnames';

import { btn } from './styles.module.css';

export type Props = {
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
  label: string;
  className?: string;
};

const Button = ({ onClick, label, className }: Props) => (
  <button className={cn(className, btn)} onClick={onClick}>
    {label}
  </button>
);

export default Button;
