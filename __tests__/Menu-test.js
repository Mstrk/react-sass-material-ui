/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { Menu, MenuItem, Paper } from '../src';

describe('<Menu />', () => {
  const menu = shallow(
    <Menu>
      <MenuItem isHeaderFirst>Header</MenuItem>
      <MenuItem>Item 1</MenuItem>
    </Menu>
  );

  const ul = menu.find('ul');

  it('should be a single ul element', () => {
    expect(ul).toHaveLength(1);
  });

  it('should have parent type off <Paper />', () => {
    expect(ul.parent().type()).toEqual(Paper);
  });

  it('should have default class menu', () => {
    expect(ul.hasClass('menu')).toEqual(true);
  });
});
