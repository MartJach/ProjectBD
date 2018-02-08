import React from 'react';
import { Button, Badge, InputGroup, InputGroupAddon, InputGroupText, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AutoSelection from '../AutoSelection/AutoSelection';
import Suggestions from '../../extensions/';
import theme from '../../../scss/views/theme.scss';

const styles = {
  inputWidth: {
    width: '40%',
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
    this.toggle = this.toggle.bind(this);
    this.checkKind = this.checkKind.bind(this);
    this.state = {
      dropdownOpen: false,
      checked: 0,
    };
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
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <h1>Publikacja <Badge color="secondary" style={styles.badgeStyle}>Nowa</Badge></h1>
        <br />
        <InputGroup style={styles.inputWidth}>
          <AutoSelection theme={theme} placeholder="Nazwisko" suggestions={Suggestions.languages} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <AutoSelection theme={theme} placeholder="Imię" suggestions={Suggestions.languages} />
        </InputGroup>
        <br />
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret style={styles.buttonColors}>
          Jakiego rodzaju jest publikacja?
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Wybierz rodzaj</DropdownItem>
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
          <AutoSelection theme={theme} placeholder="Drugie imię" suggestions={Suggestions.languages} />
        </InputGroup>
        <br />
        <InputGroup style={styles.inputWidth}>
          <AutoSelection theme={theme} placeholder="ORCID" suggestions={Suggestions.languages} />
        </InputGroup>
        <br />
        <Button color="primary" style={styles.addButton}>Dodaj</Button>{' '}
      </div>
    );
  }
}
