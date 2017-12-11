import styled from 'styled-components';

const Container = styled.div`
  left: 0px;
  position: absolute;
  top: ${props => `${props.dimension.height + 26}px`};
  background: lightgray;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
`;
Container.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Container;
