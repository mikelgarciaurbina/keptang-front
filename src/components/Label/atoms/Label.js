import styled from 'styled-components';

const Label = styled.label`
  &[contenteditable]:empty:before {
    content: attr(placeholder);
  }

  color: ${({ labelPosition, color }) => (
    labelPosition !== 'placeholder' ? color : '#000000'
  )};
  order: ${({ labelPosition }) => (
    labelPosition === 'bottom' || labelPosition === 'right' ? 1 : 0
  )};

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
  labelPosition: 'top',
};

export default Label;
