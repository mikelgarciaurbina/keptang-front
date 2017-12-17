import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  &:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #000;
    content: '';
    height: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    right: 8px;
    top: 12px;
    width: 0;
  }
`;

export default Container;
