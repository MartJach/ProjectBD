import React from 'react';
import axios from 'axios';
import { Button, Badge, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import AutoSelection from '../AutoSelection/AutoSelection';
import Suggestions from '../../extensions/';
import theme from '../../../scss/views/theme.scss';

const styles = {
  inputWidth: {
    width: '60%',
  },
  badgeStyle: {
    color: '#fff',
    backgroundColor: '#33444c',
    borderRadius: '5px',
  },
  addButton: {
    borderRadius: '5px',
  },
};

export default class AddHouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
    };

    this.updateId = this.updateId.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  updateId(e) {
    this.setState({
      id: e.target.value,
    });
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  addHouse(e) {
    e.preventDefault();

    return axios.post('http://ddanowskids.ddns.net:8080/institution/new', {
      id: this.state.id,
      name: this.state.name,
    })
      .then((response) => {
        window.location.replace('/#/houses');
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <h1>Wydawnictwo <Badge color="secondary" style={styles.badgeStyle}>Nowe</Badge></h1>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="ID (id)" onChange={this.updateId} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Nazwa wydawnictwa (name)" onChange={this.updateName} />
        </InputGroup>
        <br />
        <Button color="primary" style={styles.addButton} onClick={this.addHouse} >Dodaj</Button>{' '}
      </div>
    );
  }
};
