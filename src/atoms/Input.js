import styled from 'styled-components';

import { THEME } from '../constants';

const Input = styled.span`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  color: ${({ color }) => color};
`;
Input.defaultProps = {
  color: THEME.BLACK,
};

export default Input;
