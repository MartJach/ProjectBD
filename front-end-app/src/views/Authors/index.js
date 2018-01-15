import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import AuthorsTable from '../../components/AuthorsTable/';

const Authors = () => (
  <div className="animated fadeIn">
    <AuthorsTable />
  </div>
);

export default Authors;