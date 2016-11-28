import React, { Component } from 'react';

class Ripple extends Component {
  state = {
    animate: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }

  componentWillReceiveProps(nextProps) {
    const cursorPos = nextProps.cursorPos;
    if (this.state.animate) {
      this.setState({ animate: false }, () => {
        this.rippling(cursorPos);
      });
    } else this.rippling(cursorPos);
  }

  rippling(cursorPos) {
    const rippleElement = this.refs.ripple;
    const parent = rippleElement.parentElement;

    const parentPos = parent.getBoundingClientRect();

    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    const diameter = Math.max(parentHeight, parentWidth);
    const center = diameter / 2;

    this.setState({
      animate: true,
      width: `${diameter}px`,
      height: `${diameter}px`,
      top: `${cursorPos.top - parentPos.top - center}px`,
      left: `${cursorPos.left - parentPos.left - center}px`
    });
  }

  render() {
    const { top, left, width, height } = this.state;
    return (
      <span
        className={`ripple ${(this.state.animate ? 'ripple--is-animated' : '')}`}
        ref="ripple"
        style={{ top, left, width, height }}
      />
    );
  }
}

Ripple.propTypes = {
  cursorPos: React.PropTypes.object.isRequired
};

export default Ripple;
