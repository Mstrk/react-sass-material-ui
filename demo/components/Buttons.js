import React from 'react';
import { Button } from '../../src';

const customStyles = {
  marginRight: '8px'
};

const Buttons = () => (
  <div style={{ padding: 'calc(64px + 2em) 2em' }}>
    <Button color='pink' type='icon' icon='heart' style={customStyles} />
    <Button text='Im a button ' style={customStyles} />
    <Button text='Im a button' type='flat' style={customStyles} />
    <Button type='fab' icon='plus' color='teal' style={customStyles} />
    <Button color='black' type='icon' size='l' icon='magnify' style={customStyles} />
  </div>
);

export default Buttons;
