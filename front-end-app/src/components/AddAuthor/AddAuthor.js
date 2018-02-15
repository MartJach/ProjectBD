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

export default class AddAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      surname: '',
      name: '',
      name2: '',
      orcid: '',
    };

    this.updateId = this.updateId.bind(this);
    this.updateSurname = this.updateSurname.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateName2 = this.updateName2.bind(this);
    this.updateOrcid = this.updateOrcid.bind(this);
    this.addAuthor = this.addAuthor.bind(this);
  }

  updateId(e) {
    this.setState({
      id: e.target.value,
    });
  }

  updateSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  updateName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  updateName2(e) {
    this.setState({
      name2: e.target.value,
    });
  }

  updateOrcid(e) {
    this.setState({
      orcid: e.target.value,
    });
  }

  addAuthor(e) {
    e.preventDefault();

    return axios.post('http://ddanowskids.ddns.net:8080/person/new', {
      id: this.state.id,
      surname: this.state.surname,
      name: this.state.name,
      name2: this.state.name2,
      orcid: this.state.orcid,
    })
      .then((response) => {
        window.location.replace('/#/authors');
      })
      .catch(error => console.log(error.message));
  }


  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <h1>Autor <Badge color="secondary" style={styles.badgeStyle}>Nowy</Badge></h1>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="ID (id)" onChange={this.updateId} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Nazwisko (surname)" onChange={this.updateSurname} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Imię (name)" onChange={this.updateName} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Drugie imię (name2)" onChange={this.updateName2} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="ORCID (orcid)" onChange={this.updateOrcid} />
        </InputGroup>
        <br />
        <Button color="primary" style={styles.addButton} onClick={this.addAuthor}>Dodaj</Button>

      </div>
    );
  }
}

