import React, { Component } from 'react';
import Draggable from 'react-draggable';

import {
  ColorPicker,
  DraggableIcon,
  OptionsIcon,
  Select,
} from '../../molecules';
import { Label } from './molecules';
import { P } from '../../atoms';
import { Container, Input, Options } from './atoms';

class LabelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelColor: '#9C27B0',
      dragging: false,
      label: '',
      labelPosition: 'top',
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
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onLabelPositionChange = this.onLabelPositionChange.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOptions = this.onOptions.bind(this);
  }

  onChangeColor({ hex }) {
    this.setState({ labelColor: hex });
  }

  onDrag() {
    const { dragging } = this.state;
    if (!dragging) this.setState({ dragging: true });
  }

  onDragStop(e, position) {
    const { x, y } = position;
    this.setState({ dragging: false, position: { x, y } });
  }

  onLabelChange(event) {
    this.setState({ label: event.target.value });
  }

  onLabelPositionChange(event) {
    this.setState({ labelPosition: event.target.value });
  }

  onHover() {
    this.setState(({ hover }) => ({ hover: !hover }));
  }

  onOptions() {
    this.setState(({ options }) => ({ options: !options }));
  }

  render() {
    const {
      labelColor,
      dragging,
      label,
      labelPosition,
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
          labelPosition={labelPosition}
        >
          {showIcons && <DraggableIcon />}
          {showIcons && (
            <OptionsIcon
              onClick={this.onOptions}
              onKeyPress={this.onOptions}
              role="button"
              tabIndex={0}
            />
          )}
          <Label
            color={labelColor}
            contentEditable
            htmlFor="label"
            onChange={this.onLabelChange}
            placeholder="Insert label"
            labelPosition={labelPosition}
            html={label}
          />
          {labelPosition !== 'placeholder' && (
            <Input contentEditable={false} id="label" placeholder="Text" />
          )}
          {options && (
            <Options>
              <P>Label Color:</P>
              <ColorPicker color={labelColor} onChange={this.onChangeColor} />
              <P>Label position:</P>
              <Select
                value={labelPosition}
                onChange={this.onLabelPositionChange}
              >
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="placeholder">Placeholder</option>
              </Select>
            </Options>
          )}
        </Container>
      </Draggable>
    );
  }
}

export default LabelContainer;
