/*eslint no-undef:0*/
import React from 'react';
import { mount } from 'enzyme';
import { Ripple } from '../src';

describe('<Ripple />', () => {
  const ripple = mount(<Ripple cursorPos={{}} />);

  it('should call componentWillReceiveProps on update', () => {
    expect(ripple.state().animate).toEqual(false);
    ripple.instance().componentWillReceiveProps({ cursorPos: {} });
    expect(ripple.state().animate).toEqual(true);

    // Second click 
    ripple.instance().componentWillReceiveProps({ cursorPos: {} });
    expect(ripple.state().animate).toEqual(true);
  });
});
