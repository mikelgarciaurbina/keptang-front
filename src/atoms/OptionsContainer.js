import styled from 'styled-components';

import { THEME } from '../constants';

const { ICON_SIZE, UNIT } = THEME;
const OptionsContainer = styled.div`
  background: ${THEME.WHITE};
  border: ${UNIT * 0.2}px solid ${THEME.BORDER_COLOR};
  border-radius: ${UNIT * 0.4}px;
  box-shadow: ${THEME.BOX_SHADOW};
  flex-wrap: wrap;
  left: ${UNIT * 0}px;
  padding: ${UNIT * 0.5}px;
  position: absolute;

  &:before {
    background-color: ${THEME.WHITE};
    border-right: ${UNIT * 0.2}px solid ${THEME.BORDER_COLOR};
    border-top: ${UNIT * 0.2}px solid ${THEME.BORDER_COLOR};
    content: '';
    height: ${ICON_SIZE}px;
    left: ${UNIT * 1.5}%;
    pointer-events: none;
    position: absolute;
    top: ${UNIT * -0.1}px;
    transform: translateX(-50%) translateY(-50%) rotate(315deg);
    width: ${ICON_SIZE}px;
    z-index: 0;
  }
`;

export default OptionsContainer;
