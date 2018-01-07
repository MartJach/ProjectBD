import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss';
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Containers
import Full from './containers/Full/';
import Login from './views/Login/';

const isAuthorized = localStorage.getItem('auth');

ReactDOM.render(
  (
    <HashRouter>
      <Switch>
        {isAuthorized ? <Route component={Full} /> : <Route exact path="/login" name="Login" component={Login} />}
        {!isAuthorized && <Redirect to="/login" />}
      </Switch>
    </HashRouter>
  ), document.getElementById('root'),
);
