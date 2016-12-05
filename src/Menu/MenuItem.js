import React from 'react';
import classnames from 'classnames';

const MenuItem = ({
  isHeader,
  isDivider,
  hoverable,
  style,
  className,
  children
}) => (
  <li
    style={style}
    className={
      classnames(
        'menuItem',
        {
          'is-header': isHeader,
          'is-divider': isDivider,
          hoverable: hoverable && !isDivider && !isHeader
        },
        className
      )
    }
  >{children}</li>
);

export default MenuItem;
