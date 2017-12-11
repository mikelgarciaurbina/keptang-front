import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  &:after {
      position: absolute;
      top: 12px;
      right: 8px;
      width: 0;
      height: 0;
      padding: 0;
      content: '';
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid #000;
      pointer-events: none;
  }
`;

export default Container;
