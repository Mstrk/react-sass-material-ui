import React, { Component } from 'react'
import { Button, Dialog, Toolbar } from '../../src'

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
        <Dialog
          type='round'
          size='m'
          open={open}
          requestClose={this._toggleOpen}

          header={
            <Toolbar
              color='accent'
              label='Dialog'
            />
          }

          actions={[
            <Button text='cancel' type='flat' color='red' key='da1' />,
            <Button text='ok' type='flat' color='light-blue' key='da2' />
          ]}
        >
          <div style={{ padding: '16px 32px' }}>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
          </div>
        </Dialog>
        <Button text='open dialog' onClick={this._toggleOpen} />
      </div>
    )
  }
}

export default Dialogs
