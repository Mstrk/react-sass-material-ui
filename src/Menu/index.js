import React, { Component } from 'react';
import Paper from '../Paper';

class Menu extends Component {
  cloneChildren(children, hoverable, classNames) {
    const childrenArray = React.Children.toArray(children);
    return childrenArray.map((child, key) => (
      React.cloneElement(child, {
        key,
        hoverable,
        className: classNames[key]
      })
    ));
  }

  render() {
    const {
      zDepth = 8,
      type,
      color,
      hoverable,
      childClassNames = [],
      style,
      children
    } = this.props;

    return (
      <Paper
        style={style}
        type={type}
        zDepth={zDepth}
        color={color}
      >
        <ul className='menu'>
          {this.cloneChildren(children, hoverable, childClassNames)}
        </ul>
      </Paper>
    );
  }
}

export default Menu;
