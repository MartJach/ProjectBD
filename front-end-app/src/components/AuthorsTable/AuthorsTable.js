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
    return axios.get('https://jsonplaceholder.typicode.com/albums')
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
        <TableHeaderColumn isKey dataField='userId' dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Nazwisko</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Imię</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Drugie imię</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>ORCID</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
