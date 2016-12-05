import React, { Component } from 'react';
import classnames from 'classnames';
import Menu from '../Menu';

class DropDown extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  getDelayClasses(amount) {
    let step = amount / 5;
    const nextStep = step;
    let delay = 1;
    const classes = [];

    for (let i = 1; i <= amount; i++) {
      if (i <= step) {
        classes.push(`delay${delay}`);
      } else {
        step += nextStep;
        classes.push(`delay${++delay}`);
      }
    }

    return classes;
  }

  handleOutsideClick = () => {
    if (!this.state.open) return;
    this.setState({ open: false });
  }

  handleClick = () => {
    setTimeout(() => {
      this.setState({ open: true });
    }, 350);
  }

  render() {
    const { anchorEl, children } = this.props;

    let cloned;
    if (children.type === Menu) {
      cloned = React.cloneElement(children, {
        childClassNames: this.getDelayClasses(children.props.children.length)
      });
    }

    return (
      <div className='dropDown'>
        {React.cloneElement(anchorEl, {
          onClick: this.handleClick,
          bypassRipple: this.state.open
        })}
        <div
          className={
            classnames(
              'dropDown-menu',
              { 'drop-open': this.state.open }
            )
          }
        >
        {cloned || children}
        </div>
      </div>
    );
  }
}

export default DropDown;
