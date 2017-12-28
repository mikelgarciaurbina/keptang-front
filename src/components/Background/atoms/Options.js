import { OptionsContainer } from '../../../atoms';

const Options = OptionsContainer.extend`
  top: ${props => `${props.dimension.height + 32}px`};
`;
Options.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Options;
