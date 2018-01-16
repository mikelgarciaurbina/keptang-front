import React, { Component } from 'react';
import Draggable from 'react-draggable';

import { ColorPicker, DraggableIcon, OptionsIcon } from '../../molecules';
import { P, Resizable, Row } from '../../atoms';
import {
  Column,
  Container,
  Header,
  Options,
  Paragraph,
  TableRow,
  Subparagraph,
} from './atoms';
import { ProviderCurrency } from '../../providers';

const exampleConcepts = [
  {
    id: 1,
    title: 'Item 1',
    subtitle: 'Item 1 description',
    rate: 10,
    qty: 4,
    tax: 0,
  },
  {
    id: 2,
    title: 'Item 2',
    subtitle: 'Item 2 description',
    rate: 15,
    qty: 2,
    tax: 21,
  },
];

class Concepts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerColor: '#9C27B0',
      dimension: {
        width: 450,
      },
      dragging: false,
      hover: false,
      options: false,
      position: {
        x: 0,
        y: 200,
      },
    };

    this.onChangeColor = this.onChangeColor.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onOptions = this.onOptions.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  onChangeColor({ hex }) {
    this.setState({ headerColor: hex });
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

  onResize = (event, { size }) => {
    const { position } = this.state;
    let { width } = size;

    if (position.x + size.width > 780) width = 780 - position.x;

    this.setState({ dimension: { width } });
  };

  render() {
    const {
      headerColor,
      dimension,
      dragging,
      hover,
      options,
      position,
    } = this.state;
    const { width } = dimension;
    const showIcons = dragging || hover;

    const subtotal = exampleConcepts.reduce(
      (current = 0, { rate, qty }) => current + (rate * qty),
      0,
    );
    const totalTax = exampleConcepts.reduce(
      (current = 0, { rate, qty, tax }) => current + ((rate * qty * tax) / 100),
      0,
    );
    const total = subtotal + totalTax;

    return (
      <Draggable
        bounds="parent"
        handle="strong"
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        position={position}
      >
        <Resizable
          axis="x"
          hover={hover}
          height={0}
          minConstraints={[450]}
          width={width}
          onResize={this.onResize}
        >
          <Container
            dimension={dimension}
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHover}
          >
            <Header color={headerColor}>
              <Paragraph color={headerColor} flex={3}>
                Description
              </Paragraph>
              <Paragraph color={headerColor} right>
                Rate
              </Paragraph>
              <Paragraph color={headerColor} right>
                Qty
              </Paragraph>
              <Paragraph color={headerColor} right>
                Line Total
              </Paragraph>
            </Header>
            {exampleConcepts.map(({
              id, qty, rate, subtitle, tax, title,
            }) => (
              <TableRow key={id}>
                <Column flex={3}>
                  <Paragraph>{title}</Paragraph>
                  <Subparagraph>{subtitle}</Subparagraph>
                </Column>
                <Column>
                  <Paragraph right>{ProviderCurrency(rate)}</Paragraph>
                  {!!tax && <Subparagraph right>{`+${tax}%`}</Subparagraph>}
                </Column>
                <Paragraph right>{qty}</Paragraph>
                <Paragraph right>{ProviderCurrency(rate * qty)}</Paragraph>
              </TableRow>
            ))}
            <Row>
              <Column flex={3} />
              <Column>
                <Paragraph right>Subtotal</Paragraph>
              </Column>
              <Column>
                <Paragraph right>{ProviderCurrency(subtotal)}</Paragraph>
              </Column>
            </Row>
            <Row>
              <Column flex={3} />
              <Column border>
                <Paragraph right>Tax</Paragraph>
              </Column>
              <Column border>
                <Paragraph right>{ProviderCurrency(totalTax)}</Paragraph>
              </Column>
            </Row>
            <Row>
              <Column flex={3} />
              <Column>
                <Paragraph right color={headerColor}>
                  Amount Due
                </Paragraph>
              </Column>
              <Column>
                <Paragraph right>{ProviderCurrency(total)}</Paragraph>
              </Column>
            </Row>
            {showIcons && <DraggableIcon />}
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
                <P>Header Color:</P>
                <ColorPicker
                  color={headerColor}
                  onChange={this.onChangeColor}
                />
              </Options>
            )}
          </Container>
        </Resizable>
      </Draggable>
    );
  }
}

export default Concepts;
