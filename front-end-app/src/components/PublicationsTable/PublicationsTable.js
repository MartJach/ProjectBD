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
    return axios.get('https://jsonplaceholder.typicode.com/albums')
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
        <TableHeaderColumn isKey dataField='userId' dataSort>Jakieś ID</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>Jakiś super numerek</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Jakiś mega opis</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Inna super kolumna</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Inna super kolumna</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Inna super kolumna</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
