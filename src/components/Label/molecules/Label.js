import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Label } from '../atoms';

class LabelMolecule extends Component {
  constructor() {
    super();

    this.emitChange = this.emitChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { props, htmlEl } = this;

    if (!htmlEl) {
      return true;
    }
    if (nextProps.html !== htmlEl.innerHTML && nextProps.html !== props.html) {
      return true;
    }

    const optional = ['style', 'className', 'disable', 'color', 'labelPosition'];

    return optional.some(name => props[name] !== nextProps[name]);
  }

  componentDidUpdate() {
    if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
      this.htmlEl.innerHTML = this.props.html;
    }
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    const html = this.htmlEl.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({ ...evt, target: { value: html } });
    }
    this.lastHtml = html;
  }

  render() {
    const { html, ...props } = this.props;

    return (
      <Label
        {...props}
        innerRef={(e) => {
          this.htmlEl = e;
        }}
        onInput={this.emitChange}
        onBlur={this.props.onBlur || this.emitChange}
        contentEditable={!this.props.disabled}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
}
LabelMolecule.propTypes = {
  disabled: PropTypes.bool,
  html: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};
LabelMolecule.defaultProps = {
  disabled: false,
  html: '',
  onBlur() {},
  onChange() {},
};

export default LabelMolecule;
