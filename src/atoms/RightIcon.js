import { THEME } from '../constants';
import { Icon } from './';

const { ICON_OFFSET } = THEME;
const RightIcon = Icon.extend`
  cursor: pointer;
  outline: none;
  position: absolute;
  right: ${ICON_OFFSET}px;
  top: ${ICON_OFFSET}px;
`;

export default RightIcon;
