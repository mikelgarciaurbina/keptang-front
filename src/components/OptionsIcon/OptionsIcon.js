import React from 'react';

import { RightIcon } from '../';

import optionsIcon from '../../assets/icons/ic_settings_black_24px.svg';

const OptionsIcon = ({ ...props }) => (
  <RightIcon image={optionsIcon} {...props} />
);

export default OptionsIcon;
