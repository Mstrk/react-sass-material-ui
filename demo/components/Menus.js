import React from 'react';
import { Menu, MenuItem } from '../../src';

const Menus = () => (
  <div style={{ padding: 'calc(64px + 2em) 2em' }}>
    <span>
      <Menu
        type='round'
        hoverable
      >
        <MenuItem
          isHeader
          primaryText='Very long Header 1'
        />
        <MenuItem primaryText='Item 1' />
        <MenuItem primaryText='Item 2' />
        <MenuItem primaryText='Item 3' />
        <MenuItem primaryText='Item 4' />
        <MenuItem isDivider />
        <MenuItem
          isHeader
          primaryText='Header 2'
        />
        <MenuItem primaryText='Item 1' />
        <MenuItem primaryText='Item 2' />
      </Menu>
    </span>

    <span style={{ marginLeft: 30 }}>
      <Menu
        type='round'
        hoverable
        indentItemsLeft
      >
        <MenuItem
          primaryText='Edit Item 1'
          leftIcon='pencil'
        />
        <MenuItem
          primaryText='Heart Item 2'
          leftIcon='heart'
        />
        <MenuItem
          primaryText='Travel Item 3'
          leftIcon='airballoon'
        />
        <MenuItem
          primaryText='Call Item 4'
          leftIcon='phone'
        />
        <MenuItem isDivider />
        <MenuItem
          primaryText='Item 6'
        />
        <MenuItem
          primaryText='Item 7'
          leftIcon='pencil'
        />
      </Menu>
    </span>

    <span style={{ marginLeft: 30 }}>
      <Menu
        type='round'
        hoverable
        rippable
        indentItemsRight
      >
        <MenuItem
          primaryText='Edit Item 1'
          rightIcon='pencil'
        />
        <MenuItem
          primaryText='Heart Item 2'
          rightIcon='heart'
        />
        <MenuItem
          primaryText='Travel Item 3'
          rightIcon='airballoon'
        />
        <MenuItem
          primaryText='Call Item 4'
          rightIcon='phone'
        />
        <MenuItem isDivider />
        <MenuItem
          primaryText='Item 6'
        />
        <MenuItem
          primaryText='Item 7'
          rightIcon='pencil'
        />
      </Menu>
    </span>
  </div>
);

export default Menus;
