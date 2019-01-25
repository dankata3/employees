import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './SearchField.css';

class SearchField extends Component {
  state = {
    filteredEmployees: []
  };

  dropdownHandler = value => {
    const filteredEmployees = this.props.employees.filter(
      employee =>
        employee.first_name.toLowerCase().includes(value) ||
        employee.surname.toLowerCase().includes(value)
    );
    if (value < 1) {
      this.setState({
        filteredEmployees: []
      });
    } else {
      this.setState({
        filteredEmployees
      });
    }
  };

  render() {
    const dropdown = this.state.filteredEmployees.length ? (
      <ul className={classes.Dropdown}>
        {this.state.filteredEmployees.map(employee => (
          <li key={employee.id}>
            <Link
              to={{
                pathname: `/employee/${employee.id}`
              }}
            >
              {employee.first_name} {employee.surname}
            </Link>
          </li>
        ))}
      </ul>
    ) : null;

    return (
      <div className="input-group" style={{ margin: '20px 0' }}>
        <input
          type="search"
          className="form-control"
          placeholder="Search for..."
          onChange={e => this.dropdownHandler(e.target.value)}
        />
        {dropdown}
      </div>
    );
  }
}

export default SearchField;
