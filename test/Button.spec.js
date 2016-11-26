/*eslint no-undef:0*/
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Button, Ripple } from '../src';

describe('<Button />', () => {
   const wrapper = shallow(<Button />);

  it('should be a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have default btn class', () => {
    expect(wrapper.find('.btn')).to.have.length(1);
  });

  it('should have default type class', () => {
    expect(wrapper.find('.btn-raised')).to.have.length(1);
  });

  it('should have default size class', () => {
    expect(wrapper.find('.btn-m')).to.have.length(1);
  });

  it('should have default color class', () => {
    expect(wrapper.find('.btn-primary')).to.have.length(1);
  });

  it('contains a <Ripple/> component', () => {
    expect(wrapper.find(Ripple)).to.have.length(1);
  });
});
