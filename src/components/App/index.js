import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';

// require('./app.css');

var App = React.createClass({
  render: function () {
    return (

      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App
