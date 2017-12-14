import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './atoms';

const Options = ({ children, dimension }) => (
  <Container dimension={dimension}>
    {children}
  </Container>
);
Options.propTypes = {
  children: PropTypes.shape({}),
  dimension: PropTypes.shape({}),
};
Options.defaultProps = {
  children: {},
  dimension: {
    height: 100,
  },
};

export default Options;
