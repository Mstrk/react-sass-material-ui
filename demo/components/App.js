import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  DropDown,
  Drawer } from '../../src';

class App extends Component {
  state = {
    drawer: false
  }

  openDrawer = () => {
    this.setState({
      drawer: true
    });
  }

  closeDrawer = () => {
    this.setState({
      drawer: false
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Drawer
          open={this.state.drawer}
          requestClose={this.closeDrawer}
          overlay
        >
          <Menu
            zDepth={0}
            hoverable
          >
            <MenuItem><Link to='/'>Buttons</Link></MenuItem>
            <MenuItem><Link to='/paper'>Paper</Link></MenuItem>
            <MenuItem><Link to='/menu'>Menu</Link></MenuItem>
            <MenuItem><Link to='/card'>Card</Link></MenuItem>
          </Menu>
        </Drawer>

        <AppBar
          contentLeft={
            <Button
              type='icon'
              size='l'
              color='white'
              icon='menu'
              onClick={this.openDrawer}
            />
          }

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
        {children}
      </div>
    );
  }
}

export default App;
