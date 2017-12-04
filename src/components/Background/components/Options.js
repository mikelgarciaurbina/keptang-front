import styled from 'styled-components';

const Options = styled.div`
  right: 10px;
  position: relative;
  top: ${props => (`${props.dimension.height + 16}px`)};
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Options;
