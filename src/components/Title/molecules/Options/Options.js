import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './atoms';

const Options = ({ children }) => (
  <Container>
    {children}
  </Container>
);
Options.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
};
Options.defaultProps = {
  children: {},
};

export default Options;
