import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import PublicationsTable from '../../components/PublicationsTable/';

const Pubications = () => (
  <div className="animated fadeIn">
    <PublicationsTable />
  </div>
);

export default Pubications;
