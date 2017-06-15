import React from 'react'
import { mount } from 'enzyme'
import { Drawer, Overlay } from '../src'

describe('<Drawer />', () => {
  const mockRequestClose = jest.fn()
  const drawer = mount(
    <Drawer
      open={false}
      overlay
      requestClose={mockRequestClose}
    />
  )

  it('shoudld have div with classes drawer and z-depth16', () => {
    const leftDrawer = drawer.find('.drawer')
    expect(leftDrawer.type()).toEqual('div')
    expect(leftDrawer.hasClass('z-depth16')).toEqual(true)
  })

  it('should add class open leftDrawer when the open prop is true', () => {
    expect(drawer.find('.drawer').hasClass('open')).toEqual(false)

    drawer.setProps({ open: true })
    expect(drawer.find('.drawer').hasClass('open')).toEqual(true)
  })

  it('should not render the overlay', () => {
    drawer.setProps({ overlay: false })
    expect(drawer.find(Overlay).length).toEqual(0)
  })

  it('should not request close when overlay or leftDrawer are clicked', () => {
    drawer.setProps({
      overlay: true,
      disableOverlayClick: true,
      disableDrawerLeftClick: true
    })

    drawer.find('.overlay').simulate('click')
    drawer.find('.drawer').simulate('click')
    expect(mockRequestClose).not.toBeCalled()
  })

  it('should request close when overlay is clicked', () => {
    drawer.setProps({ disableOverlayClick: false })

    drawer.find('.overlay').simulate('click')
    expect(mockRequestClose.mock.calls.length).toEqual(1)
  })

  it('should request close when leftDrawer is clicked', () => {
    drawer.setProps({ disableDrawerLeftClick: false })

    drawer.find('.drawer').simulate('click')
    expect(mockRequestClose.mock.calls.length).toEqual(2)
  })
})
