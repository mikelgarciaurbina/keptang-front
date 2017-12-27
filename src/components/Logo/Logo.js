import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { DraggableIcon, OptionsIcon, Select } from '../../molecules';
import { P } from '../../atoms';
import { Container, Options } from './atoms';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: '150',
      dragging: false,
      hover: false,
      options: false,
      position: {
        x: 0,
        y: 0,
      },
    };

    this.onDrag = this.onDrag.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOptions = this.onOptions.bind(this);
    this.onSizeChange = this.onSizeChange.bind(this);
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

  onSizeChange(event) {
    this.setState({ dimension: event.target.value });
  }

  render() {
    const {
      dimension,
      dragging,
      hover,
      options,
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
          dimension={dimension}
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
          {options && (
            <Options dimension={dimension}>
              <P>Size:</P>
              <Select
                value={dimension}
                onChange={this.onSizeChange}
              >
                <option value="100">Small</option>
                <option value="150">Medium</option>
                <option value="200">Large</option>
              </Select>
            </Options>
          )}
        </Container>
      </Draggable>
    );
  }
}

export default Logo;
