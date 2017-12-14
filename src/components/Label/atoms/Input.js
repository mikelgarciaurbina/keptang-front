import styled from 'styled-components';

const Input = styled.span`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }
`;

export default Input;
