import React, { Component } from 'react';
import classnames from 'classnames';

class DropDown extends Component {
  state = {
    open: false
  }

  handleOutsideClick = () => {
    this.setState({ open: false });
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
        tabIndex={0}
        onBlur={this.handleOutsideClick}
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
