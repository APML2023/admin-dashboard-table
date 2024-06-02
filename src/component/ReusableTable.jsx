import React from 'react';
import SkeletonLoading from '../features/SkeletonLoading';
import ReusableContainer from './ReusableContainer';
import { useGetCount } from '../hooks/hooks';

const ReusableTable = ({ data, column, title }) => {
  const { cobj } = useGetCount(data)

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
                  {column.map((item, index) => <TableHeadingColumn data={data} key={index} item={item} cobj={cobj} />)}
                </tr>
              </thead>
              <tbody>
                {
                  data.map((v, i) => {
                    return <tr key={i}>
                      {
                        column.map((c, i) => {
                          return  <td key={i}>{v[c.value]}</td>
                        })
                      }

                    </tr>
                  })
                }
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

const TableHeadingColumn = ({ item, data, cobj }) =>  <th>{item.heading} - {cobj[item?.value]} {/* {data.length} */}</th>;

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
