import React from 'react'
import { shallow } from 'enzyme'
import { MenuItem } from '../src'

describe('<MenuItem />', () => {
  const menuItem = shallow(
    <MenuItem hoverable>Header</MenuItem>
  )

  const header = shallow(
    <MenuItem isHeader />
  )

  const divider = shallow(
    <MenuItem isDivider />
  )

  it('should be a single li element', () => {
    expect(menuItem.find('li')).toHaveLength(1)
    expect(header.find('li')).toHaveLength(1)
    expect(divider.find('li')).toHaveLength(1)
  })

  it('should have default class menuItem', () => {
    expect(menuItem.find('li').hasClass('menuItem')).toEqual(true)
    expect(header.find('li').hasClass('menuItem')).toEqual(true)
    expect(divider.find('li').hasClass('menuItem')).toEqual(true)
  })

  it('should have class is-header', () => {
    expect(header.find('li').hasClass('is-header')).toEqual(true)
  })

  it('should have class is-divider', () => {
    expect(divider.find('li').hasClass('is-divider')).toEqual(true)
  })

  it('should have class hoverable', () => {
    expect(menuItem.find('li').hasClass('hoverable')).toEqual(true)
  })
})
