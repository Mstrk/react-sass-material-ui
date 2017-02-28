import React, { Component } from 'react';
import classnames from 'classnames';

class DropDown extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleOutsideClick);
  }

  handleOutsideClick = (event) => {
    if (this.state.open) {
      if (this.props.closeOnItemClick) {
        this.setState({ open: false });
      } else if (!this.rootNode.contains(event.target)) {
        this.setState({ open: false });
      }
    }
  }

  handleClick = () => {
    setTimeout(() => {
      this.setState({ open: true });
    }, 50);
  }

  render() {
    const { anchorEl, children } = this.props;

    return (
      <div
        ref={node => { this.rootNode = node; }}
        className='dropDown'
      >
        {React.cloneElement(anchorEl, {
          onClick: this.handleClick
        })}
        <div
          className={
            classnames(
              'dropDown-menu',
              { 'drop-open': this.state.open }
            )
          }
        >
        {children}
        </div>
      </div>
    );
  }
}

export default DropDown;
