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

export default class AddCitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      orginal: '',
      citing: '',
      cited: '',
      type: '',
    };

    this.updateId = this.updateId.bind(this);
    this.updateOrginal = this.updateOrginal.bind(this);
    this.updateCiting = this.updateCiting.bind(this);
    this.updateCiting = this.updateCited.bind(this);
    this.updateType = this.updateType.bind(this);
    this.addCitation = this.addCitation.bind(this);
  }

  updateId(e) {
    this.setState({
      id: e.target.value,
    });
  }

  updateOrginal(e) {
    this.setState({
      orginal: e.target.value,
    });
  }

  updateCiting(e) {
    this.setState({
      citing: e.target.value,
    });
  }

  updateCited(e) {
    this.setState({
      cited: e.target.value,
    });
  }

  updateType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  addCitation(e) {
    e.preventDefault();
    return axios.post('http://ddanowskids.ddns.net:8080/citation/new', {
      id: this.state.id,
      orginalText: this.state.orginal,
      type: this.state.type,
      unitCited: {
        id: this.state.id,
        bibType: 'article',
        publisherId: {
          id: this.state.id+1,
          name: "Ten tego",
          institutionId: {
            id: this.state.id,
            name: "Wydawnictwo ABW"
          }
        },
        journalId: {
          id: this.state.id,
          publisherId: {
            id: this.state.id+1,
            name: "Hugh Hefner",
            institutionId: {
              id: this.state.id,
              name: "Wydawnictwo ABW"
            }
          },
          name: "Playboy 2",
          issn: "2451-1986"
        },
        isbn: "ISBN3",
        doi: "DOI3",
        title: "Stan Lee's view on databases",
        ppFrom: 78,
        ppTo: 82,
        year: 2010,
        vol: null,
        issue: 1
      },
      unitCitedTitle: this.state.cited,
      unitCiting: {
        id: this.state.id,
        bibType: 'book',
        publisherId: {
          id: 4,
          name: 'name',
          institutionId: {
            id: 2,
            name: 'Wydawnictwo CBS',
          },
        },
        journalId: null,
        isbn: 'ISBN4',
        doi: 'DOI4',
        title: 'Core Java. Volume I. Fundamentals',
        ppFrom: null,
        ppTo: null,
        year: 2016,
        vol: 1,
      },
      unitCitingTitle: this.state.citing,
    })
      .then((response) => {
        window.location.replace('/#/publications');
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <h1>Cytowanie <Badge color="secondary" style={styles.badgeStyle}>Nowe</Badge></h1>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="ID (id)" onChange={this.updateId} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Orygialny tekst (originalText)" onChange={this.updateOrginal} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Jednostka cytująca (unitCiting.title)" onChange={this.updateCiting} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Jednostka cytowana (unitCited.title)" onChange={this.updateCited} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Typ (type)" onChange={this.updateType} />
        </InputGroup>
        <br />
        <Button color="primary" style={styles.addButton} onClick={this.addCitation}>Dodaj</Button>

      </div>
    );
  }
};
