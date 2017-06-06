import React from 'react'
import { Card, Button } from '../../src'

const cardStyles = {
  marginTop: '20px',
  marginRight: '20px',
  width: '400px'
}

const Cards = () => (
  <div style={{ padding: 'calc(64px + 2em) 2em' }}>
    <Card
      style={cardStyles}
      img={{
        src: '/assets/airplane.jpg',
        parentStyle: { maxHeight: '160px' }
      }}
    >
      <div className='card-text'>
        <p>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean tristique orci a lacinia malesuada.
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Aenean tristique orci a lacinia malesuada.</p>
      </div>
    </Card>

    <Card
      style={cardStyles}
      img={{
        src: '/assets/airplane.jpg'
      }}

      actions={
        <span>
          <Button
            type='flat'
            color='accent'
            text='action 1'
          />
          <Button
            type='flat'
            color='accent'
            text='action 2'
          />
        </span>
      }

      extendableContent={
        <div className='card-text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique orci a lacinia malesuada.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique orci a lacinia malesuada.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique orci a lacinia malesuada.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique orci a lacinia malesuada.</p>
        </div>
      }
    >
      <span className='card-title'>Lorem Ipsum</span>
      <span className='card-subtitle'>Dolor sit amet</span>
    </Card>

    <Card
      style={cardStyles}
      img={{
        src: '/assets/airplane.jpg',
        caption: 'Lorem Ipsum',
        parentStyle: { maxHeight: '200px' }
      }}

      actions={
        <span>
          <Button
            type='flat'
            color='accent'
            text='action 1'
          />
          <Button
            type='flat'
            color='accent'
            text='action 2'
          />
        </span>
      }
    >
      <span className='card-subtitle'>Lorem Ipsum</span>
      <div className='card-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique orci a lacinia malesuada.</p>
      </div>
    </Card>

    <Card
      style={cardStyles}
      img={{
        src: '/assets/dog.jpg'
      }}

      actions={
        <span>
          <Button
            type='flat'
            color='accent'
            text='action 1'
          />
          <Button
            type='flat'
            color='accent'
            text='action 2'
          />
        </span>
      }

      small
      actionsDivider
    >
      <span className='card-title'>Lorem Ipsum</span>
      <span className='card-subtitle'>Lorem Ipsum</span>
      <div className='card-text'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </Card>
  </div>
)

export default Cards
