import React from 'react'
import { shallow } from 'enzyme'
import { AppBar } from '../src'

describe('<AppBar />', () => {
  const appBar = shallow(
    <AppBar
      zDepth={1}
      contentLeft={<span>Some Content</span>}
      contentRight={<span>Some Content</span>}
      title='Fancy Title'
    />
  )

  it('sould have default class appBar', () => {
    expect(appBar.hasClass('app-bar')).toEqual(true)
  })

  it('sould render 1x div with class tile', () => {
    expect(appBar.find('.title')).toHaveLength(1)
  })

  it('sould have a div with default class left-content', () => {
    expect(appBar.find('.left-content')).toHaveLength(1)
  })

  it('sould have a div with default class right-content', () => {
    expect(appBar.find('.right-content')).toHaveLength(1)
  })

  it('sould have default class appBar', () => {
    expect(appBar.hasClass('app-bar')).toEqual(true)
  })

  const wrapper = shallow(<AppBar />)

  it('sould not render any content', () => {
    expect(wrapper.find('.title')).toHaveLength(0)
    expect(wrapper.find('.left-content')).toHaveLength(0)
    expect(wrapper.find('.right-content')).toHaveLength(0)
  })
})
