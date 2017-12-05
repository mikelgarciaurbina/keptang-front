import React from 'react';

import { LeftIcon } from '../';
import { Strong } from './components';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';

const DraggableIcon = () => (
  <Strong>
    <LeftIcon image={dragIcon} />
  </Strong>
);

export default DraggableIcon;
