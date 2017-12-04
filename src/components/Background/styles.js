import styled from 'styled-components';
import { Resizable as Resiz } from 'react-resizable';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';

const Icon = styled.div`
  background-image: ${props => (`url('${props.image}')`)};
  background-size: 15px;
  height: 15px;
  width: 15px;
`;
Icon.defaultProps = {
  image: dragIcon,
};

export const LeftIcon = Icon.extend`
  left: 8px;
  position: absolute;
  top: 8px;
`;

export const RightIcon = Icon.extend`
  cursor: pointer;
  outline: none;
  right: 8px;
  position: absolute;
  top: 8px;
`;

export const Strong = styled.strong`
  cursor: move;
`;

export const Options = styled.div`
  right: 10px;
  position: relative;
  top: ${props => (`${props.dimension.height + 16}px`)};
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export const Container = styled.div`
  cursor: auto;
  height: ${props => (`${props.dimension.height}px`)};
  margin: 10px;
  padding: 10px;
  width: ${props => (`${props.dimension.width}px`)};
  background: ${props => (props.background)};
`;
Container.defaultProps = {
  background: '#1273de',
  dimension: {
    height: 100,
    width: 100,
  },
};

export const Resizable = styled(Resiz)`
  position: relative;

  & > span {
    display: ${props => (!props.hover ? 'none' : undefined)};
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }
`;
Resizable.defaultProps = {
  hover: false,
};

export default Icon;
