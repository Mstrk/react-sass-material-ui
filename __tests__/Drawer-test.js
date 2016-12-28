/*eslint no-undef:0*/
import React from 'react';
import { mount } from 'enzyme';
import { Drawer } from '../src';

describe('<Drawer />', () => {
  const mockFn = jest.fn();
  const drawer = mount(
    <Drawer
      open={false}
      requestClose={mockFn}
      overlay
    />
  );

  it('shoudld have div with classes drawer and z-depth16', () => {
    const leftDrawer = drawer.find('.drawer');
    expect(leftDrawer.type()).toEqual('div');
    expect(leftDrawer.hasClass('z-depth16')).toEqual(true);
  });

  it('shoudld have div with class overlay', () => {
    expect(drawer.find('.overlay').type()).toEqual('div');
  });

  it('should add class open to both leftDrawer and overlay when the open prop is true', () => {
    expect(drawer.find('.drawer').hasClass('open')).toEqual(false);
    expect(drawer.find('.overlay').hasClass('open')).toEqual(false);

    drawer.instance().componentWillReceiveProps({ open: true });
    expect(drawer.find('.drawer').hasClass('open')).toEqual(true);
    expect(drawer.find('.overlay').hasClass('open')).toEqual(true);
  });

  it('should request close when overlay is clicked', () => {
    expect(drawer.props().requestClose).toBeDefined();
    drawer.find('.overlay').simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('should not request close when overlay or leftDrawer is clicked', () => {
    const closeFn = jest.fn();
    drawer.setProps({
      disableOverlayClick: true,
      disableDrawerLeftClick: true,
      requestClose: closeFn
    });

    drawer.find('.overlay').simulate('click');
    drawer.find('.drawer').simulate('click');
    expect(closeFn).not.toBeCalled();
  });

  it('should not render overlay', () => {
    drawer.setProps({ overlay: false });
    expect(drawer.find('.overlay')).toHaveLength(0);
    drawer.unmount();
  });
});
