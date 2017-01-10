/*eslint no-undef:0*/
import React from 'react';
import { mount, shallow } from 'enzyme';
import { TextField } from '../src';

describe('<TextField />', () => {
  const mockChange = jest.fn();
  const mockFormat = x => (x);

  const input = mount(
    <TextField
      value=''
      label='username'
      hint='ex: jarvis'
      onChange={mockChange}
      format={mockFormat}
      allowClear
    />
  );

  it('should have root div with class text-field-root', () => {
    expect(input.find('.text-field-root')).toHaveLength(1);
  });

  it('should have div with class text-field', () => {
    expect(input.find('.text-field')).toHaveLength(1);
  });

  it('should have div with default class text-field-color-primary', () => {
    expect(input.find('.text-field-color-primary')).toHaveLength(1);
  });

  it('should set focused to true on focus', () => {
    expect(input.state().focused).toEqual(false);
    input.find('input').simulate('focus');
    expect(input.state().focused).toEqual(true);
  });

  it('should set focused to false on blur', () => {
    input.find('input').simulate('blur');
    expect(input.state().focused).toEqual(false);
  });

  it('should not set focused to false on blur if value', () => {
    input.find('input').simulate('focus');
    input.setProps({ value: 'foo' });
    input.find('input').simulate('blur');
    expect(input.state().focused).toEqual(true);
  });

  it('should call handleChange', () => {
    input.find('input').simulate('change');
    expect(mockChange).toHaveBeenCalled();
  });

  it('should clear the value on clear click', () => {
    input.find('input').simulate('focus');
    input.find('.clear').simulate('click');
    expect(mockChange.mock.calls.length).toEqual(2);
  });

  const inputDisabled = shallow(
    <TextField
      value='foo'
      onChange={noop => noop}
      disabled
    />
  );

  it('shoud have class text-field-is-disabled', () => {
    expect(inputDisabled.find('.text-field-is-disabled')).toHaveLength(1);
  });

  const mockChange2 = jest.fn();

  const textarea = mount(
    <TextField
      value=''
      multiRow
      onChange={mockChange2}
      allowClear
    />
  );

  it('should call handleChange', () => {
    textarea.setProps({ value: 'bar' });
    textarea.find('textarea').simulate('change');
    expect(mockChange2).toHaveBeenCalled();
  });

  it('should call handleChange on clear click', () => {
    textarea.find('textarea').simulate('focus');
    textarea.find('.clear').simulate('click');
    expect(mockChange2.mock.calls.length).toEqual(2);
  });

  const inputIcon = mount(
    <TextField
      value=''
      onChange={noop => noop}
      label='phone'
      type='phone'
      icon='phone'
      limit={10}
      helpMessage='foo'
    />
  );

  it('should have class icon-container, icon-color-primary and limit', () => {
    expect(inputIcon.find('.icon-container')).toHaveLength(1);
    expect(inputIcon.find('.icon-color-primary')).toHaveLength(1);
    expect(inputIcon.find('.limit')).toHaveLength(1);
  });

  it('should have limit and error classes', () => {
    inputIcon.setProps({ error: true, limitError: true });
    expect(inputIcon.find('.icon-color-red')).toHaveLength(1);
    expect(inputIcon.find('.text-field-color-red')).toHaveLength(1);
    expect(inputIcon.find('.help-message-red')).toHaveLength(1);
  });
});
