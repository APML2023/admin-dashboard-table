import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmployeeTable = ({selectedRow,}) => {
    const [employee, setEmployee] = useState([]);

      useEffect(()=>{
        if(selectedRow && selectedRow._id){
          axios.get("http://localhost:3001/employees/"+selectedRow._id)
          .then((res) =>{
            setEmployee(res?.data?.data)
            console.log(res.data)
          })
          .catch((err) =>{console.log(err);})
        }
    }, [selectedRow])


  return (
    <div class="table-users">
   <div class="header" >
    <span>{employee.length}</span>
    {employee[0]?.companyName} </div>

   <table cellspacing="0">
      <tr className='table-head'>
         <th>Name</th>
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
</div>
  )
}

export default EmployeeTable