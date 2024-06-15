// import React from 'react';
// import SkeletonLoading from '../features/SkeletonLoading';
// import ReusableContainer from './ReusableContainer';
// import { useGetCount } from '../hooks/hooks';

// const ReusableTable = ({ data, column, title }) => {
//   const { cobj } = useGetCount(data)

//   const totalCount = data.length
//   return (
//     <div className='w-full '>
//       {/* <ReusableContainer data={data} totalCount={totalCount} /> */}
//       {/* <span>Total Temperature: {totalTemperature}</span>
//       <span>Total Data: {totalCount}</span> */}
//       {
//         data.length && column ? (
//           <div className="table-users">
//             <div className="header">
//               {title}
//             </div>
//             <table className='w-full overflow-auto' cellSpacing="0">
//               <thead className='table-head'>

//                 <tr>
//                   {column.map((item, index) => <TableHeadingColumn data={data} key={index} item={item} cobj={cobj} />)}
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   data.map((v, i) => {
//                     return <tr key={i}>
//                       {
//                         column.map((c, i) => {
//                           return  <td key={i}>{v[c.value]}</td>
//                         })
//                       }

//                     </tr>
//                   })
//                 }
//               </tbody>
//             </table>
//           </div>

//         ) : (
//           <SkeletonLoading />
//         )
//       }
//     </div>
//   );
// }

// const TableHeadingColumn = ({ item, data, cobj }) =>  <th>{item.heading} - {cobj[item?.value]} {/* {data.length} */}</th>;

// const TableRow = ({ item, column }) => {
//   return (
//     <tr>
//       {column.map((columnItem, index) => (
//         <td key={index} className={parseInt(item[columnItem.value], 10) === 0 ? 'zero-temperature' : ''}>
//           {item[columnItem.value]}
//         </td>
//       ))}
//     </tr>
//   );
// }

// export default ReusableTable;

import React, { useEffect, useState } from "react";
import SkeletonLoading from "../features/SkeletonLoading";
import ReusableContainer from "./ReusableContainer";
import { useGetCount } from "../hooks/hooks";

const ReusableTable = ({ data, column, title }) => {
  //return "";

  const { cobj } = useGetCount(data);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (title == "AUDIT") {
      const uniqueMap = new Map();
      data.forEach((item) => {
        const currentDate = new Date();
        const createdAtDate = new Date(item.createdAt);

        if (!uniqueMap.has(item.shopName)) {
          uniqueMap.set(item.shopName, {
            ...item,
            count: 1,
            latestCreatedAt: createdAtDate,
          });
        } else {
          const uniqueItem = uniqueMap.get(item.shopName);
          uniqueItem.count++;

          if (createdAtDate > uniqueItem.latestCreatedAt) {
            uniqueItem.latestCreatedAt = createdAtDate;
          }

          uniqueMap.set(item.shopName, uniqueItem);
        }
      });

      uniqueMap.forEach((uniqueItem) => {
        const diffInMilliseconds = new Date() - uniqueItem.latestCreatedAt;
        const diffInDays = Math.floor(
          diffInMilliseconds / (1000 * 60 * 60 * 24)
        );
        const diffInHours = Math.floor(
          (diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        uniqueItem.days = diffInDays;
        uniqueItem.hours = diffInHours;

        delete uniqueItem.latestCreatedAt;
      });

      const uniqueArray = Array.from(uniqueMap.values());

      uniqueArray.sort((a, b) => b.days - a.days);
      setSortedData(uniqueArray);
    } else {
      const sorted = [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setSortedData(sorted);
    }
  }, [data]);

  console.log({ sortedData, column, title }, "in audit table");

  const totalCount = sortedData.length;

  const auditReport = {};

  // console.log({ data })
  data.forEach((data) => {
    // console.log( auditReport[data.shopName])
    if (auditReport[data.shopName]) {

      const count = auditReport[data.shopName].count


      if (new Date(auditReport[data.shopName].createdAt) < new Date(data.createdAt)) {
        auditReport[data.shopName] = {
          createdAt: data.createdAt,
          marks: Object.values(data).reduce((acc, curr) => {
            const mark = Number(curr)
  
            if (!isNaN(mark)) return acc + mark
            else return 0
          }, 0),
          type: data.announcedUnAnnounced,
          count
        }
      }

      auditReport[data.shopName].count = count + 1
    } else {
      auditReport[data.shopName] = {
        createdAt: data.createdAt,
        marks: Object.values(data).reduce((acc, curr) => {
          const mark = Number(curr)

          if (!isNaN(mark)) return acc + mark
          else return 0
        }, 0),
        type: data.announcedUnAnnounced,
        count: 1
      }
    }
  });

  return (
    <div className="w-full ">
      {sortedData.length && column ? (
        <div className="table-users">
          <div className="header">{title}</div>
          <table className="w-full overflow-auto" cellSpacing="0">
            <thead className="table-head">
              <tr>
                <th>Shop Name</th>
                <th colSpan="3">Announced</th>
                <th colSpan="3">UnAnnounced</th>
              </tr>
              <tr>
                <th></th>
                <th>Last Audit Mark</th>
                <th>No of Audit</th>
                <th>No of Days</th>
                <th>Last Audit Mark</th>
                <th>No of Audit</th>
                <th>No of Days</th>
                {/* {column.map((item, index) => <TableHeadingColumn data={sortedData} key={index} item={item} cobj={cobj} />)} */}
              </tr>
            </thead>
            <tbody>
              {/* {sortedData.map((v, i) => {
                return (
                  <tr key={i}>
                    {column.map((c, i) => {
                      return (
                        <td key={i}>
                          {c.value == "days"
                            ? `${v[c.value]} days`
                            : v[c.value]}
                        </td>
                      );
                      // return  <td key={i}>{c.heading != "Name"? v[c.value] : v?.employeeDetails[0]?.employeeName}</td>
                    })}
                  </tr>
                );
              })} */}
              {Object.entries(auditReport).map(rep => {
                if (rep[1].type === "announced") {
                  return <tr>
                  <td>{rep[0]}</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>{rep[1].marks}</td>
                  <td>{rep[1].count}</td>
                  <td>{calculateDaysPassedSince(rep[1].createdAt)}</td> 
                </tr>
                } else {
                  return <tr>
                  <td>{rep[0]}</td>
                  <td>{rep[1].marks}</td>
                  <td>{rep[1].count}</td>
                  <td>{calculateDaysPassedSince(rep[1].createdAt)}</td> 
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                }
              })}
              
            </tbody>
          </table>
        </div>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
};

const TableHeadingColumn = ({ item, data, cobj }) => (
  <th>
    {item.heading} - {cobj[item?.value]} {/* {data.length} */}
  </th>
);

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column.map((columnItem, index) => (
        <td
          key={index}
          className={
            parseInt(item[columnItem.value], 10) === 0 ? "zero-temperature" : ""
          }
        >
          {item[columnItem.value]}
        </td>
      ))}
    </tr>
  );
};

function calculateDaysPassedSince(dateString) {
  // Convert the provided date string into a Date object
  const providedDate = new Date(dateString);
  
  // Get the current date
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const difference = currentDate - providedDate;
  
  // Convert milliseconds into days
  const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  return daysPassed;
}

export default ReusableTable;
