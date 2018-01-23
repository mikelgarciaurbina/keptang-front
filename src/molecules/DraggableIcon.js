import React from 'react';
import PropTypes from 'prop-types';

import { THEME } from '../constants';
import { LeftIcon, Strong } from '../atoms';
import { ProviderColor } from '../providers';

import dragBlackIcon from '../assets/icons/ic_open_with_black_24px.svg';
import dragWhiteIcon from '../assets/icons/ic_open_with_white_24px.svg';

const DraggableIcon = ({ color }) => (
  <Strong>
    <LeftIcon image={ProviderColor.light(color) ? dragBlackIcon : dragWhiteIcon} />
  </Strong>
);
DraggableIcon.propTypes = {
  color: PropTypes.string,
};
DraggableIcon.defaultProps = {
  color: THEME.WHITE,
};

export default DraggableIcon;
