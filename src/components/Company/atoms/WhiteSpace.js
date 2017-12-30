import styled from 'styled-components';

const WhiteSpace = styled.span`
  color: ${({ color }) => color};
  white-space: pre-wrap;
`;
WhiteSpace.defaultProps = {
  color: '#000000',
};

export default WhiteSpace;
