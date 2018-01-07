import React from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import LoginAuth from '../../components/LoginAuth/LoginAuth';
import '../../../scss/views/style.scss';
import Logo from '../../../public/img/logo.png';

const styles = {
  card: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  container: {
    background: '-moz-radial-gradient(center, ellipse cover, rgba(125,185,232,1) 0%, rgba(30,87,153,1) 100%)',
    background: '-webkit-radial-gradient(center, ellipse cover, rgba(125,185,232,1) 0%,rgba(30,87,153,1) 100%)',
    background: 'radial-gradient(ellipse at center, rgba(125,185,232,1) 0%,rgba(30,87,153,1) 100%)',
  },
  logoPosition: {
    display: 'block',
    margin: '0 auto 60px auto',
  },
};

const Login = () => (
  <div className="animated fadeIn flex-row align-items-center">
    <div className="app flex-row align-items-center" style={styles.container}>
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup className="mb-0">
              <Card className="p-4" style={styles.card}>
                <CardBody className="card-body">
                  <img src={Logo} style={styles.logoPosition} />
                  <p className="text-muted">Zaloguj się do panelu administracyjnego</p>
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
