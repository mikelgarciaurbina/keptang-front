import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;

  flex: ${({ flex }) => flex};
`;
Column.defaultProps = {
  flex: 1,
};

export default Column;
