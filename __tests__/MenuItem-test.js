/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '../src';

describe('<MenuItem />', () => {
  const menuItem = shallow(
    <MenuItem
      isHeaderFirst
      isHeader
      isDivider
      hoverable
    >Header</MenuItem>
  );

  const li = menuItem.find('li');

  it('should be a single li element', () => {
    expect(li).toHaveLength(1);
  });

  it('should have default class menuItem', () => {
    expect(li.hasClass('menuItem')).toEqual(true);
  });

  it('should have class is-header-first', () => {
    expect(li.hasClass('is-header-first')).toEqual(true);
  });

  it('should have class is-header', () => {
    expect(li.hasClass('is-header')).toEqual(true);
  });

  it('should have class is-divider', () => {
    expect(li.hasClass('is-divider')).toEqual(true);
  });

  it('should have class hoverable', () => {
    expect(li.hasClass('hoverable')).toEqual(true);
  });
});
