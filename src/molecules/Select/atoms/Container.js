import styled from 'styled-components';

import { THEME } from '../../../constants';

const { BLACK, TRANSPARENT, UNIT } = THEME;
const Container = styled.div`
  position: relative;

  &:after {
    border-left: ${UNIT * 0.4}px solid ${TRANSPARENT};
    border-right: ${UNIT * 0.4}px solid ${TRANSPARENT};
    border-top: ${UNIT * 0.6}px solid ${BLACK};
    content: '';
    height: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    right: ${UNIT * 0.8}px;
    top: ${UNIT * 1.2}px;
    width: 0;
  }
`;

export default Container;
