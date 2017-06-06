import React from 'react'
import { shallow } from 'enzyme'
import { Paper } from '../src'

describe('<Paper />', () => {
  const paper = shallow(<Paper zDepth={1} type='round' />)

  it('sould have default class paper', () => {
    expect(paper.hasClass('paper')).toEqual(true)
  })


  it('sould have default class bgc-white', () => {
    expect(paper.hasClass('paper-round')).toEqual(true)
  })

  it('sould have class z-depth1', () => {
    expect(paper.hasClass('z-depth1')).toEqual(true)
  })

  it('sould have class paper-round', () => {
    expect(paper.hasClass('paper-round')).toEqual(true)
  })
})
