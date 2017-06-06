import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'

class Menu extends Component {
  cloneChildren () {
    const {
      children,
      hoverable,
      rippable,
      indentItemsLeft,
      indentItemsRight,
      childClassNames = []
    } = this.props
    const childrenArray = React.Children.toArray(children)

    return childrenArray.map((child, key) => (
      React.cloneElement(child, {
        key,
        hoverable,
        rippable,
        indentLeft: !!indentItemsLeft,
        indentRight: !!indentItemsRight,
        className: childClassNames[key]
      })
    ))
  }

  render () {
    const {
      zDepth = 8,
      type,
      color,
      style
    } = this.props

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
    )
  }
}

Menu.propTypes = {
  zDepth: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  hoverable: PropTypes.bool,
  rippable: PropTypes.bool,
  indentItemsLeft: PropTypes.bool,
  indentItemsRight: PropTypes.bool,
  childClassNames: PropTypes.array
}

export default Menu
