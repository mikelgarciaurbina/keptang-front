import styled from 'styled-components';

import { THEME } from '../../../constants';

const { BLACK, TRANSPARENT, UNIT } = THEME;
const Select = styled.select`
  appearance: none;
  background-color: ${TRANSPARENT};
  border: none;
  border-bottom: ${UNIT * 0.1}px solid ${BLACK};
  color: ${BLACK};
  font-size: 16px;
  padding: ${UNIT * 0.4}px ${UNIT * 2.5}px ${UNIT * 0.4}px ${UNIT * 0.4}px;

  &:focus {
    outline: none;
  }
`;

export default Select;
