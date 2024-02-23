'use client';

import type { FC } from 'react';
import React from 'react';

import type { ButtonProps } from './Button';
import Button from './Button';

export interface Props extends ButtonProps {}

const ButtonThird: FC<Props> = (props) => {
  return <Button {...props} pattern="third" />;
};

export default ButtonThird;
