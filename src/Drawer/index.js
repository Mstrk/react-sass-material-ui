import React, { Component } from 'react';
import classnames from 'classnames';

class Drawer extends Component {
  state = {
    open: false,
    originalOverflow: ''
  }

  componentWillMount() {
    this.body = document.getElementsByTagName('body')[0];

    this.setState({
      open: this.props.open,
      originalOverflow: this.body.style.overflow
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  }

  componentDidUpdate() {
    this.lockBody();
  }

  lockBody = () => {
    const { open, originalOverflow } = this.state;

    if (open) {
      this.body.style.overflow = 'hidden';
    } else {
      this.body.style.overflow = originalOverflow;
    }
  }

  close = (element, e) => {
    const {
      disableOverlayClick,
      disableDrawerLeftClick
    } = this.props;

    if (element === 'overlay' && disableOverlayClick) return;
    if (element === 'leftDrawer' && disableDrawerLeftClick) return;
    this.props.requestClose(e);
  }

  render() {
    const {
      overlay,
      children
    } = this.props;

    return (
      <div ref={(c) => { this.drawerRoot = c; }}>
        {overlay ?
          <div
            onClick={this.close.bind(null, 'overlay')}
            className={
              classnames(
                'overlay',
                { open: this.state.open }
              )
            }
          /> : null}

        <div
          onClick={this.close.bind(null, 'leftDrawer')}
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
    );
  }
}

export default Drawer;
