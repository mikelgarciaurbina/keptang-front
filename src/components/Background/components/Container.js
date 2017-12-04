import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
