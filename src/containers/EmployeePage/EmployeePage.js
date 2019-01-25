import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { formatPrice } from '../../utilities';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './EmployeePage.css';

export class EmployeePage extends Component {
  state = {
    employeeInfo: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      axios
        .get(
          `https://fourth-js-interview-b392e.firebaseapp.com/employees/${id}`,
          {
            timeout: 5000,
            headers: {
              Authorization: 'fourth-js-interview-data',
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => {
          this.setState({
            employeeInfo: res.data
          });
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      title,
      first_name,
      surname,
      gender,
      age,
      date_of_birth,
      income_tax,
      national_insurance,
      salary,
      take_home
    } = this.state.employeeInfo;

    const employeeInfo = Object.getOwnPropertyNames(this.state.employeeInfo)
      .length ? (
      <Fragment>
        <Link to="/" className={classes.BackBtn}>
          <i className={classes.BtnArrow} />
          Go Back
        </Link>
        <h1>{`${title} ${first_name} ${surname}`}</h1>
        <div className={classes.EmployeeInfoWrap}>
          <div className={classes.w50}>
            <h3>Emplyee Info</h3>
            <ul>
              <li>
                Age: <strong>{age}</strong>
              </li>
              <li>
                Birth Date: <strong>{date_of_birth}</strong>
              </li>
              <li>
                Gender: <strong>{gender}</strong>
              </li>
            </ul>
          </div>
          <div className={classes.w50}>
            <h3>Salary</h3>
            <Table>
              <thead>
                <tr>
                  <td>Salary Info</td>
                  <td className="text-right">
                    <strong>{formatPrice(salary)}</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>National Insurance</td>
                  <td className="text-right">
                    <strong>{formatPrice(national_insurance)}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Income Tax</td>
                  <td className="text-right">
                    <strong>{formatPrice(income_tax)}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Take Home</td>
                  <td className="text-right">
                    <strong>{formatPrice(take_home)}</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    ) : (
      <Spinner />
    );

    return employeeInfo;
  }
}

export default EmployeePage;
