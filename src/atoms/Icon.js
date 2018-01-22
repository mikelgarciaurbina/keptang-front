import styled from 'styled-components';

import { THEME } from '../constants';
import dragIcon from '../assets/icons/ic_open_with_black_24px.svg';

const { ICON_SIZE } = THEME;
const Icon = styled.div`
  background-image: ${({ image }) => `url('${image}')`};
  background-size: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  width: ${ICON_SIZE}px;
`;
Icon.defaultProps = {
  image: dragIcon,
};

export default Icon;
