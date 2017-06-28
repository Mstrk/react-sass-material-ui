import React from 'react'
import { JSDOM } from 'jsdom'
import { mount } from 'enzyme'
import { Overlay } from '../src'

describe('<Overlay />', () => {
  global.document = new JSDOM('<!doctype html><html><body></body></html>')
  global.window = document.defaultView

  const mockRequestClose = jest.fn()
  const overlay = mount(<Overlay onRequestClose={mockRequestClose} />)

  it('should only render a <span /> if not open', () => {
    expect(overlay.html()).toEqual('<span></span>')
  })

  it('should render a div with class overlay if open', () => {
    overlay.setProps({ open: true })
    const node = overlay.find('.overlay')
    expect(node.length).toEqual(1)
    expect(node.type()).toEqual('div')
  })

  it('should set body overflow to hidden', () => {
    expect(document.body.style.overflow).toEqual('hidden')
  })

  it('should restore body overflow to previous', () => {
    overlay.setProps({ open: false })
    expect(document.body.style.overflow).toEqual('')
  })
})
