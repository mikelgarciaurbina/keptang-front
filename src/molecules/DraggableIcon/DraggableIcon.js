import React from 'react';

import { LeftIcon, Strong } from '../../atoms';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';

const DraggableIcon = () => (
  <Strong>
    <LeftIcon image={dragIcon} />
  </Strong>
);

export default DraggableIcon;
