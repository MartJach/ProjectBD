import React from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const Dashboard = () => (
  <div className="animated fadeIn">
    <Card className="login-card">
      <CardHeader>
        <strong>ePrescription Admin page</strong>
      </CardHeader>
      <CardBody className="card-body">
        <Row>
          <Col xs="12">
            Here you can change basic user settings and generate reports.
            <br />
            Just use sidebar to change views.
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

export default Dashboard;
