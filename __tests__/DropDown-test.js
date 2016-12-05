/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { DropDown, Menu } from '../src';

describe('<DropDown />', () => {
  const dropDown = shallow(
    <DropDown anchorEl={<span />}>
      <Menu>
        <span />
      </Menu>
    </DropDown>
  );

  it('sould have default class dropDown', () => {
    expect(dropDown.hasClass('dropDown')).toEqual(true);
  });

  it('sould have child div with class dropDown-menu', () => {
    expect(dropDown.find('.dropDown-menu')).toHaveLength(1);
    expect(dropDown.find('.dropDown-menu').type()).toEqual('div');
  });
});
