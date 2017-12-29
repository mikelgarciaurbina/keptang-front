import styled from 'styled-components';

const Container = styled.div`
  cursor: auto;
  height: ${({ dimension: { height } }) => `${height}px`};
  margin: 10px;
  padding: 10px;
  width: ${({ dimension: { width } }) => `${width}px`};
  background: ${({ background }) => background};
  display: inline-block;
`;
Container.defaultProps = {
  background: '#1273de',
  dimension: {
    height: 100,
    width: 100,
  },
};

export default Container;
