import styled from 'styled-components';

const Input = styled.span`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  color: ${({ color }) => color};
`;
Input.defaultProps = {
  color: '#000000',
};

export default Input;
