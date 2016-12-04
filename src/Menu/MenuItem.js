import React from 'react';
import classnames from 'classnames';

const MenuItem = ({
  isHeaderFirst,
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
          'is-header-first': isHeaderFirst,
          'is-header': isHeader,
          'is-divider': isDivider,
          hoverable
        },
        className
      )
    }
  >{children}</li>
);

export default MenuItem;
