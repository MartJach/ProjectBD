import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class AuthorsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
    };
  }

  componentWillMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    return axios.get('http://ddanowskids.ddns.net:8080/person/list')
      .then((response) => {
        this.setState({
          authors: response.data,
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <BootstrapTable data={this.state.authors} search version='4' pagination>
        <TableHeaderColumn isKey dataField='id' dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='surname' dataSort>Nazwisko</TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort>Imię</TableHeaderColumn>
        <TableHeaderColumn dataField='name2' dataSort>Drugie imię</TableHeaderColumn>
        <TableHeaderColumn dataField='orcid' dataSort>Numer ORCID</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
