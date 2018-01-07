import React from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import LoginAuth from '../../components/LoginAuth/LoginAuth';
import '../../../scss/views/style.scss';

const Login = () => (
  <div className="animated fadeIn flex-row align-items-center">
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup className="mb-0">
              <Card className="p-4">
                <CardBody className="card-body">
                  <h1>eHealth - admin </h1>
                  <p className="text-muted">Sign In to your admin panel</p>
                  <LoginAuth />
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Login;
