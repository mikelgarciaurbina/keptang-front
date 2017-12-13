import React from 'react';
import PropTypes from 'prop-types';

import { Container, Triangle } from './atoms';

const Options = ({ children, dimension }) => (
  <div>
    <Triangle />
    <Container dimension={dimension}>
      {children}
    </Container>
  </div>
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
