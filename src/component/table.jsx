import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeTable from './employeeTable';
import Modal from './modal';
import ReusableTable from './ReusableTable';
import { HOCS, HSOS, KOCS, MVRS, HSOSFilter, KOCSFilter, MVRSFilter } from './Data';
import SideBar from './SideBar';

const Table = () => {
  const [employers, setEmployers] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [currentTableDataFiltered, setcurrentTableDataFiltered] = useState([]);
  const [modalType, setModalType] = useState(null);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [tableTitle, setTableTitle] = useState("");
  const [Filter, setMvrFilter] = useState([]);

  const dynamicFilter= (d, filterAns) => {
    let data = d;
    for(let i = 0; i < filterAns.length; i++) {
        data = data.filter((val) =>{
            if(filterAns[i] == null || filterAns[i] == undefined || filterAns[i].val == null || filterAns[i].val == undefined) return true;

            if(filterAns[i].type == "number") {
                return val[filterAns[i].key] == filterAns[i].val; 
            }
            
            if(filterAns[i].type == "string"){
                return val[filterAns[i].key].toLowerCase().includes(filterAns[i].val.toLowerCase())
            }
            return true;
        })
    }
    
    return data;
  }

  useEffect(() => {
    axios.get("https://chatwithpdf.in/rnb_callbackurl/employers")
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

  useEffect(()=> {
    setcurrentTableDataFiltered(dynamicFilter(currentTableData, Filter))
  }, [Filter, currentTableData])

  const handleViewMVRS = async () => {
     try {
      const res = await axios.get("https://chatwithpdf.in/rnb_callbackurl/mvrs");
      setCurrentTableData(res.data.data);
      setMvrFilter(MVRSFilter);
      setCurrentColumns(MVRS);
      setTableTitle("MVRS");
      setModalType('table');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewKOCS = async () => {
     try {
      const res = await axios.get("https://chatwithpdf.in/rnb_callbackurl/kocs");
      setCurrentTableData(res.data.data);
      setMvrFilter(KOCSFilter);
      setCurrentColumns(KOCS);
      setTableTitle("KOCS");
      setModalType('table');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewHSOS = async () => {
     try {
      const res = await axios.get("https://chatwithpdf.in/rnb_callbackurl/hsos");
      setCurrentTableData(res.data.data);
      setMvrFilter(HSOSFilter);
      setCurrentColumns(HSOS);
      setTableTitle("HSOS");
      setModalType('table');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewHOCS = async () => {
     try {
      const res = await axios.get("https://chatwithpdf.in/rnb_callbackurl/hocs");
      setCurrentTableData(res.data.data);
      // setMvrFilter(HOCSFilter)
      setCurrentColumns(HOCS);
      setTableTitle("HOCS");
      setModalType('table');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='sidebar-and-table'>
      <SideBar handleViewMVRS={handleViewMVRS} handleViewKOCS={handleViewKOCS} handleViewHSOS={handleViewHSOS} handleViewHOCS={handleViewHOCS}/>
    <div className="table-users">
      <div className="header">Admin</div>

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
        <Modal isOpen={open} onClose={handleClose} filter={Filter} setFilter={setMvrFilter} rawData={currentTableData}>
          {modalType === 'table' && <ReusableTable data={currentTableDataFiltered} column={currentColumns} title={tableTitle} />}
          {modalType === 'employee' && <EmployeeTable selectedRow={selectedRow} />}
        </Modal>
      )}
    </div>
    </div>
  );
}

export default Table;
