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
      hoverable,
      childClassNames = [],
      children
    } = this.props;

    return (
      <Paper
        type={type}
        zDepth={zDepth}
      >
        <ul className='menu'>
          {this.cloneChildren(children, hoverable, childClassNames)}
        </ul>
      </Paper>
    );
  }
}

export default Menu;
