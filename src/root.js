import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

// require('./app.css');

var App = require('./components/App')
var Dashboard = require('./components/Dashboard')
var Inbox = require('./components/Inbox')
var Calendar = require('./components/Calendar')

let history = createHashHistory({queryKey: false});

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="app" component={Dashboard}/>
      <Route path="inbox" component={Inbox}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.getElementById('react-root'));
