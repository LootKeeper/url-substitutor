import React from 'react';

export type Props = {
  text: string;
  onClick?: () => void;
};

const Label = ({ text, onClick }: Props) => (
  <span onClick={onClick}>{text}</span>
);

export default Label;
