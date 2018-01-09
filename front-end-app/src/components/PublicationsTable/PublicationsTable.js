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
      <BootstrapTable data={this.state.publications} search version='4'>
        <TableHeaderColumn isKey dataField='userId' dataSort>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='title' dataSort>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
