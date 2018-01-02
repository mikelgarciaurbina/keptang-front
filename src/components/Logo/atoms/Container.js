import styled from 'styled-components';

import image100 from '../../../assets/images/100x100.png';
import image150 from '../../../assets/images/150x150.png';
import image200 from '../../../assets/images/200x200.png';

const Container = styled.div`
  cursor: auto;
  height: ${props => `${props.dimension}px`};
  margin: 10px;
  position: absolute;
  width: ${props => `${props.dimension}px`};

  ${({ dimension }) => (
    dimension === '100' && `background: url(${image100}) no-repeat center;`
  )}
  ${({ dimension }) => (
    dimension === '150' && `background: url(${image150}) no-repeat center;`
  )}
  ${({ dimension }) => (
    dimension === '200' && `background: url(${image200}) no-repeat center;`
  )}
`;
Container.defaultProps = {
  dimension: 200,
};

export default Container;
