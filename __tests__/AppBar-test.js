/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { AppBar, Button } from '../src';

describe('<AppBar />', () => {
  const appBar = shallow(
    <AppBar
      zDepth={1}
      iconLeft={{ color: 'white' }}
      contentRight={<span>Some Content</span>}
      title='Fancy Title'
    />
  );

  it('sould have default class appBar', () => {
    expect(appBar.hasClass('appBar')).toEqual(true);
  });

  it('sould render 1x div with class tile', () => {
    expect(appBar.find('.title')).toHaveLength(1);
  });

  it('sould have a div with default class left-content', () => {
    expect(appBar.find('.left-content')).toHaveLength(1);
  });

  it('sould have a div with default class right-content', () => {
    expect(appBar.find('.right-content')).toHaveLength(1);
  });

  it('sould have default class appBar', () => {
    expect(appBar.hasClass('appBar')).toEqual(true);
  });

  it('sould render 1x Button components', () => {
    expect(appBar.find(Button)).toHaveLength(1);
  });

  const wrapper = shallow(<AppBar />);

  it('sould not render Buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(0);
  });
});
