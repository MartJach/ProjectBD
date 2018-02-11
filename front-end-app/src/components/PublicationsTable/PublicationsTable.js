import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class PublicationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
    };
  }

  componentWillMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    return axios.get('http://ddanowskids.ddns.net:8080/bib-unit/list')
      .then((response) => {
        this.setState({
          publications: response.data,
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <BootstrapTable data={this.state.publications} search version='4' pagination>
        <TableHeaderColumn isKey dataField='title' dataSort>Tytuł</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='bibType' dataSort>Typ</TableHeaderColumn>
        <TableHeaderColumn dataField='publisherId' dataSort>Wydawca</TableHeaderColumn>
        <TableHeaderColumn dataField='journalId' dataSort>Czasopismo</TableHeaderColumn>
        <TableHeaderColumn dataField='year' dataSort>Rok wydania</TableHeaderColumn>
        <TableHeaderColumn dataField='vol' dataSort>Wolumin</TableHeaderColumn>
        <TableHeaderColumn dataField='issue' dataSort>Wydanie</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
