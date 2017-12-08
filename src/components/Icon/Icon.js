import styled from 'styled-components';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';

const Icon = styled.div`
  background-image: ${props => `url('${props.image}')`};
  background-size: 15px;
  height: 15px;
  width: 15px;
`;
Icon.defaultProps = {
  image: dragIcon,
};

export default Icon;
