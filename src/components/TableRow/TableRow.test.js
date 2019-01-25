import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';

configure({ adapter: new Adapter() });

describe('<TableRow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TableRow />);
  });

  it('should render 3 <td> elements', () => {
    expect(wrapper.find('td')).toHaveLength(3);
  });

  it('should render 1 Link element with id and first_name props', () => {
    wrapper.setProps({ id: '1', first_name: 'Tom' });
    expect(
      wrapper.contains(
        <td>
          <Link to={{ pathname: `/employee/1` }}>Tom</Link>
        </td>
      )
    ).toEqual(true);
  });
});
