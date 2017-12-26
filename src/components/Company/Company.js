import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { ColorPicker, DraggableIcon, OptionsIcon } from '../../molecules';
import { P } from '../../atoms';
import { Container, Input, Options, Row, WhiteSpace } from './atoms';

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000000',
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

  onHover() {
    this.setState(({ hover }) => ({ hover: !hover }));
  }

  onOptions() {
    this.setState(({ options }) => ({ options: !options }));
  }

  render() {
    const {
      color, dragging, hover, position, options,
    } = this.state;
    const showIcons = dragging || hover;
    const emptySpace = ' ';

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
          <Row>
            <Input
              color={color}
              contentEditable={false}
              placeholder="First Name"
            />
            <WhiteSpace>{emptySpace}</WhiteSpace>
            <Input
              color={color}
              contentEditable={false}
              placeholder="Last Name"
            />
          </Row>
          <Input color={color} contentEditable={false} placeholder="Company" />
          <Input
            color={color}
            contentEditable={false}
            placeholder="Street Address"
          />
          <Row>
            <Input color={color} contentEditable={false} placeholder="City" />
            <WhiteSpace color={color}>, </WhiteSpace>
            <Input color={color} contentEditable={false} placeholder="State" />
          </Row>
          <Input color={color} contentEditable={false} placeholder="ZIP Code" />
          <Input color={color} contentEditable={false} placeholder="Country" />
          {options && (
            <Options>
              <P>Color:</P>
              <ColorPicker
                color={color}
                onChange={this.onChangeColor}
              />
            </Options>
          )}
        </Container>
      </Draggable>
    );
  }
}

export default Company;
