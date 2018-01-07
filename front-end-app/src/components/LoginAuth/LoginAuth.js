import React, { Component } from 'react';
import { Label, Input, InputGroup, InputGroupAddon, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import config from '../../../config/';

const styles = {
  buttonAligner: {
    textAlign: 'center',
  },
};

class LoginAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankID: '',
    };

    this.state = {
      userID: '',
    };

    this.checkAuthLogin = this.checkAuthLogin.bind(this);
    this.setBankID = this.setBankID.bind(this);
    this.setUserID = this.setUserID.bind(this);
  }

  // set BankID from input field
  setBankID(e) {
    this.setState({ bankID: e.target.value });
  }

  setUserID(e) {
    this.setState({ userID: e.target.value });
  }

  checkAuthLogin() {
    if (this.state.bankID === 'haslo12' && this.state.userID === 'admin') {
        localStorage.setItem('auth', true);
        window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3" id="userid">
          <InputGroupAddon><i className="icon-user" /></InputGroupAddon>
          <Input type="text" value={this.state.userID} placeholder="Nazwa użytkownika" onChange={this.setUserID} required />
        </InputGroup>
        <InputGroup className="mb-3" id="bankid">
          <InputGroupAddon><i className="icon-lock" /></InputGroupAddon>
          <Input type="password" value={this.state.bankID} placeholder="Hasło" onChange={this.setBankID} required />
        </InputGroup>
        <Row>
          <Col xs="12" style={styles.buttonAligner}>
            <Button color="primary" className="px-4" onClick={this.checkAuthLogin}>Zaloguj</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginAuth;
