import React, { Component } from 'react';
import classnames from 'classnames';

class Drawer extends Component {
  state = {
    open: false
  }

  componentWillMount() {
    this.setState({
      open: this.props.open
    });
  }

  componentDidMount() {
    this.drawerRoot.addEventListener('wheel', this.cancelScrollEvent);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  }

  componentWillUnmount() {
    this.drawerRoot.removeEventListener('wheel', this.cancelScrollEvent);
  }

  cancelScrollEvent(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    return false;
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
      color = 'white',
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
              `bgc-${color}`,
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
