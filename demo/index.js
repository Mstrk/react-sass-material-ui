/*
 *
 * Demo
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { addIcons } from '../src'

import App from './components/App'

// Main Application Styles
import './app.scss'

// Inject icon paths in the app
addIcons({
  magnify: 'M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' //eslint-disable-line
})

const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route path='/' component={App} />
    </div>
  </Router>, document.getElementById('root')
)

// Enable HMR for js files
if (module.hot) {
  module.hot.accept()
}
