import { THEME } from '../constants';
import { Icon } from './';

const { ICON_OFFSET } = THEME;
const LeftIcon = Icon.extend`
  left: ${ICON_OFFSET}px;
  position: absolute;
  top: ${ICON_OFFSET}px;
`;

export default LeftIcon;
