import styled from 'styled-components';

import { THEME } from '../constants';

const { UNIT } = THEME;
const Paragraph = styled.p`
  margin-bottom: ${UNIT * 0.1}px;
  margin-top: ${UNIT}px;
  width: 100%;

  ${({ flex }) => flex && `flex: ${flex};`};
`;

export default Paragraph;
