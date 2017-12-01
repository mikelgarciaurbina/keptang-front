import React, { Component } from 'react';
import Draggable from 'react-draggable';

import dragIcon from '../../assets/icons/ic_open_with_black_24px.svg';
import './Background.css';

class Background extends Component {
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
    const { dragging, hover, position } = this.state;

    return (
      <Draggable
        bounds="parent"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <div
          className="Background-box Background-no-cursor"
          onMouseEnter={this.onHover}
          onMouseLeave={this.onHover}
          style={{ background: '#2196F3' }}
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
      </Draggable>
    );
  }
}

export default Background;
