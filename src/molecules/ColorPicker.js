import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';

import { C } from '../constants';

const ColorPicker = ({ color, onChange }) => (
  <GithubPicker
    color={color}
    colors={C.DEFAULT.COLORS}
    onChangeComplete={onChange}
    triangle="hide"
  />
);
ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
ColorPicker.defaultProps = {
  onChange() {},
};

export default ColorPicker;
