import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class CitationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citations: [],
    };
  }

  componentWillMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    return axios.get('http://ddanowskids.ddns.net:8080/citation/list')
      .then((response) => {
        this.setState({
          citations: response.data,
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    return (
      <BootstrapTable data={this.state.citations} search version='4' pagination>
        <TableHeaderColumn isKey dataField='originalText' dataSort>Cytowanie</TableHeaderColumn>
        <TableHeaderColumn dataField='id' dataSort>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='unitCiting' dataSort>Jednostka cytująca</TableHeaderColumn>
        <TableHeaderColumn dataField='unitCited' dataSort>Jednostka cytowana</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
