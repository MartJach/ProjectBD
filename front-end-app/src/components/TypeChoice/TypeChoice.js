import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AddPublication from '../../components/AddPublication/';
import AddCitation from '../../components/AddCitation/';
import AddAuthor from '../../components/AddAuthor/';
import AddHouse from '../../components/AddHouse/';

const styles = {
  buttonColors: {
    backgroundColor: '#ffffff',
    borderColor: '#c2cfd6',
  },
};

export default class TypeChoice extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.checkType = this.checkType.bind(this);
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

  checkType(e) {
    const data = parseInt(e.target.value, 10);
    this.setState({
      checked: data,
    });
  }

  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret style={styles.buttonColors}>
          Co chcesz dodać?
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Wybierz typ</DropdownItem>
            <DropdownItem value={1} onClick={e => this.checkType(e)}>Publikacja</DropdownItem>
            <DropdownItem value={2} onClick={e => this.checkType(e)}>Cytowanie</DropdownItem>
            <DropdownItem value={3} onClick={e => this.checkType(e)}>Autor</DropdownItem>
            <DropdownItem value={4} onClick={e => this.checkType(e)}>Wydawnictwo</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {this.state.checked === 1 ? <div><AddPublication /></div> : ''}
        {this.state.checked === 2 ? <div><AddCitation /></div> : ''}
        {this.state.checked === 3 ? <div><AddAuthor /></div> : ''}
        {this.state.checked === 4 ? <div><AddHouse /></div> : ''}
      </div>
    );
  }
}
