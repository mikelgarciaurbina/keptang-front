import { OptionsContainer } from '../../../atoms';

const Options = OptionsContainer.extend`
  left: 10px;
  bottom: -105px;
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Options;
