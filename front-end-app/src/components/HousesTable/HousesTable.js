import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class HousesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
    };
  }

  componentWillMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    return axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
        this.setState({
          houses: response.data,
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <BootstrapTable data={this.state.houses} search version='4' pagination>
        <TableHeaderColumn isKey dataField='userId' dataSort>Nazwa wydawnictwa</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>Ilość autorów</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Ilość publikacji</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Ilość cytowań</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Ilość załączników</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Rok założenia</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
