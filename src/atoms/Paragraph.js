import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 1px;
  margin-top: 10px;
  width: 100%;

  ${({ flex }) => flex && `flex: ${flex};`};
`;

export default Paragraph;
