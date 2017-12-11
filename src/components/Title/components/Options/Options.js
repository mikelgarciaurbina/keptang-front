import React from 'react';
import PropTypes from 'prop-types';

import { Container, Triangle } from './components';

const Options = ({ children }) => (
  <div>
    <Triangle />
    <Container>
      {children}
    </Container>
  </div>
);
Options.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
};
Options.defaultProps = {
  children: {},
};

export default Options;
