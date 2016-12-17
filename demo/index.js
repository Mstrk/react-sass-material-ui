/*
 *
 * Demo
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from './components/App';
import Buttons from './components/Buttons';
import Papers from './components/Papers';
import Menus from './components/Menus';
import Cards from './components/Cards';

// Main Application Styles
import './app.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Buttons} />
      <Route path='paper' component={Papers} />
      <Route path='menu' component={Menus} />
      <Route path='card' component={Cards} />
    </Route>
  </Router>, document.getElementById('root')
);
