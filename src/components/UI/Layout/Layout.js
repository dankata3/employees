import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import EmployeesTable from '../../../containers/EmployeesTable/EmployeesTable';
import EmployeePage from '../../../containers/EmployeePage/EmployeePage';

const layout = props => {
  return (
    <Fragment>
      <Route path="/" exact component={EmployeesTable} />
      <Route path="/employee/:id" component={EmployeePage} />
    </Fragment>
  );
};

export default layout;
