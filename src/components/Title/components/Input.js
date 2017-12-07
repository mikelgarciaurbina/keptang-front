import styled from 'styled-components';

const Input = styled.span`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  color: ${props => props.color};
  font-size: 24px;
`;

export default Input;
