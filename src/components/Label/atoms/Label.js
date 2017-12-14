import styled from 'styled-components';

const Label = styled.label`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  display: ${({ labelPosition }) => (
    labelPosition === 'top' || labelPosition === 'bottom'
      ? 'block'
      : 'inline-block')};
  color: ${props => props.color};
  font-weight: bold;

  ${({ labelPosition }) => (
    labelPosition === 'top' && 'margin-bottom: 5px;'
  )}
  ${({ labelPosition }) => (
    labelPosition === 'left' && 'margin-right: 10px;'
  )}
  ${({ labelPosition }) => (
    labelPosition === 'bottom' && 'margin-top: 5px;'
  )}
  ${({ labelPosition }) => (
    labelPosition === 'right' && 'margin-left: 10px;'
  )}
`;

export default Label;
