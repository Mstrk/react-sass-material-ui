import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Overlay from '../Overlay'
import Paper from '../Paper'

class Dialog extends Component {
  state = {
    dialogShow: false,
    overlayShow: false
  }

  componentWillMount () {
    const { open } = this.props
    this.setState({ dialogShow: open, overlayShow: open })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ dialogShow: nextProps.open }, () => {
      this.setState({ overlayShow: nextProps.open })
    })
  }

  renderDialog () {
    const { dialogShow } = this.state
    return (
      <Paper
        zDepth={24}
        className={classnames(
          'dialog',
          { 'dialog-enter': dialogShow, 'dialog-leave': !dialogShow }
        )}
      >
        <span>DIALOG</span>
      </Paper>
    )
  }

  render () {
    const { requestClose } = this.props
    const { overlayShow } = this.state
    return (
      <Overlay
        open={overlayShow}
        onRequestClose={requestClose}
      >
        {this.renderDialog()}
      </Overlay>
    )
  }
}

Dialog.propTypes = {
  open: PropTypes.bool,
  requestClose: PropTypes.func
}

export default Dialog
