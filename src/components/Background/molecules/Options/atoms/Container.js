import { OptionsContainer } from '../../../../../atoms';

const Container = OptionsContainer.extend`
  top: ${props => `${props.dimension.height + 32}px`};
`;
Container.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Container;
