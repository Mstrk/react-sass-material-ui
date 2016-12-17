import React from 'react';
import { Menu, MenuItem } from '../../src';

const Menus = () => (
  <div style={{ padding: 'calc(64px + 2em) 2em' }}>
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
);

export default Menus;
