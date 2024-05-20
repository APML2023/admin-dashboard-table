import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeTable from './employeeTable';
import Modal from './modal';
import ReusableTable from './ReusableTable';
import { HOCS, HSOS, KOCS, MVRS } from './Data';

const Table = () => {
  const [employers, setEmployers] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [tableTitle, setTableTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/employers")
      .then((res) => {
        const employersData = res?.data?.data;
        setEmployers(employersData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmployee = (index) => {
    setSelectedRow(employers[index]);
    setModalType('employee');
    setOpen(true);
  };

  const handleBranch = () => {
    const branches = employers.flatMap(employer =>
      employer.branch.map(branch => ({
        name: branch.name,
        range: branch.range
      }))
    );
    setCurrentTableData(branches);
    setCurrentColumns([
      { heading: "Name", value: "name" },
      { heading: "Range", value: "range" },
    ]);
    setTableTitle("Branches");
    setModalType('table');
    setOpen(true);
  };


  const handleViewMVRS = () => {
    axios.get("http://localhost:3001/mvrs")
      .then((res) => {
        setCurrentTableData(res.data.data);
        setCurrentColumns(MVRS);
        setTableTitle("MVRS");
        setModalType('table');
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleViewKOCS = () => {
    axios.get("http://localhost:3001/kocs")
      .then((res) => {
        setCurrentTableData(res.data.data);
        setCurrentColumns(KOCS);
        setTableTitle("KOCS");
        setModalType('table');
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleViewHSOS = () => {
    axios.get("http://localhost:3001/hsos")
      .then((res) => {
        setCurrentTableData(res.data.data);
        setCurrentColumns(HSOS);
        setTableTitle("HSOS");
        setModalType('table');
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleViewHOCS = () => {
    axios.get("http://localhost:3001/hocs")
      .then((res) => {
        setCurrentTableData(res.data.data);
        setCurrentColumns(HOCS);
        setTableTitle("HOCS");
        setModalType('table');
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="table-users">
      <div className="header">Admin</div>
      <div className="admin-button">
        <button onClick={handleViewMVRS}>View <span> mvrs</span></button>
        <button onClick={handleViewKOCS}>View <span> kocs</span></button>
        <button onClick={handleViewHSOS}>View <span> hsos</span></button>
        <button onClick={handleViewHOCS}>View <span> hocs</span></button>
      </div>

      <table cellSpacing="0">
        <thead>
          <tr className='table-head'>
            <th>Name</th>
            <th>Phone</th>
            <th>Company</th>
            <th>View Branch</th>
            <th>County</th>
            <th>State</th>
            <th>Language</th>
            <th colSpan={2}>Employee</th>
          </tr>
        </thead>
        <tbody>
          {employers.map((val, index) => (
            <tr key={index}>
              <td>{val?.fullName}</td>
              <td>{val?.employerNumber}</td>
              <td>{val?.companyName}</td>
              <td>
                <button onClick={handleBranch}>View Branch's </button>
              </td>
              <td>{val?.countryName}</td>
              <td>{val?.regionName}</td>
              <td>{val?.language}</td>
              <td>{val?.emp_count}</td>
              <td><button className='button' onClick={() => handleEmployee(index)}>Click</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <Modal isOpen={open} onClose={handleClose}>
          {modalType === 'table' && <ReusableTable data={currentTableData} column={currentColumns} title={tableTitle} />}
          {modalType === 'employee' && <EmployeeTable selectedRow={selectedRow} />}
        </Modal>
      )}
    </div>
  );
}

export default Table;
