import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { GithubPicker } from 'react-color';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';
import optionsIcon from '../../assets/icons/ic_settings_black_24px.svg';
import './Background.css';

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
    const colorPickerPosition = dimension.height + 16;

    return (
      <Draggable
        bounds="parent"
        cancel=".react-resizable-handle"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <Resizable
          className="Background-resizable"
          height={dimension.height}
          width={dimension.width}
          onResize={this.onResize}
        >
          <div
            className="Background-box Background-no-cursor"
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
            style={{
              background,
              height: `${dimension.height}px`,
              width: `${dimension.width}px`,
            }}
          >
            {showIcons && (
              <strong className="Background-cursor">
                <div
                  className="Background-icon Background-drag-icon"
                  style={{ backgroundImage: `url(${dragIcon})` }}
                />
              </strong>
            )}
            {showIcons && (
              <div
                className="Background-icon Background-options-icon"
                role="button"
                onClick={this.onOptions}
                onKeyPress={this.onOptions}
                style={{ backgroundImage: `url(${optionsIcon})` }}
                tabIndex={0}
              />
            )}
            {options && (
              <div
                style={{
                  right: '10px',
                  position: 'relative',
                  top: `${colorPickerPosition}px`,
                }}
              >
                <GithubPicker
                  color={background}
                  onChangeComplete={this.onChangeColor}
                />
              </div>
            )}
          </div>
        </Resizable>
      </Draggable>
    );
  }
}

export default Background;
