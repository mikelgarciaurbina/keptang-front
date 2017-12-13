import { OptionsContainer } from '../../../../../atoms';

const Container = OptionsContainer.extend`
  top: ${props => `${props.dimension.height + 26}px`};
`;
Container.defaultProps = {
  dimension: {
    height: 100,
  },
};

export default Container;
