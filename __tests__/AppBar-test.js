/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { AppBar, Button } from '../src';

describe('<Paper />', () => {
  const appBar = shallow(
    <AppBar
      zDepth={1}
      iconLeft={{ color: 'white' }}
      iconRight={{ color: 'white' }}
      title='Fancy Title'
    />
  );

  it('sould have default class appBar', () => {
    expect(appBar.hasClass('appBar')).toEqual(true);
  });

  it('sould render 1x div with class tile', () => {
    expect(appBar.find('.title').length).toEqual(1);
  });

  it('sould render 2x Button components', () => {
    expect(appBar.find(Button).length).toEqual(2);
  });

  const wrapper = shallow(<AppBar />);

  it('sould not render Buttons', () => {
    expect(wrapper.find(Button).length).toEqual(0);
  });
});
