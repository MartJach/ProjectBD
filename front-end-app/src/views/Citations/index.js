import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import CitationsTable from '../../components/CitationsTable/';

const Citations = () => (
  <div className="animated fadeIn">
    <CitationsTable />
  </div>
);

export default Citations;
