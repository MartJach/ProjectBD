import React, { Component } from 'react';
import { Label, Input, InputGroup, InputGroupAddon, Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import config from '../../../config/';

class LoginAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankID: '',
    };

    this.checkAuthLogin = this.checkAuthLogin.bind(this);
    this.setBankID = this.setBankID.bind(this);
  }

  // set BankID from input field
  setBankID(e) {
    this.setState({ bankID: e.target.value });
  }

  checkAuthLogin() {
    if (this.state.bankID === 'haslo12') {
      localStorage.setItem('auth', true);
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <Label htmlFor="bankid" className="full">Your BankID</Label>
        <InputGroup className="mb-3" id="bankid">
          <InputGroupAddon><i className="icon-lock" /></InputGroupAddon>
          <Input type="password" value={this.state.bankID} placeholder="ex. 193205051232" onChange={this.setBankID} required />
        </InputGroup>
        <Row>
          <Col xs="12">
            <Button color="primary" className="px-4" onClick={this.checkAuthLogin}>Login</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginAuth;
