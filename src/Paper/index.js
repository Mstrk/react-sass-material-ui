import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Paper = ({
  zDepth,
  type,
  color = 'white',
  children,
  style,
  className
}) => {
  const depth = zDepth > 0 && zDepth <= 24

  return (
    <div
      style={style}
      className={
      classnames(
        'paper',
        `bgc-${color}`,
        { [`paper-${type}`]: type },
        { [`z-depth${zDepth}`]: depth },
        className
      )
    }
    >{children}</div>
  )
}

Paper.propTypes = {
  zDepth: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Paper
