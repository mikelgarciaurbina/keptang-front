import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { ColorPicker, DraggableIcon, OptionsIcon } from '../../molecules';
import { P, Resizable, Row } from '../../atoms';
import { Container, Header, Options } from './atoms';

const exampleConcepts = [
  {
    id: 1,
    title: 'Item 1',
    subtitle: 'Item 1 description',
    rate: 10,
    qty: 4,
    tax: 0,
  },
  {
    id: 2,
    title: 'Item 2',
    subtitle: 'Item 2 description',
    rate: 15,
    qty: 2,
    tax: 21,
  },
];

class Concepts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#9C27B0',
      dimension: {
        width: 450,
      },
      dragging: false,
      hover: false,
      options: false,
      position: {
        x: 0,
        y: 200,
      },
    };

    this.onChangeColor = this.onChangeColor.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOptions = this.onOptions.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  onChangeColor({ hex }) {
    this.setState({ color: hex });
  }

  onDrag() {
    const { dragging } = this.state;
    if (!dragging) this.setState({ dragging: true });
  }

  onDragStop(e, { x, y }) {
    this.setState({ dragging: false, position: { x, y } });
  }

  onHover() {
    this.setState(({ hover }) => ({ hover: !hover }));
  }

  onOptions() {
    this.setState(({ options }) => ({ options: !options }));
  }

  onResize = (event, { size }) => {
    const { position } = this.state;
    let { width } = size;

    if (position.x + size.width > 780) width = 780 - position.x;

    this.setState({ dimension: { width } });
  };

  render() {
    const {
      color, dimension, dragging, hover, options, position,
    } = this.state;
    const { width } = dimension;
    const showIcons = dragging || hover;

    return (
      <Draggable
        bounds="parent"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <Resizable
          axis="x"
          hover={hover}
          minConstraints={[450]}
          width={width}
          onResize={this.onResize}
        >
          <Container
            dimension={dimension}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            <Header color={color}>
              <P flex={3}>Description</P>
              <P flex={1}>Rate</P>
              <P flex={1}>Qty</P>
              <P flex={1}>Line Total</P>
            </Header>
            {exampleConcepts.map(({ qty, rate, title }) => (
              <Row>
                <P flex={3}>{title}</P>
                <P flex={1}>{rate}</P>
                <P flex={1}>{qty}</P>
                <P flex={1}>{rate * qty}</P>
              </Row>
            ))}
            {showIcons && <DraggableIcon />}
            {showIcons && (
              <OptionsIcon
                onClick={this.onOptions}
                onKeyPress={this.onOptions}
                role="button"
                tabIndex={0}
              />
            )}
            {options && (
              <Options dimension={dimension}>
                <P>Color:</P>
                <ColorPicker color={color} onChange={this.onChangeColor} />
              </Options>
            )}
          </Container>
        </Resizable>
      </Draggable>
    );
  }
}

export default Concepts;
