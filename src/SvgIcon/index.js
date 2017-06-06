import React from 'react'
import PropTypes from 'prop-types'
import paths from './iconPaths'

const Svg = ({ size, color, icon, onClick, ...other }) => (
  <svg width={size} height={size} fill={color} viewBox='0 0 24 24' onClick={onClick} {...other}>
    <path d={paths[icon]} />
  </svg>
)

Svg.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Svg
