import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { DraggableIcon, OptionsIcon } from '../';
import { Container, Input } from './components';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      hover: false,
      position: {
        x: 0,
        y: 0,
      },
    };

    this.onDrag = this.onDrag.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onDrag() {
    const { dragging } = this.state;
    if (!dragging) this.setState({ dragging: true });
  }

  onDragStop(e, position) {
    const { x, y } = position;
    this.setState({ dragging: false, position: { x, y } });
  }

  onHover() {
    this.setState(({ hover }) => ({ hover: !hover }));
  }

  render() {
    const {
      dragging,
      hover,
      position,
    } = this.state;
    const showIcons = dragging || hover;

    return (
      <Draggable
        bounds="parent"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <Container
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHover}
        >
          {showIcons && (
            <DraggableIcon />
          )}
          {showIcons && (
            <OptionsIcon
              onClick={this.onOptions}
              onKeyPress={this.onOptions}
              role="button"
              tabIndex={0}
            />
          )}
          <Input contentEditable={false} placeholder="Title" />
        </Container>
      </Draggable>
    );
  }
}

export default Title;
