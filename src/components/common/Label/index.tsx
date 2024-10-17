import React from 'react';

export type Props = {
  text: string;
};

const Label = ({ text }: Props) => <span>{text}</span>;

export default Label;
