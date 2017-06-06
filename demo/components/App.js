
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, Menu, MenuItem, DropDown, Drawer } from '../../src'
import routes from './routes'

class App extends Component {
  state = {
    drawer: false
  }

  openDrawer = () => {
    this.setState({
      drawer: true
    })
  }

  closeDrawer = () => {
    this.setState({
      drawer: false
    })
  }

  renderDrawer () {
    const { history } = this.props
    return (
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
            onClick={history.push('/')}
          />
          <MenuItem
            primaryText='Paper'
            onClick={history.push('/paper')}
          />
          <MenuItem
            primaryText='Menu'
            onClick={history.push('/menu')}
          />
          <MenuItem
            primaryText='Card'
            onClick={history.push('/card')}
          />
          <MenuItem
            primaryText='Textfield'
            onClick={history.push('/textfield')}
          />
          <MenuItem
            primaryText='DataTable'
            onClick={history.push('/datatable')}
          />
        </Menu>
      </Drawer>
    )
  }

  renderDropdown () {
    return (
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
    )
  }

  render () {
    return (
      <div>
        {this.renderDrawer()}

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

          contentRight={this.renderDropdown()}
          title='Fancy Title'
        />
        {routes()}
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
