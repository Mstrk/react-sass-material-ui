import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

class Overlay extends Component {
  state = {
    originalOverflow: ''
  }

  componentWillMount () {
    this.body = document.getElementsByTagName('body')[0]

    this.setState({
      originalOverflow: this.body.style.overflow
    })
  }

  componentDidUpdate () {
    this.lockBody()
  }

  lockBody = () => {
    const { originalOverflow } = this.state
    const { open } = this.props

    if (open) {
      this.body.style.overflow = 'hidden'
    } else {
      this.body.style.overflow = originalOverflow
    }
  }

  render () {
    const { children, open, onRequestClose } = this.props
    return (
      <CSSTransitionGroup
        transitionName='fade'
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
      >
        {open
          ? <div
            className='overlay'
            onClick={onRequestClose}
          >
            {children}
          </div>
          : null
        }
      </CSSTransitionGroup>
    )
  }
}

Overlay.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired
}

export default Overlay
