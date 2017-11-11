import React, { Component } from 'react'
import { bool, func, string, node, oneOfType, arrayOf } from 'prop-types'
import classnames from 'classnames'
import Overlay from '../Overlay'
import Paper from '../Paper'

class Dialog extends Component {
  state = {
    dialogShow: false,
    overlayShow: false,
    hasScroll: false
  }

  componentWillMount () {
    const { open } = this.props
    this.setState({ dialogShow: open, overlayShow: open })
  }

  componentDidMount () {
    this.haveScroll()
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ dialogShow: nextProps.open }, () => {
      this.setState({ overlayShow: nextProps.open }, this.haveScroll)
    })
  }

  haveScroll = () => {
    const { hasScroll } = this.state
    const { content } = this.refs

    if (content == null) return

    const contentScroll = content.scrollHeight > content.clientHeight

    if (hasScroll !== contentScroll) {
      this.setState({ hasScroll: contentScroll })
    }
  }

  stopPropagation (event) {
    event.stopPropagation()
  }

  render () {
    const { overlayShow, dialogShow, hasScroll } = this.state
    const { requestClose, size, type, color, alert, header, children, actions } = this.props
    return (
      <Overlay
        open={overlayShow}
        onRequestClose={requestClose}
      >
        <Paper
          zDepth={24}
          type={type}
          color={color}
          className={classnames(
            'dialog',
            {
              [`size-${size}`]: !alert,
              'alert': alert,
              'dialog-enter': dialogShow,
              'dialog-leave': !dialogShow
            }
          )}

          onClick={this.stopPropagation}
        >
          {!!header &&
            <div
              className={classnames(
                'dialog-header',
                { 'z-depth1': hasScroll }
              )}
            >{header}</div>
          }
          <div ref='content' className='dialog-content'>{children}</div>
          {!!actions &&
            <div
              className={classnames(
                'dialog-actions',
                { 'actions-divider': hasScroll }
              )}
            >{actions}</div>}
        </Paper>
      </Overlay>
    )
  }
}

Dialog.defaultProps = {
  requestClose: () => {},
  size: 'l'
}

Dialog.propTypes = {
  open: bool,
  requestClose: func,
  size: string,
  type: string,
  color: string,
  alert: bool,
  header: oneOfType([
    arrayOf(node),
    node
  ]),
  children: oneOfType([
    arrayOf(node),
    node
  ]),
  actions: oneOfType([
    arrayOf(node),
    node
  ])
}

export default Dialog
