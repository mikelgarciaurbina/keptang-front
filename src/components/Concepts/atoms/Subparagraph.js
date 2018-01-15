import Color from 'color';

import { Paragraph } from './';

const Subparagraph = Paragraph.extend`
  color: ${({ color }) => Color(color).alpha(0.5).string()};
  font-size: 12px;
  margin-top: 2px;
`;
Subparagraph.defaultProps = {
  color: '#000000',
};

export default Subparagraph;
