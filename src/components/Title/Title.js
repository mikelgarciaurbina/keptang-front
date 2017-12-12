import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { GithubPicker } from 'react-color';

import { DraggableIcon, OptionsIcon, P } from '../';
import { Container, Input, Options, Select } from './components';

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000000',
      dragging: false,
      fontSize: '28',
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
    this.onFontSizeChange = this.onFontSizeChange.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOptions = this.onOptions.bind(this);
  }

  onChangeColor({ hex }) {
    this.setState({ color: hex });
  }

  onDrag() {
    const { dragging } = this.state;
    if (!dragging) this.setState({ dragging: true });
  }

  onDragStop(e, position) {
    const { x, y } = position;
    this.setState({ dragging: false, position: { x, y } });
  }

  onFontSizeChange(event) {
    this.setState({ fontSize: event.target.value });
  }

  onHover() {
    this.setState(({ hover }) => ({ hover: !hover }));
  }

  onOptions() {
    this.setState(({ options }) => ({ options: !options }));
  }

  render() {
    const {
      color,
      dragging,
      fontSize,
      hover,
      position,
      options,
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
          <Input color={color} contentEditable={false} fontSize={fontSize} placeholder="Title" />
          {options && (
            <Options>
              <P>Color:</P>
              <GithubPicker
                color={color}
                onChangeComplete={this.onChangeColor}
                triangle="hide"
              />
              <P>Font size:</P>
              <Select value={fontSize} onChange={this.onFontSizeChange}>
                <option value="20">Small</option>
                <option value="28">Medium</option>
                <option value="36">Large</option>
              </Select>
            </Options>
          )}
        </Container>
      </Draggable>
    );
  }
}

export default Title;
