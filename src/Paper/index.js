import React from 'react'
import { oneOfType, arrayOf, number, string, object, node } from 'prop-types'
import classnames from 'classnames'

const Paper = ({
  zDepth,
  type,
  color,
  children,
  style,
  className,
  ...props
}) => {
  const depth = zDepth > 0 && zDepth <= 24

  return (
    <div
      style={style}
      className={classnames(
        'paper',
        `bgc-${color}`,
        { [`paper-${type}`]: type },
        { [`z-depth${zDepth}`]: depth },
        className
      )}
      {...props}
    >{children}</div>
  )
}

Paper.defaultProps = {
  zDepth: 0,
  color: 'white'
}

Paper.propTypes = {
  zDepth: number,
  type: string,
  color: string,
  style: object,
  children: oneOfType([
    arrayOf(node),
    node
  ]),
  className: string
}

export default Paper
