import styled from 'styled-components';

const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 16px;
  padding: 4px 25px 4px 4px;

  &:focus {
    outline: none;
  }
`;

export default Select;
