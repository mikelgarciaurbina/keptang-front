import styled from 'styled-components';
import { Resizable as Resiz } from 'react-resizable';

import { THEME } from '../constants';

const { ICON_SIZE, UNIT } = THEME;
const Resizable = styled(Resiz)`
  position: absolute;

  & > span {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
    background-origin: content-box;
    background-position: bottom right;
    background-repeat: no-repeat;
    bottom: 0;
    box-sizing: border-box;
    cursor: se-resize;
    height: ${ICON_SIZE}px;
    padding: 0 ${UNIT * 0.3}px ${UNIT * 0.3}px 0;
    position: absolute;
    right: 0;
    visibility: ${({ hover }) => !hover && 'hidden'};
    width: ${ICON_SIZE}px;
  }
`;
Resizable.defaultProps = {
  hover: false,
};

export default Resizable;
