import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';
import './Background.css';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dimension: {
        height: 150,
        width: 150,
      },
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
    this.onResize = this.onResize.bind(this);
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

  onResize = (event, { size }) => {
    const { position } = this.state;
    if (position.x + size.width > 556) return;
    if (position.y + size.height > 803) return;
    this.setState({ dimension: { height: size.height, width: size.width } });
  };

  render() {
    const {
      dimension, dragging, hover, position,
    } = this.state;

    return (
      <Draggable
        bounds="parent"
        cancel=".react-resizable-handle"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <Resizable className="Background-resizable" height={dimension.height} width={dimension.width} onResize={this.onResize}>
          <div
            className="Background-box Background-no-cursor"
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
            style={{
              background: '#2196F3',
              height: `${dimension.height}px`,
              width: `${dimension.width}px`,
            }}
          >
            { (dragging || hover) && (
              <strong className="Background-cursor">
                <div
                  className="Background-icon"
                  style={{ backgroundImage: `url(${dragIcon})` }}
                />
              </strong>
            )}
          </div>
        </Resizable>
      </Draggable>
    );
  }
}

export default Background;
