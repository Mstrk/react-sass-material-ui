import React, { Component } from 'react';
import Paper from '../Paper';

class Menu extends Component {
  cloneChildren() {
    const {
      children,
      hoverable,
      indentItemsLeft,
      indentItemsRight,
      childClassNames = []
    } = this.props;
    const childrenArray = React.Children.toArray(children);

    return childrenArray.map((child, key) => (
      React.cloneElement(child, {
        key,
        hoverable,
        indentLeft: !!indentItemsLeft,
        indentRight: !!indentItemsRight,
        className: childClassNames[key]
      })
    ));
  }

  render() {
    const {
      zDepth = 8,
      type,
      color,
      style
    } = this.props;

    return (
      <Paper
        style={style}
        type={type}
        zDepth={zDepth}
        color={color}
      >
        <ul className='menu'>
          {this.cloneChildren()}
        </ul>
      </Paper>
    );
  }
}

export default Menu;
