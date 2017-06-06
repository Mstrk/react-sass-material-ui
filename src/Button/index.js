import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SvgIcon from '../SvgIcon'
import Ripple from '../Ripple'

class Button extends Component {
  state = {
    cursorPos: {}
  }

  handleClick = (event) => {
    const cursorPos = {
      top: event.clientY,
      left: event.clientX,
      time: Date.now()
    }

    this.setState({ cursorPos })

    if (typeof this.props.onClick === 'function') this.props.onClick(event)
  }

  render () {
    const {
      text = 'button',
      size = 'm',
      type = 'raised',
      icon = 'plus',
      color = 'primary',
      disabled,
      style,
      className } = this.props

    return (
      <button
        style={style}
        disabled={disabled}
        onMouseDown={this.handleClick}
        className={
          classnames(
            'btn',
            [`btn-${size} btn-${type} btn-${color}`],
            className
          )
        }
      >
        {type === 'flat' || type === 'raised' ? text : null}
        {type === 'icon' || type === 'fab' ? <SvgIcon icon={icon} /> : null}
        <Ripple cursorPos={this.state.cursorPos} />
      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string
}

export default Button
