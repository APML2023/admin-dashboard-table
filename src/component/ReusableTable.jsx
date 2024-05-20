import React from 'react';

const ReusableTable = ({ data, column, title }) => {
  console.log(data);

  return (
    <div className="table-users">
      <div className="header">{title}
        <span>{data.length}</span>
      </div>
      <table cellSpacing="0">
        <thead className='table-head'>
          <tr>
            {column.map((item, index) => <TableHeadingColumn key={index} item={item} />)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => <TableRow key={index} item={item} column={column} />)}
        </tbody>
      </table>
    </div>
  );
}

const TableHeadingColumn = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column.map((columnItem, index) => (
        <td key={index}>
          {item[columnItem.value]}
        </td>
      ))}
    </tr>
  );
}

export default ReusableTable;
