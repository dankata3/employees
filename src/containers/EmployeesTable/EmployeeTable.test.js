import React, { Fragment } from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EmployeesTable from './EmployeesTable';
import Spinner from '../../components/UI/Spinner/Spinner';
import TableRow from '../../components/TableRow/TableRow';

configure({ adapter: new Adapter() });

describe('<EmployeesTable />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EmployeesTable />);
  });

  it('should render <TableRow /> when receiving employee info', () => {
    wrapper.setState({
      employees: [{ id: '1', first_name: 'Tom', surname: 'Roberts' }]
    });
    expect(wrapper.find(TableRow)).toHaveLength(1);
  });

  it('should render <Spinner /> when not receiving employee info', () => {
    wrapper.setState({ employees: {} });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
