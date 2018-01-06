import styled from 'styled-components';

const Container = styled.div`
  cursor: auto;
  margin: 10px;
  padding: 10px;
  padding-top: 23px;
  position: absolute;
  width: ${({ dimension: { width } }) => `${width}px`};
`;
Container.defaultProps = {
  dimension: {
    width: 450,
  },
};

export default Container;
