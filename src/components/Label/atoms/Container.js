import styled from 'styled-components';

const Container = styled.div`
  cursor: auto;
  margin: 10px;
  padding: 23px;
  display: flex;
  position: absolute;
  flex-direction: ${({ labelPosition }) => (
    labelPosition === 'top' || labelPosition === 'bottom'
      ? 'column'
      : 'row')};
`;

export default Container;
