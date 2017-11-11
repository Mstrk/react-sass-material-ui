import React from 'react'
import { mount } from 'enzyme'
import { DropDown, Menu, MenuItem } from '../src'

jest.useFakeTimers()

describe('<DropDown />', () => {
  const dropDown = mount(
    <DropDown
      anchorEl={<span className='anchor' />}
      closeOnItemClick
    >
      <Menu>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </Menu>
    </DropDown>
  )

  // TODO: this is not the right way,
  // it should be dropDown.hasClass('dropDown'),
  // need to change this test when enzyme paches
  // this issue: https://github.com/airbnb/enzyme/pull/677
  it('sould have default class dropDown', () => {
    expect(dropDown.find('.drop-down')).toHaveLength(1)
  })

  it('sould have child div with class dropDown-menu', () => {
    expect(dropDown.find('.drop-down-menu')).toHaveLength(1)
    expect(dropDown.find('.drop-down-menu').type()).toEqual('div')
  })

  it('should set state open true when anchor is clicked', () => {
    expect(dropDown.state().open).toEqual(false)
    dropDown.find('.anchor').simulate('click')

    jest.runOnlyPendingTimers()
    expect(dropDown.state().open).toEqual(true)
    dropDown.unmount()
  })
})
