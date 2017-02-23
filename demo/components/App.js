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
            <MenuItem
              primaryText='Buttons'
              onClick={this.navigate.bind(null, '/')}
            />
            <MenuItem
              primaryText='Paper'
              onClick={this.navigate.bind(null, '/paper')}
            />
            <MenuItem
              primaryText='Menu'
              onClick={this.navigate.bind(null, '/menu')}
            />
            <MenuItem
              primaryText='Card'
              onClick={this.navigate.bind(null, '/card')}
            />
            <MenuItem
            primaryText='Textfield'
              onClick={this.navigate.bind(null, '/textfield')}
            />
            <MenuItem
              primaryText='DataTable'
              onClick={this.navigate.bind(null, '/datatable')}
            />
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
             closeOnItemClick
            >
              <Menu
                type='round'
                hoverable
              >
                <MenuItem
                  primaryText='Edit'
                  leftIcon='pencil'
                />
                <MenuItem
                  primaryText='Cart'
                  leftIcon='heart'
                />
                <MenuItem
                  primaryText='Profile'
                  leftIcon='phone'
                />
                <MenuItem isDivider />
                <MenuItem
                  primaryText='Settings'
                  leftIcon='pencil'
                />
              </Menu>
            </DropDown>
          }
          title='Fancy Title for show'
        />
        {children}
      </div>
    );
  }
}

export default App;
