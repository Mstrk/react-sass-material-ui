/*
 *
 * Demo
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppBar,
  Button,
  Paper } from '../src';

// Main Application Styles
import './app.scss';

const customStyles = {
  marginRight: '8px'
};

const paperStyles = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '100px',
  marginRight: '20px',
};

const text = 'Paper';

ReactDOM.render(
  <div>
    <AppBar
      zDepth={1}
      iconLeft={{ color: 'white' }}
      iconRight={{ color: 'white' }}
      title='Fancy Title'
    />
    <div style={{ padding: 'calc(64px + 2em) 2em' }}>
      <Button color='pink' type='icon' icon='heart' style={customStyles} />
      <Button text='Im a button ' style={customStyles} />
      <Button text='Im a button' type='flat' style={customStyles} />
      <Button type='fab' icon='plus' color='teal' style={customStyles} />
      <br />
      <br />
      <Paper zDepth={1} style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <Paper zDepth={1} color='primary' style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <Paper zDepth={1} type='round' style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <Paper zDepth={2} type='circle' color='pink' style={paperStyles}>
        <span>{text}</span>
      </Paper>
    </div>
  </div>, document.getElementById('root')
);

