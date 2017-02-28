import React, { Component } from 'react';
import classnames from 'classnames';
import SvgIcon from '../SvgIcon';
import Ripple from '../Ripple';

class MenuItem extends Component {
  state = {
    cursorPos: {}
  }

  handleClick = (e) => {
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
    } = this.props;

    return (
      <li
        onClick={this.handleClick}
        style={style}
        className={
          classnames(
            'menuItem',
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
              'primaryText',
              { withSecundaryText: !!secundaryText }
            )
          }
        >{primaryText}</span>
        {secundaryText && <span className='secundaryText'>{secundaryText}</span>}
        {rightIcon && <SvgIcon className='icon-right' size={24} icon={rightIcon} />}
        {rippable && <Ripple cursorPos={this.state.cursorPos} />}
      </li>
    );
  }
}

export default MenuItem;
