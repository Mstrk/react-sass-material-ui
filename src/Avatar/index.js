import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SvgIcon from '../SvgIcon'

const Avatar = ({
  bgc,
  icon,
  src,
  size,
  style,
  ...other
}) => (
  <div
    {...other}
    style={{ ...style, width: size, height: size, fontSize: size / 2 }}
    className={
      classnames(
        'avatar',
        { [`bgc-${bgc}`]: bgc }
      )
    }
  >
    {icon
    ? <SvgIcon icon={icon} size={(size * 0.6)} style={{ margin: size * 0.2 }} />
      : <img src={src} />
    }
  </div>
)

Avatar.defaultProps = {
  size: 40
}

Avatar.propTypes = {
  bgc: PropTypes.string,
  icon: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
}

export default Avatar
