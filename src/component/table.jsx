import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EmployeeTable from './employeeTable';
import Modal from './modal';

const Table = () => {
    const [employers, setEmployers] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null); 
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        axios.get("http://localhost:3001/employers")
        .then((res) =>{
          setEmployers(res?.data?.data)
          console.log(res.data)
        })
        .catch((err) =>{console.log(err);})
    }, [])
  
    const handleClose = () => {
      setOpen(false);
  };

  // const handleOpen = () => {
  // };
  const handleEmployee = (index) =>{
    setSelectedRow(employers[index])
    setOpen(true);
    }
  return (
    <div class="table-users">
   <div class="header">Employers</div>

   <table cellspacing="0">
      <tr className='table-head'>
         <th>Name</th>
         <th>Phone</th>
         <th>Company</th>
         <th>County</th>
         <th>State</th>
         <th>Language</th>
         <th colSpan={2}>Employee</th>
      </tr>

      {employers.map((val, index) =>{
        return(
            <>
            <tr key={index}>
                <td>{val?.fullName}</td>
                <td>{val?.employerNumber}</td>
                <td>{val?.companyName}</td>
                <td>{val?.countryName} </td>
                <td>{val?.regionName}</td>
                <td>{val?.language} </td>
                <td >{val?.emp_count}</td>
                <td><button onClick={() =>{handleEmployee(index)}}>Click</button></td>
            </tr>
            </>
        )
      })
      }
   </table>
   {
     setSelectedRow ?
     <Modal isOpen={open} onClose={handleClose}>
      <>
       <EmployeeTable selectedRow={selectedRow}/>
      </>
     </Modal>
     :
     <></>
   }
</div>
  )
}

export default Table