import React from 'react';
import axios from 'axios';
import { Button, Badge, InputGroup, InputGroupAddon, InputGroupText, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AutoSelection from '../AutoSelection/AutoSelection';
import theme from '../../../scss/views/theme.scss';

const styles = {
  inputWidth: {
    width: '120%',
  },
  badgeStyle: {
    color: '#fff',
    backgroundColor: '#33444c',
    borderRadius: '5px',
  },
  buttonColors: {
    backgroundColor: '#ffffff',
    borderColor: '#c2cfd6',
  },
  addButton: {
    borderRadius: '5px',
  },
};

export default class KindChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      checked: 0,
      bibType: '',
      doi: '',
      institutionIdName: '',
      isbn: '',
      journalIdName: '',
      publisherIdName: '',
      title: '',
      author: '',
      id: undefined,
      year: undefined,
      vol: undefined,
      issue: undefined,
    };

    this.toggle = this.toggle.bind(this);
    this.checkKind = this.checkKind.bind(this);
    this.updateBibType = this.updateBibType.bind(this);
    this.updateDoi = this.updateDoi.bind(this);
    this.updateInstitutionIdName = this.updateInstitutionIdName.bind(this);
    this.updateIsbn = this.updateIsbn.bind(this);
    this.updateJournalIdName = this.updateJournalIdName.bind(this);
    this.updatePublisherIdName = this.updatePublisherIdName.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateAuthor = this.updateAuthor.bind(this);
    this.updateId = this.updateId.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateVol = this.updateVol.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
    this.addNewPublications = this.addNewPublications.bind(this);
  }

  addNewPublications(e) {
    e.preventDefault();

    return axios.post('http://ddanowskids.ddns.net:8080/bib-unit/new', {
      id: this.state.id,
      bibType: this.state.bibType,
      publisherId: {
        id: this.state.id,
        name: this.state.publisherIdName,
        institutionId: {
          id: this.state.id + 2,
          name: this.state.institutionIdName,
        },
      },
      journalId: null,
      isbn: this.state.isbn,
      doi: this.state.doi,
      title: this.state.title,
      ppFrom: null,
      ppTo: null,
      year: this.state.year,
      vol: this.state.vol,
      issue: this.state.issue,
    })
      .then((response) => {
        window.location.replace('/#/publications');
      })
      .catch(error => console.log(error.message));
  }

  updateBibType(e) {
    this.setState({
      bibType: e.target.value,
    });
  }
  updateDoi(e) {
    this.setState({
      doi: e.target.value,
    });
  }
  updateInstitutionIdName(e) {
    this.setState({
      institutionIdName: e.target.value,
    });
  }
  updateIsbn(e) {
    this.setState({
      isbn: e.target.value,
    });
  }
  updateJournalIdName(e) {
    this.setState({
      journalIdName: e.target.value,
    });
  }
  updatePublisherIdName(e) {
    this.setState({
      publisherIdName: e.target.value,
    });
  }
  updateTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  updateAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }
  updateId(e) {
    this.setState({
      id: e.target.value,
    });
  }
  updateYear(e) {
    this.setState({
      year: e.target.value,
    });
  }
  updateVol(e) {
    this.setState({
      vol: e.target.value,
    });
  }
  updateIssue(e) {
    this.setState({
      issue: e.target.value,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  checkKind(e) {
    const data = parseInt(e.target.value, 10);
    this.setState({
      checked: data,
    });
    if(data == 1) {
      this.setState({
        bibType: 'book',
      });
    }
    if(data == 2) {
      this.setState({
        bibType: 'journal',
      });
    }
    if(data == 3) {
      this.setState({
        bibType: 'article',
      });
    }

    console.log(this.state.bibType);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <h1>Publikacja <Badge color="secondary" style={styles.badgeStyle}>Nowa</Badge></h1>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Id (id)" onChange={this.updateId} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Tytuł (title)" onChange={this.updateTitle} />
        </InputGroup>
        <br />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret style={styles.buttonColors}>
          Jakiego typu jest publikacja (bibType)?
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Wybierz typ</DropdownItem>
            <DropdownItem value={1} onClick={e => this.checkKind(e)}>Książka</DropdownItem>
            <DropdownItem value={2} onClick={e => this.checkKind(e)}>Czasopismo</DropdownItem>
            <DropdownItem value={3} onClick={e => this.checkKind(e)}>Artykuł</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        {this.state.checked === 1 ? <div><h4><Badge color="secondary" style={styles.badgeStyle}>Książka</Badge></h4></div> : ''}
        {this.state.checked === 2 ? <div><h4><Badge color="secondary" style={styles.badgeStyle}>Czasopismo</Badge></h4></div> : ''}
        {this.state.checked === 3 ? <div><h4><Badge color="secondary" style={styles.badgeStyle}>Artykuł</Badge></h4></div> : ''}
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Autor (publisherId.name)" onChange={this.updatePublisherIdName} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Wydawnictwo (institutionId.name)" onChange={this.updateInstitutionIdName} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Czasopismo (journalId.name)" onChange={this.updateJournalIdName} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Rok wydania (year)" onChange={this.updateYear} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Wolumin (vol)" onChange={this.updateVol} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="Wydanie (issue)" onChange={this.updateIssue} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="ISBN (isbn)" onChange={this.updateIsbn} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <Input placeholder="DOI (doi)" onChange={this.updateDoi} />
        </InputGroup>
        <br />
        <Button color="primary" style={styles.addButton} onClick={this.addNewPublications}>Dodaj</Button>{' '}
      </div>
    );
  }
}
