import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Settings from '../../views/Settings/';

const Full = () => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar />
      <main className="main">
        <Breadcrumb />
        <Container fluid>
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard} />
            <Route path="/settings" name="Settings" component={Settings} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Container>
      </main>
      <Aside />
    </div>
    <Footer />
  </div>
);

export default Full;
