import React from 'react'
import { oneOfType, arrayOf, node, string, number } from 'prop-types'
import Paper from '../Paper'

const Toolbar = ({
  contentLeft,
  contentRight,
  label,
  zDepth,
  color,
  type
}) => (
  <Paper
    className='toolbar'
    zDepth={zDepth}
    type={type}
    color={color}
  >
    {!!contentLeft && <div className='toolbar-left'>{contentLeft}</div>}
    {!!label && <span className='toolbar-label'>{label}</span>}
    {!!contentRight && <div className='toolbar-right'>{contentRight}</div>}
  </Paper>
)

Toolbar.defaultProps = {
  color: 'primary'
}

Toolbar.propTypes = {
  contentLeft: oneOfType([
    arrayOf(node),
    node
  ]),
  contentRight: oneOfType([
    arrayOf(node),
    node
  ]),
  label: string,
  zDepth: number,
  type: string,
  color: string
}

export default Toolbar
