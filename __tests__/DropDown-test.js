/*eslint no-undef:0*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import { DropDown, Menu, MenuItem } from '../src';

jest.useFakeTimers();

describe('<DropDown />', () => {
  const dropDown = mount(
    <DropDown anchorEl={<span />}>
      <Menu>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </Menu>
    </DropDown>
  );

  // TODO: this is not the right way,
  // it should be dropDown.hasClass('dropDown'),
  // need to change this test when enzyme paches
  // this issue: https://github.com/airbnb/enzyme/pull/677
  it('sould have default class dropDown', () => {
    expect(dropDown.find('.dropDown')).toHaveLength(1);
  });

  it('sould have child div with class dropDown-menu', () => {
    expect(dropDown.find('.dropDown-menu')).toHaveLength(1);
    expect(dropDown.find('.dropDown-menu').type()).toEqual('div');
  });

  // this test is failing in travis CI for some reason
  // TODO: investigate what happen
  // it('should set state open true when anchor is clicked', () => {
  //   expect(dropDown.state().open).toEqual(false);
  //   dropDown.find('span').simulate('click');

  //   jest.runOnlyPendingTimers();
  //   expect(dropDown.state().open).toEqual(true);
  // });

  it('should add delay(number) to each child', () => {
    for (let i = 1; i <= 5; i++) {
      expect(dropDown.find(`.delay${i}`)).toHaveLength(1);
    }

    dropDown.unmount();
  });

  const dropDown2 = shallow(
    <DropDown anchorEl={<span />}>
      <span />
      <span />
      <span />
    </DropDown>
  );

  it('should not add delay(number) to each child', () => {
    for (let i = 1; i <= 3; i++) {
      expect(dropDown2.find(`.delay${i}`)).toHaveLength(0);
    }
  });
});
