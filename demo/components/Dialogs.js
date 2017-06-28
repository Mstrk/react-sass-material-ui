import React, { Component } from 'react'
import { Button, Dialog } from '../../src'

class Dialogs extends Component {
  state = {
    open: false
  }

  _toggleOpen = () => {
    const { open } = this.state
    this.setState({ open: !open })
  }

  render () {
    const { open } = this.state
    return (
      <div style={{ padding: 'calc(64px + 2em) 2em' }}>
        <Dialog open={open} requestClose={this._toggleOpen} />
        <Button text='open dialog' onClick={this._toggleOpen} />
      </div>
    )
  }
}

export default Dialogs
