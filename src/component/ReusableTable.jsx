import React from 'react';
import SkeletonLoading from '../features/SkeletonLoading';
import ReusableContainer from './ReusableContainer';

const ReusableTable = ({ data, column, title }) => {
  console.log(data);

  
  const totalCount = data.length
  return (
    <div className='w-full'>
    <ReusableContainer data={data} totalCount = {totalCount}/>
      {/* <span>Total Temperature: {totalTemperature}</span> 
      <span>Total Data: {totalCount}</span> */}
    {
      data.length && column ?(
        <div className="table-users ">
          <div className="header">
            {title}
          </div>
          <table cellSpacing="0">
            <thead className='table-head`'>
              
              <tr>
                {column.map((item, index) => <TableHeadingColumn data={data} key={index} item={item}/>)}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => <TableRow key={index} item={item} column={column} />)}
            </tbody>
          </table>
        </div>

      ) :(
        <SkeletonLoading/>
      )
    }
    </div>
  );
}

const TableHeadingColumn = ({ item, data }) => <th>{item.heading} {/* {data.length} */}</th>;

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column.map((columnItem, index) => (
        <td key={index} className={parseInt(item[columnItem.value], 10) === 0 ? 'zero-temperature' : ''}>
          {item[columnItem.value]}
        </td>
      ))}
    </tr>
  );
}

export default ReusableTable;
