import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Home from '../../views/Home/';
import Publications from '../../views/Publications/';
import Authors from '../../views/Authors/';
import Houses from '../../views/Houses/';
import Add from '../../views/Add/';

const Full = () => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar />
      <main className="main">
        <Breadcrumb />
        <Container fluid>
          <Switch>
            <Route path="/home" name="Strona główna" component={Home} />
            <Route path="/publications" name="Publikacje" component={Publications} />
            <Route path="/authors" name="Autorzy" component={Authors} />
            <Route path="/houses" name="Wydawnictwa" component={Houses} />
            <Route path="/add" name="Dodaj..." component={Add} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Container>
      </main>
      <Aside />
    </div>
    <Footer />
  </div>
);

export default Full;
