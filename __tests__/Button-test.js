/*eslint no-undef:0, no-prototype-builtins:0*/
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Button, SvgIcon } from '../src';

describe('<Button />', () => {
  const button = shallow(<Button />);

  it('should have default btn class', () => {
    expect(button.hasClass('btn')).toEqual(true);
  });

  it('should have default type class', () => {
    expect(button.hasClass('btn-raised')).toEqual(true);
  });

  it('should have default size class', () => {
    expect(button.hasClass('btn-m')).toEqual(true);
  });

  it('should have default color class', () => {
    expect(button.hasClass('btn-primary')).toEqual(true);
  });

  const buttonIcon = mount(<Button type='icon' icon='heart' />);

  it('for cover porposes only, the button will do nothing as intended', () => {
    buttonIcon.find('button').simulate('mousedown');
    expect(buttonIcon.props().onClick).not.toBeDefined();
  });

  it('should contain svg element', () => {
    expect(buttonIcon.contains(<SvgIcon icon={'heart'} />)).toEqual(true);
  });

  const mockFn = jest.fn();
  const buttonMounted = mount(<Button onClick={mockFn} />);

  it('should change state on mouseDown event and call fn passed through props', () => {
    buttonMounted.find('button').simulate('mousedown');
    const cursorPos = buttonMounted.state().cursorPos;

    expect(cursorPos.hasOwnProperty('top')).toEqual(true);
    expect(cursorPos.hasOwnProperty('left')).toEqual(true);
    expect(buttonMounted.props().onClick).toBeDefined();
    expect(mockFn).toBeCalled();
  });
});
