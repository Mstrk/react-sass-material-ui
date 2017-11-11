import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SvgIcon from '../SvgIcon'
import Ripple from '../Ripple'

class MenuItem extends Component {
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
      isHeader,
      isDivider,
      hoverable,
      rippable,
      primaryText,
      secundaryText,
      indentLeft,
      indentRight,
      leftIcon,
      rightIcon,
      style,
      className
    } = this.props

    return (
      <li
        onClick={this.handleClick}
        style={style}
        className={
          classnames(
            'menu-item',
            {
              'is-header': isHeader,
              'is-divider': isDivider,
              hoverable: hoverable && !isDivider && !isHeader,
              'indent-left': (indentLeft || !!leftIcon) && !isDivider && !isHeader,
              'indent-right': (indentRight || !!rightIcon) && !isDivider && !isHeader
            },
            className
          )
        }
      >
        {leftIcon && <SvgIcon className='icon-left' size={24} icon={leftIcon} />}
        <span
          className={
            classnames(
              'primary-text',
              { 'with-secundary-text': !!secundaryText }
            )
          }
        >{primaryText}</span>
        {secundaryText && <span className='secundary-text'>{secundaryText}</span>}
        {rightIcon && <SvgIcon className='icon-right' size={24} icon={rightIcon} />}
        {rippable && <Ripple cursorPos={this.state.cursorPos} />}
      </li>
    )
  }
}

MenuItem.propTypes = {
  isHeader: PropTypes.bool,
  isDivider: PropTypes.bool,
  hoverable: PropTypes.bool,
  rippable: PropTypes.bool,
  primaryText: PropTypes.string,
  secundaryText: PropTypes.string,
  indentLeft: PropTypes.bool,
  indentRight: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default MenuItem
