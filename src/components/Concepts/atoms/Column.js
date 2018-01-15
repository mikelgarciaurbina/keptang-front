import styled from 'styled-components';
import Color from 'color';

const Column = styled.div`
  display: flex;
  flex-direction: column;

  flex: ${({ flex }) => flex};

  ${({ border }) => border && `
    border-bottom-style: double;
    border-bottom-color: ${Color('#000000').alpha(0.2).string()};
    padding-bottom: 7px;
  `}
`;
Column.defaultProps = {
  flex: 1,
};

export default Column;
