import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { ColorPicker, DraggableIcon, OptionsIcon } from '../../molecules';
import { P, Resizable } from '../../atoms';
import { Container, Options } from './atoms';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#9C27B0',
      dimension: {
        height: 150,
        width: 150,
      },
      dragging: false,
      hover: false,
      options: false,
      position: {
        x: 0,
        y: 0,
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
    this.setState({ background: hex });
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
    let { height, width } = size;

    if (position.y + size.height > 1119) height = 1119 - position.y;
    if (position.x + size.width > 780) width = 780 - position.x;

    this.setState({ dimension: { height, width } });
  };

  render() {
    const {
      background,
      dimension,
      dragging,
      hover,
      options,
      position,
    } = this.state;
    const { height, width } = dimension;
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
          height={height}
          hover={hover}
          onResize={this.onResize}
          width={width}
        >
          <Container
            background={background}
            dimension={dimension}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            {showIcons && (
              <DraggableIcon color={background} />
            )}
            {showIcons && (
              <OptionsIcon
                color={background}
                onClick={this.onOptions}
                onKeyPress={this.onOptions}
                role="button"
                tabIndex={0}
              />
            )}
            {options && (
              <Options dimension={dimension}>
                <P>Color:</P>
                <ColorPicker
                  color={background}
                  onChange={this.onChangeColor}
                />
              </Options>
            )}
          </Container>
        </Resizable>
      </Draggable>
    );
  }
}

export default Background;
