import styled from 'styled-components';

const Container = styled.div`
  background: ${({ background }) => background};
  cursor: auto;
  display: inline-block;
  height: ${({ dimension: { height } }) => `${height}px`};
  margin: 10px;
  padding: 10px;
  width: ${({ dimension: { width } }) => `${width}px`};
`;
Container.defaultProps = {
  background: '#9C27B0',
  dimension: {
    height: 100,
    width: 100,
  },
};

export default Container;
