import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../Overlay'

const createOnClick = (fn, value) => event => fn(value)

class Drawer extends Component {
  close = (element, event) => {
    const {
      disableOverlayClick,
      disableDrawerLeftClick,
      requestClose
    } = this.props

    if (element === 'overlay' && disableOverlayClick) return
    if (element === 'leftDrawer' && disableDrawerLeftClick) return
    requestClose(event)
  }

  render () {
    const {
      overlay,
      children,
      open
    } = this.props

    return (
      <div>
        {overlay
          ? <Overlay
            open={open}
            onRequestClose={createOnClick(this.close, 'overlay')}
          />
          : null
        }
        <div
          onClick={createOnClick(this.close, 'leftDrawer')}
          className={
            classnames(
              'drawer',
              'z-depth16',
              { open }
            )
          }
        >
          {children}
        </div>
      </div>
    )
  }
}

Drawer.propTypes = {
  open: PropTypes.bool,
  overlay: PropTypes.bool,
  children: PropTypes.node,
  disableOverlayClick: PropTypes.bool,
  disableDrawerLeftClick: PropTypes.bool,
  requestClose: PropTypes.func.isRequired
}

export default Drawer
