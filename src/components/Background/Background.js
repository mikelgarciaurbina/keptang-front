import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { GithubPicker } from 'react-color';

import { Container, LeftIcon, Options, Resizable, RightIcon, Strong } from './styles';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';
import optionsIcon from '../../assets/icons/ic_settings_black_24px.svg';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#1273de',
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

  onChangeColor(color) {
    this.setState({ background: color.hex });
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

  onOptions() {
    this.setState(({ options }) => ({ options: !options }));
  }

  onResize = (event, { size }) => {
    const { position } = this.state;
    if (position.x + size.width > 556) return;
    if (position.y + size.height > 803) return;
    this.setState({ dimension: { height: size.height, width: size.width } });
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
          height={dimension.height}
          hover={hover}
          width={dimension.width}
          onResize={this.onResize}
        >
          <Container
            background={background}
            dimension={dimension}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            {showIcons && (
              <Strong>
                <LeftIcon image={dragIcon} />
              </Strong>
            )}
            {showIcons && (
              <RightIcon
                image={optionsIcon}
                onClick={this.onOptions}
                onKeyPress={this.onOptions}
                role="button"
                tabIndex={0}
              />
            )}
            {options && (
              <Options dimension={dimension}>
                <GithubPicker
                  color={background}
                  onChangeComplete={this.onChangeColor}
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
