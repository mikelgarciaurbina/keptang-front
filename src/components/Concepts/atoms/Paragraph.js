import { P } from '../../../atoms';

const Paragraph = P.extend`
  color: ${({ color }) => color};
  flex: ${({ flex }) => flex};

  ${({ right }) => right && 'text-align: end;'};
`;
Paragraph.defaultProps = {
  color: '#9C27B0',
  flex: 1,
};

export default Paragraph;
