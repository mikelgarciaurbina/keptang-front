import styled from 'styled-components';

const Select = styled.select`
  background-color: transparent;
  padding: 4px 25px 4px 4px;
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid #000;
  appearance: none;

  &:focus {
    outline: none
  }
`;

export default Select;
