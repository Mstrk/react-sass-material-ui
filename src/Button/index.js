import React, { Component } from 'react';
import SvgIcon from '../SvgIcon';
import Ripple from '../Ripple';

class Button extends Component {
  state = {
    cursorPos: {}
  }

  handleClick = (e) => {
    const cursorPos = {
      top: e.clientY,
      left: e.clientX
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
      bypassRipple,
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
        {!bypassRipple && <Ripple cursorPos={this.state.cursorPos} />}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  icon: React.PropTypes.string,
  color: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  style: React.PropTypes.object,
};

export default Button;

