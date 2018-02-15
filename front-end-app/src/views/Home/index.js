import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import MainPageDeck from '../../components/MainPageDeck/';

const Home = () => (
  <div className="animated fadeIn">
    <MainPageDeck />
  </div>
);

export default Home;
