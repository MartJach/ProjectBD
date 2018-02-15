import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import HousesTable from '../../components/HousesTable/';

const Houses = () => (
  <div className="animated fadeIn">
    <HousesTable />
  </div>
);

export default Houses;