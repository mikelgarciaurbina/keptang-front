import { OptionsContainer } from '../../../atoms';

const Options = OptionsContainer.extend`
  bottom: -105px;
  left: 10px;
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Options;
