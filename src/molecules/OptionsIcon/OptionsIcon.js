import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';

import { RightIcon } from '../../atoms';

import optionsBlackIcon from '../../assets/icons/ic_settings_black_24px.svg';
import optionsWhiteIcon from '../../assets/icons/ic_settings_white_24px.svg';

const OptionsIcon = ({ color, ...props }) => (
  <RightIcon image={Color(color).light() ? optionsBlackIcon : optionsWhiteIcon} {...props} />
);
OptionsIcon.propTypes = {
  color: PropTypes.string,
};
OptionsIcon.defaultProps = {
  color: '#FFFFFF',
};

export default OptionsIcon;
