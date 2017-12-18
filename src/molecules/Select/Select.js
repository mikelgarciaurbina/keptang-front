import React from 'react';
import PropTypes from 'prop-types';

import { Container, Select } from './atoms';

const SelectContainer = ({ children, ...props }) => (
  <div>
    <Container>
      <Select {...props}>{children}</Select>
    </Container>
  </div>
);
SelectContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
};
SelectContainer.defaultProps = {
  children: {},
};

export default SelectContainer;
