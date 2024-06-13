import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SkeletonLoading from '../features/SkeletonLoading';

const EmployeeTable = ({ selectedRow }) => {
    const [employee, setEmployee] = useState([]);

      useEffect(()=>{
        if(selectedRow && selectedRow._id){
          axios.get("https://chatwithpdf.in/rnb_callbackurl/employees/"+selectedRow._id)
          .then((res) =>{
            setEmployee(res?.data?.data)
          })
          .catch((err) =>{console.log(err);})
        }
    }, [selectedRow])

    const timeDiff = (timestamp) => {
      const currentTime = new Date();
      const previousTime = new Date(timestamp);
  
      const timeDifference = currentTime.getTime() - previousTime.getTime();
      const seconds = Math.floor(timeDifference / 1000);
  
      let interval = Math.floor(seconds / 31536000);
  
      if (interval > 1) {
          return `${interval} years ago`;
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
          return `${interval} months ago`;
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
          return `${interval} days ago`;
      }
      // interval = Math.floor(seconds / 3600);
      // if (interval > 1) {
      //     return `${interval} hours ago`;
      // }
      // interval = Math.floor(seconds / 60);
      // if (interval > 1) {
      //     return `${interval} minutes ago`;
      // }
      return previousTime.toLocaleDateString("en-GB");
  };

  return (
    <div className="table-users">
   <div className="header" >
    <span>{employee.length}</span>
    {employee[0]?.companyName} </div>
    <div>
    </div>
    {
      !employee.length ? (
        <h1><SkeletonLoading/></h1>
      ):(

   <table cellspacing="0">
      <tr className='table-head'>
         <th>Name</th>
         <th>Last CheckIn </th>
         <th>Phone</th>
         <th>Company</th>
         <th>County</th>
         <th>State</th>
         <th>Language</th>
      </tr>

      {employee.map((val, index) =>{
        return(
            <>
            <tr key={index}>
                <td>{val?.employeeName}</td>
                <td>{val?.lastAttendance ? timeDiff(new Date(val?.lastAttendance).getTime()) : "No Entry"}</td>
                <td>{val?.employeeNumber}</td>
                <td>{val?.companyName}</td>
                <td>{val?.countryName} </td>
                <td>{val?.regionName}</td>
                <td>{val?.language} </td>
            </tr>
            </>
        )
      })
      }
   </table>
      )
    }

</div>
  )
}

export default EmployeeTable