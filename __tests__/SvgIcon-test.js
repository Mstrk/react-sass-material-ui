import React from 'react'
import { mount, render } from 'enzyme'
import { SvgIcon, addIcons } from '../src'
import paths from '../src/SvgIcon/iconPaths'

describe('<SvgIcon />', () => {
  it('should render an svg element with path', () => {
    const svgIcon = render(<SvgIcon icon={'plus'} />)

    expect(svgIcon.find('svg').length).toEqual(1)
    expect(svgIcon.find('path').length).toEqual(1)
  })

  it('should have the correct props icon, color, size', () => {
    const svgIcon = mount(<SvgIcon icon={'plus'} color='#000' size={'24px'} />)
    const props = svgIcon.props()

    expect(props.icon).toEqual('plus')
    expect(props.color).toEqual('#000')
    expect(props.size).toEqual('24px')
  })

  it('should add new props to iconPaths', () => {
    expect(paths.foo).toEqual(undefined)
    addIcons({ foo: 'bar' })
    expect(paths.foo).toEqual('bar')
  })

  it('should not add new props to iconPaths if not object type', () => {
    expect(paths.foo).toEqual('bar')
    addIcons('foo bar')
    expect(paths.foo).toEqual('bar')
  })
})
