import styled from 'styled-components';

const Options = styled.div`
  left: 0px;
  position: absolute;
  top: ${props => (`${props.dimension.height + 26}px`)};
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Options;
