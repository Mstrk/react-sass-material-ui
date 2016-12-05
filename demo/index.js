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
  Paper,
  Menu,
  MenuItem,
  DropDown } from '../src';

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
      iconLeft={{ color: 'white' }}
      contentRight={
        <DropDown
         anchorEl={
            <Button
              type='icon'
              size='l'
              color='white'
              icon='dots-vertical'
            />
         }
        >
          <Menu
            type='round'
            hoverable
          >
            <MenuItem>Cart</MenuItem>
            <MenuItem>Messages</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem isDivider />
            <MenuItem>Settings</MenuItem>
          </Menu>
        </DropDown>
      }
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
      <Paper zDepth={5} color='primary' style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <Paper zDepth={10} type='round' style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <Paper zDepth={20} type='circle' color='pink' style={paperStyles}>
        <span>{text}</span>
      </Paper>
      <br />
      <br />
      <Menu
        type='round'
        hoverable
      >
        <MenuItem isHeader>Very long Header 1</MenuItem>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
        <MenuItem isDivider />
        <MenuItem isHeader>Header 2</MenuItem>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
      </Menu>
    </div>
  </div>, document.getElementById('root')
);

