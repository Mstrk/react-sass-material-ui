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
import { addIcons } from '../src';

import App from './components/App';
import Buttons from './components/Buttons';
import Papers from './components/Papers';
import Menus from './components/Menus';
import Cards from './components/Cards';
import TextFields from './components/TextFields';
import DataTables from './components/DataTables';

// Main Application Styles
import './app.scss';

// Inject icon paths in the app
addIcons({
  magnify: 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' //eslint-disable-line
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Buttons} />
      <Route path='paper' component={Papers} />
      <Route path='menu' component={Menus} />
      <Route path='card' component={Cards} />
      <Route path='textField' component={TextFields} />
      <Route path='datatable' component={DataTables} />
    </Route>
  </Router>, document.getElementById('root')
);
