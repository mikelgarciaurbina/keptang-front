import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';

import { LeftIcon, Strong } from '../../atoms';

import dragIconBlack from '../../assets/icons/ic_open_with_black_24px.svg';
import dragIconWhite from '../../assets/icons/ic_open_with_white_24px.svg';

const DraggableIcon = ({ color }) => (
  <Strong>
    <LeftIcon image={Color(color).light() ? dragIconBlack : dragIconWhite} />
  </Strong>
);
DraggableIcon.propTypes = {
  color: PropTypes.string,
};
DraggableIcon.defaultProps = {
  color: '#FFFFFF',
};

export default DraggableIcon;
