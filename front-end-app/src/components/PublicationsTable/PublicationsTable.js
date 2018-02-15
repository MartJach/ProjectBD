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
        console.log(response);
        let data = response.data;
        for (let i = 0; i < data.length; i++) {
          data[i].publisherIdName = data[i].publisherId.name;
          if (data[i].journalId != null) data[i].journalIdName = data[i].journalId.name; else data[i].journalIdName = '-';
          data[i].institutionIdName = data[i].publisherId.institutionId.name;
          if (data[i].vol == null) data[i].vol = '-';
        }

        this.setState({
          publications: response.data,
        });
        console.log("działa?", response.data);
      })
      .catch(error => console.log("nie działa", error.message));
  }

  render() {
    return (
      <BootstrapTable data={this.state.publications} search version="4" pagination>
        <TableHeaderColumn isKey dataField="id" dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="title" dataSort>Tytuł</TableHeaderColumn>
        <TableHeaderColumn dataField="bibType" dataSort>Typ</TableHeaderColumn>
        <TableHeaderColumn dataField="publisherIdName" dataSort>Autor</TableHeaderColumn>
        <TableHeaderColumn dataField="institutionIdName" dataSort>Wydawnictwo</TableHeaderColumn>
        <TableHeaderColumn dataField="journalIdName" dataSort>Czasopismo</TableHeaderColumn>
        <TableHeaderColumn dataField="year" dataSort>Rok wydania</TableHeaderColumn>
        <TableHeaderColumn dataField="vol" dataSort>Wolumin</TableHeaderColumn>
        <TableHeaderColumn dataField="issue" dataSort>Wydanie</TableHeaderColumn>
        <TableHeaderColumn dataField="isbn" dataSort>ISBN</TableHeaderColumn>
        <TableHeaderColumn dataField="doi" dataSort>DOI</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
