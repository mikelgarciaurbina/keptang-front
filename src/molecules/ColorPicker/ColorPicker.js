import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => (
  <GithubPicker
    color={color}
    colors={[
      '#000000',
      '#9E9E9E',
      '#795548',
      '#607D8B',
      '#3F51B5',
      '#2196F3',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#9C27B0',
      '#E91E63',
      '#F44336',
      '#FF9800',
      '#FFC107',
      '#FFEB3B',
      '#FFFFFF',
    ]}
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
