import React from 'react';
import SkeletonLoading from '../features/SkeletonLoading';
import ReusableContainer from './ReusableContainer';

const ReusableTable = ({ data, column, title }) => {
  console.log(data);


  const totalCount = data.length
  return (
    <div className='w-full'>
      <ReusableContainer data={data} totalCount={totalCount} />
      {/* <span>Total Temperature: {totalTemperature}</span> 
      <span>Total Data: {totalCount}</span> */}
      {
        data.length && column ? (
          <div className="table-users ">
            <div className="header">
              {title}
            </div>
            <table className='w-full overflow-auto' cellSpacing="0">
              <thead className='table-head'>

                <tr>
                  {column.map((item, index) => <TableHeadingColumn data={data} key={index} item={item} />)}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr>
                      <td key={index}>{item?.issueDescription}</td>
                      <td key={index}>{item?.productCategory}</td>
                      <td key={index}>{item?.productName}</td>
                      <td key={index}>{item?.dateOfPurchase}</td>
                      <td key={index}>{item?.timeOfPurchase}</td>
                      <td key={index}>{item?.createdBy}</td>
                      <td key={index}>{item?.issueId}</td>
                      <td key={index}>{item?.type}</td>
                      {item?.status && item?.status.length ?
                        <td key={index}>{item?.status[item.status.length - 1]?.status}</td> : <td></td>
                      }
                      <td key={index}>{""}</td>
                      <td key={index}>{item?.createdAt}</td>
                      <td key={index}>{item?.updatedAt}</td>
                      <td key={index}>{item?.__v}</td>
                      <td key={index}><a href={item?.url}>{`${item?.url?.toString().slice(0, 10)}...`}</a></td>
                      <td key={index}>{item?.issueType}</td>
                    </tr>
                  )
                })}

                {/* {data.map((item, index) => <TableRow key={index} item={item} column={column} />)} */}
              </tbody>
            </table>
          </div>

        ) : (
          <SkeletonLoading />
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
