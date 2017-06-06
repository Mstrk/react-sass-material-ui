import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const createOnClick = (fn, value) => event => fn(value)

class Drawer extends Component {
  state = {
    open: false,
    originalOverflow: ''
  }

  componentWillMount () {
    this.body = document.getElementsByTagName('body')[0]

    this.setState({
      open: this.props.open,
      originalOverflow: this.body.style.overflow
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      open: nextProps.open
    })
  }

  componentDidUpdate () {
    this.lockBody()
  }

  lockBody = () => {
    const { open, originalOverflow } = this.state

    if (open) {
      this.body.style.overflow = 'hidden'
    } else {
      this.body.style.overflow = originalOverflow
    }
  }

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
      children
    } = this.props

    return (
      <div ref={node => { this.drawerRoot = node }}>
        {overlay
          ? <div
            onClick={createOnClick(this.close, 'overlay')}
            className={
              classnames(
                'overlay',
                { open: this.state.open }
              )
            }
          /> : null}

        <div
          onClick={createOnClick(this.close, 'leftDrawer')}
          className={
            classnames(
              'drawer',
              'z-depth16',
              { open: this.state.open }
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
  requestClose: PropTypes.func
}

export default Drawer
