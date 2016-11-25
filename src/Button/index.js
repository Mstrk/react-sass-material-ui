import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';
import Ripple from '../Ripple';

export default class Button extends Component {
  state = {
    cursorPos: {}
  }

  handleClick= (e) => {
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };

    this.setState({ cursorPos });

    if (typeof this.props.onClick === 'function') this.props.onClick(e);
  }

  render() {
    const {
      text = 'button',
      size = 'm',
      type = 'raised',
      icon = 'plus',
      color = 'primary',
      disabled,
      style } = this.props;

    return (
      <button
        style={style}
        disabled={disabled}
        onMouseDown={this.handleClick}
        className={`btn btn-${size} btn-${type} btn-${color}`}
      >
        {type === 'flat' || type === 'raised' ? text : null}
        {type === 'icon' || type === 'fab' ? <SvgIcon icon={icon} /> : null}
        <Ripple cursorPos={this.state.cursorPos} />
      </button>
    );
  }
}
