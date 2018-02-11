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
    return axios.get('http://ddanowskids.ddns.net:8080/institution/list')
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
        <TableHeaderColumn isKey dataField='id' dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='name' dataSort>Nazwa wydawnictwa</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
