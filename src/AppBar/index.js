import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Paper from '../Paper'

const AppBar = ({
  color = 'primary',
  zDepth = 4,
  contentLeft,
  contentRight,
  contentCenter,
  title
}) => (
  <div
    className={
      classnames(
        'app-bar',
        { [`z-depth${zDepth}`]: zDepth }
      )
    }
  >
    <Paper
      color={color}
      className='app-bar-container'
    >
      {contentLeft && <div className='left-content'>{contentLeft}</div>}
      {title && <div className='title'>{title}</div>}
      {<div className='center-content'>{contentCenter}</div>}
      {contentRight && <div className='right-content'>{contentRight}</div>}
    </Paper>
  </div>
)

AppBar.propTypes = {
  color: PropTypes.string,
  zDepth: PropTypes.number,
  contentLeft: PropTypes.node,
  contentCenter: PropTypes.node,
  contentRight: PropTypes.node,
  title: PropTypes.string
}

export default AppBar
