import React from 'react'
import { mount } from 'enzyme'
import { Ripple } from '../src'

describe('<Ripple />', () => {
  const timestamp = Date.now()
  const ripple = mount(<Ripple cursorPos={{ time: timestamp }} />)

  it('should call componentWillReceiveProps on update', () => {
    expect(ripple.state().animate).toEqual(false)
    ripple.instance().componentWillReceiveProps({ cursorPos: { time: Date.now() } })
    expect(ripple.state().animate).toEqual(true)

    // Second click
    ripple.instance().componentWillReceiveProps({ cursorPos: { time: Date.now() } })
    expect(ripple.state().animate).toEqual(true)
  })

  const ripple2 = mount(<Ripple cursorPos={{ time: timestamp }} />)

  it('shoud not update component if the time is the same', () => {
    ripple.instance().componentWillReceiveProps({ cursorPos: { time: timestamp } })
    expect(ripple2.state().animate).toEqual(false)
  })
})
