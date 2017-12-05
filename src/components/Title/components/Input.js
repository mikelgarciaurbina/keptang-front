import styled from 'styled-components';

const Input = styled.span`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
    color:gray;
  }

  font-size: 24px;
`;

export default Input;
