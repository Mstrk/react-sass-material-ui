/*
 *
 * Demo
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'Button';

// Main Application Styles
import './app.scss';

const customStyles = {
  marginRight: '8px'
};

ReactDOM.render(
  <div style={{ padding: '2em' }}>
    <Button color='pink' type='icon' icon='heart' style={customStyles} />
    <Button text='Im a button ' style={customStyles} />
    <Button text='Im a button' type='flat' style={customStyles} />
    <Button text='Im a button' type='fab' icon='plus' color='teal' style={customStyles} />
  </div>, document.getElementById('root')
);
