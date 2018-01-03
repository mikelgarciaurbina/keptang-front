import styled from 'styled-components';

const Label = styled.label`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  order: ${({ labelPosition }) => (
    labelPosition === 'bottom' || labelPosition === 'right' ? 1 : 0)};
  color: ${props => props.color};

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
Label.defaultProps = {
  color: '#9C27B0',
};

export default Label;
