import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import axios from 'axios';

class UserSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    const { users } = this.state;
    const options = {
      sizePerPageList: [
        {
          text: '5',
          value: 5,
        },
        {
          text: '10',
          value: 10,
        },
        {
          text: 'All',
          value: users.length,
        },
      ],
      sizePerPage: 5,
      firstPage: '<<',
      lastPage: '>>',
      paginationSize: 4,
    };
    const comperators = ['=', '>', '>=', '<', '<='];
    const refValue = 'table';
    return (
      <div className="animated fadeIn">
        <BootstrapTable
          ref={refValue}
          data={users}
          search
          version="4"
          searchPlaceholder="Search for..."
          pagination
          hover
          options={options}
        >
          <TableHeaderColumn
            dataField="id"
            isKey
            dataSort
            filter={{
              type: 'NumberFilter',
              delay: 1000,
              numberComparators: comperators,
            }}
            editable={false}
          >
            User ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="firstName"
            dataSort
            filter={{
              type: 'TextFilter',
              delay: 1000,
            }}
            editable={false}
          >
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="lastName"
            dataSort
            filter={{
              type: 'TextFilter',
              delay: 1000,
            }}
            editable={false}
          >
            Last Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="prescriptionLimit"
            dataSort
            filter={{
              type: 'NumberFilter',
              delay: 1000,
            }}
            columnClassName="user-prescription-limit"
          >
            Prescription Limit
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="prescriptionLeft"
            dataSort
            filter={{
              type: 'NumberFilter',
              delay: 1000,
            }}
            editable={false}
          >
            Prescriptions Left
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default UserSettings;
