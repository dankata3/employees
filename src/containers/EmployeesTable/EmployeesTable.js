import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import TableRow from '../../components/TableRow/TableRow';
import SearchField from '../../containers/SearchField/SearchField';
import classes from './EmployeesTable.css';

export class EmployeesTable extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios
      .get('https://fourth-js-interview-b392e.firebaseapp.com/employees', {
        timeout: 5000,
        headers: {
          Authorization: 'fourth-js-interview-data',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        this.setState({
          employees: res.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    const users = this.state.employees.length ? (
      this.state.employees.map((employee, i) => {
        const { id, first_name, surname } = employee;

        return (
          <TableRow
            key={id}
            id={id}
            first_name={first_name}
            surname={surname}
          />
        );
      })
    ) : (
      <tr>
        <td colSpan="3">
          <Spinner />
        </td>
      </tr>
    );
    return (
      <Fragment>
        <h1 className={classes.EmployeesTable}>Employees table</h1>
        <SearchField employees={this.state.employees} />
        <Table hover>
          <thead>
            <tr>
              <th className="text-right" style={{ width: '40px' }}>
                #
              </th>
              <th>First Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>{users}</tbody>
        </Table>
      </Fragment>
    );
  }
}

export default EmployeesTable;
