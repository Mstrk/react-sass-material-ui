/*eslint no-undef:0*/
import React from 'react';
import { mount, render } from 'enzyme';
import { SvgIcon } from '../src';

describe('<SvgIcon />', () => {
  it('should render an svg element with path', () => {
    const svgIcon = render(<SvgIcon icon={'plus'} />);

    expect(svgIcon.find('svg').length).toEqual(1);
    expect(svgIcon.find('path').length).toEqual(1);
  });

  it('should have the correct props icon, color, size', () => {
    const svgIcon = mount(<SvgIcon icon={'plus'} color='#000' size={'24px'} />);
    const props = svgIcon.props();

    expect(props.icon).toEqual('plus');
    expect(props.color).toEqual('#000');
    expect(props.size).toEqual('24px');
  });
});

