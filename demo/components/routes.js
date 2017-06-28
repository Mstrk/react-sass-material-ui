
import React from 'react'
import { Route, Switch } from 'react-router'

import Buttons from './Buttons'
import Papers from './Papers'
import Menus from './Menus'
import Cards from './Cards'
import TextFields from './TextFields'
import DataTables from './DataTables'
import Dialogs from './Dialogs'

export default () => (
  <Switch>
    <Route path='/' exact component={Buttons} />
    <Route path='/paper' component={Papers} />
    <Route path='/menu' component={Menus} />
    <Route path='/card' component={Cards} />
    <Route path='/textField' component={TextFields} />
    <Route path='/datatable' component={DataTables} />
    <Route path='/dialogs' component={Dialogs} />
  </Switch>
)
