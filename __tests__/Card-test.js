/*eslint no-undef:0*/
import React from 'react';
import { shallow } from 'enzyme';
import { Card, Button } from '../src';

describe('<Card />', () => {
  const card = shallow(
    <Card
      img={{ src: '/assets/airplane.jpg' }}

      actions={
        <Button
          type='flat'
          color='accent'
          text='action'
        />
      }

      extendableContent={ 
        <div
          className='card-text'
        >
          <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. 
          Aenean tristique orci a lacinia malesuada.</p>
        </div>
      }
    >
      <span
        className='card-title'
      >
        Lorem Ipsum
      </span>
      <span
        className='card-subtitle'
      >Dolor sit amet</span>
    </Card>
  );

  it('should have image container', () => {
    expect(card.find('.card-img')).toHaveLength(1);
  });

  it('should have content container', () => {
    expect(card.find('.card-content-wrapper')).toHaveLength(1);
    expect(card.find('.card-content')).toHaveLength(1);
  });

  it('should have actions container', () => {
    expect(card.find('.card-actions')).toHaveLength(1);
  });

  it('should have extend button', () => {
    expect(card.find('.extend-anchor')).toHaveLength(1);
  });

  it('should have extendable content container', () => {
    expect(card.find('.extend')).toHaveLength(1);
  });

  const card2 = shallow(
    <Card
      img={{
        src: '/assets/airplane.jpg',
        parentStyle: { maxHeight: '160px' },
        caption: 'Lorem Ipsum'
      }}
    >
      <span
        className='card-title'
      >
        Lorem Ipsum
      </span>
      <span
        className='card-subtitle'
      >Dolor sit amet</span>
    </Card>
  );

  it('should have class limited-height when height is specified on the parent', () => {
    expect(card2.find('.card-img').hasClass('limited-height')).toEqual(true);
  });

  it('should not have extendable container', () => {
    expect(card2.find('.extend')).toHaveLength(0);
  });

  it('should not have actions container', () => {
    expect(card2.find('.card-actions')).toHaveLength(0);
  });

  const card3 = shallow(
    <Card
      actions={
        <Button
          type='flat'
          color='accent'
          text='action'
        />
      }
    >
      <span
        className='card-title'
      >
        Lorem Ipsum
      </span>
      <span
        className='card-subtitle'
      >Dolor sit amet</span>
    </Card>
  );

  it('should not have any image container', () => {
    expect(card3.find('.card-img')).toHaveLength(0);
  });

  it('should not have extend button', () => {
    expect(card3.find('.extend-anchor')).toHaveLength(0);
  });
});
