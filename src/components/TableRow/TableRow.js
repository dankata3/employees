import React from 'react';
import { Link } from 'react-router-dom';

const tableRow = props => {
  const { id, first_name, surname } = props;
  return (
    <tr>
      <td className="text-right">{id}</td>
      <td>
        <Link
          to={{
            pathname: `/employee/${id}`
          }}
        >
          {first_name}
        </Link>
      </td>
      <td>{surname}</td>
    </tr>
  );
};

export default tableRow;
