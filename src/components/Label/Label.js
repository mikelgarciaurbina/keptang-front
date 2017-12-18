import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { GithubPicker } from 'react-color';

import { DraggableIcon, OptionsIcon, Select } from '../../molecules';
import { Options } from './molecules';
import { P } from '../../atoms';
import { Container, Input, Label } from './atoms';

class LabelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000000',
      dragging: false,
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
    this.onLabelPositionChange = this.onLabelPositionChange.bind(this);
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
      color,
      dragging,
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
        <Container onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
          {showIcons && <DraggableIcon />}
          {showIcons && (
            <OptionsIcon
              onClick={this.onOptions}
              onKeyPress={this.onOptions}
              role="button"
              tabIndex={0}
            />
          )}
          {(labelPosition === 'top' || labelPosition === 'left') && (
            <Label
              color={color}
              contentEditable
              htmlFor="label"
              placeholder="Insert label"
              labelPosition={labelPosition}
            />
          )}
          <Input
            id="label"
            contentEditable={false}
            placeholder="Label"
          />
          {(labelPosition === 'bottom' || labelPosition === 'right') && (
            <Label
              color={color}
              contentEditable
              htmlFor="label"
              placeholder="Insert label"
              labelPosition={labelPosition}
            />
          )}
          {options && (
            <Options>
              <P>Color:</P>
              <GithubPicker
                color={color}
                onChangeComplete={this.onChangeColor}
                triangle="hide"
              />
              <P>Label position:</P>
              <Select value={labelPosition} onChange={this.onLabelPositionChange}>
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="none">None</option>
              </Select>
            </Options>
          )}
        </Container>
      </Draggable>
    );
  }
}

export default LabelContainer;