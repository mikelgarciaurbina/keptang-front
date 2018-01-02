import { Row } from '../../../atoms';

const Header = Row.extend`
  border-top: 2px solid ${({ color }) => color};
  margin-bottom: 5px;
  margin-top: 5px;
`;
Header.defaultProps = {
  color: '#9C27B0',
};

export default Header;
