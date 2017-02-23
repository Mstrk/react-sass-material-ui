import React from 'react';
import classnames from 'classnames';
import { SvgIcon } from '../../src';

const MenuItem = ({
  isHeader,
  isDivider,
  hoverable,
  primaryText,
  secundaryText,
  indentLeft,
  indentRight,
  leftIcon,
  rightIcon,
  onClick,
  style,
  className
}) => (
  <li
    onClick={onClick}
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
  </li>
);

export default MenuItem;
