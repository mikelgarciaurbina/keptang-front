import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './Background.css';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        x: 0,
        y: 0,
      },
    };

    this.onDragStop = this.onDragStop.bind(this);
  }

  onDragStop(e, position) {
    const { x, y } = position;
    this.setState({ position: { x, y } });
  }

  render() {
    const { position } = this.state;

    return (
      <Draggable
        bounds="parent"
        position={position}
        handle="strong"
        onStop={this.onDragStop}
      >
        <div className="Background-box Background-no-cursor">
          <strong className="Background-cursor">
            <div>Drag here</div>
          </strong>
        </div>
      </Draggable>
    );
  }
}

export default Background;
