import React, { Component } from 'react';
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

  navigate = route => {
    const { router } = this.props;
    router.push(route);
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
            style={{ minWidth: '200px' }}
          >
            <MenuItem onClick={this.navigate.bind(null, '/')}>Buttons</MenuItem>
            <MenuItem onClick={this.navigate.bind(null, '/paper')}>Paper</MenuItem>
            <MenuItem onClick={this.navigate.bind(null, '/menu')}>Menu</MenuItem>
            <MenuItem onClick={this.navigate.bind(null, '/card')}>Card</MenuItem>
            <MenuItem onClick={this.navigate.bind(null, '/textfield')}>Textfield</MenuItem>
            <MenuItem onClick={this.navigate.bind(null, '/datatable')}>DataTable</MenuItem>
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
