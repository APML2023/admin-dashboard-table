import React, { useEffect, useState } from "react";
import axios from "axios";
import EmployeeTable from "./employeeTable";
import Modal from "./modal";
import ReusableTable from "./ReusableTable";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  HOCS,
  HSOS,
  KOCS,
  MVRS,
  HSOSFilter,
  KOCSFilter,
  MVRSFilter,
  ISSUES,
  auditcolumn,
} from "./Data";
import SideBar from "./SideBar";
import MvrTable from './MvrTable'

const Table = () => {
  const [employers, setEmployers] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [currentAuditTableData, setCurrentAuditTableData] = useState([]);
  const [currentTableDataFiltered, setcurrentTableDataFiltered] = useState([]);
  const [currentauditTableDataFiltered, setcurrentauditTableDataFiltered] =
    useState([]);

  const [modalType, setModalType] = useState(null);
  const [currentColumns, setCurrentColumns] = useState([]);
  const [secondCurrentColumn, setSecondCurrentColumn] = useState([]);
  const [tableTitle, setTableTitle] = useState("");
  const [secondTableTitle, setsecondTableTitle] = useState("");
  const [Filter, setMvrFilter] = useState([]);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dynamicFilter = (d, filterAns) => {
    let data = d;
    for (let i = 0; i < filterAns.length; i++) {
      data = data.filter((val) => {
        if (
          filterAns[i] == null ||
          filterAns[i] == undefined ||
          filterAns[i].val == null ||
          filterAns[i].val == undefined
        )
          return true;

        if (filterAns[i].type == "number") {
          if(filterAns[i].name != 'Name') return val[filterAns[i].key] == filterAns[i].val;
          else {
            return val?.employeeDetails[0]?.employeeName == filterAns[i].val
          }
        }

        if (filterAns[i].type == "string") {
          return val[filterAns[i].key]
            .toLowerCase()
            .includes(filterAns[i].val.toLowerCase());
        }
        return true;
      });
    }

    return data;
  };

  useEffect(() => {
    axios
      .get("https://chatwithpdf.in/rnb_callbackurl/employers")
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
    setModalType("employee");
    setOpen(true);
  };

  const handleBranch = () => {
    const branches = employers.flatMap((employer) =>
      employer.branch.map((branch) => ({
        name: branch.name,
        range: branch.range,
      }))
    );
    setCurrentTableData(branches);
    setCurrentColumns([
      { heading: "Name", value: "name" },
      { heading: "Range", value: "range" },
    ]);
    setTableTitle("Branches");
    setModalType("table");
    setOpen(true);
  };

  useEffect(() => {
    setcurrentTableDataFiltered(dynamicFilter(currentTableData, Filter));
  }, [Filter, currentTableData]);

  useEffect(() => {
    setcurrentauditTableDataFiltered(
      dynamicFilter(currentAuditTableData, Filter)
    );
  }, []);

  const handleViewMVRS = async () => {
    try {
      // const res = await axios.get("https://chatwithpdf.in/rnb_callbackurl/mvrs");
      const res = await axios.get("https://apml-api-b1.glitch.me/api/v1/ribbons");
      setCurrentTableData(res.data.data);
      setSecondCurrentColumn(auditcolumn);
      setsecondTableTitle("AUDIT");
      setMvrFilter(MVRSFilter);
      setCurrentColumns(MVRS);
      setTableTitle("MVRS");
      // setModalType("table");
      setModalType('mvrTable');

      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewaudit = async () => {
    try {
      const res = await axios.get(
        "https://chatwithpdf.in/rnb_callbackurl/mvrs"
      );
      setCurrentAuditTableData(res.data.data);
      // setMvrFilter(MVRSFilter);
      setSecondCurrentColumn(auditcolumn);
      setsecondTableTitle("AUDIT");
      setModalType("table");
      // setModalType('mvrTable');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewKOCS = async () => {
    try {
      const res = await axios.get(
        "https://chatwithpdf.in/rnb_callbackurl/kocs"
      );
      setCurrentTableData(res.data.data);
      setMvrFilter(KOCSFilter);
      setCurrentColumns(KOCS);
      setTableTitle("KOCS");
      setModalType("table");
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewHSOS = async () => {
    try {
      const res = await axios.get(
        "https://chatwithpdf.in/rnb_callbackurl/hsos"
      );
      setCurrentTableData(res.data.data);
      setMvrFilter(HSOSFilter);
      setCurrentColumns(HSOS);
      setTableTitle("HSOS");
      setModalType("table");
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewHOCS = async () => {
    try {
      const res = await axios.get(
        "https://chatwithpdf.in/rnb_callbackurl/hocs"
      );
      setCurrentTableData(res.data.data);
      // setMvrFilter(HOCSFilter)
      setCurrentColumns(HOCS);
      setTableTitle("HOCS");
      setModalType("table");
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewIssue = async () => {
    try {
      const res = await axios.get("http://localhost:3001/issues");
      // console.log(toString(res.data.data)+"handleViewIssue");
      setCurrentTableData(res.data.data);
      // setMvrFilter(HOCSFilter)
      setCurrentColumns(ISSUES);
      setTableTitle("ISSUES");
      setModalType("table");
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(currentAuditTableData, "currentTableData");

  return (
    <div className="sidebar-and-table">
      <SideBar
        handleViewMVRS={handleViewMVRS}
        handleViewaudit={handleViewaudit}
        handleViewKOCS={handleViewKOCS}
        handleViewHSOS={handleViewHSOS}
        handleViewHOCS={handleViewHOCS}
        handleViewIssue={handleViewIssue}
      />
      <div className="table-users">
        <div className="header">Admin</div>

        <table cellSpacing="0">
          <thead>
            <tr className="table-head">
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
                <td>
                  <button
                    className="button"
                    onClick={() => handleEmployee(index)}
                  >
                    Click
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* edhar table ki ui thik kar   */}
        {open && (
          <Modal
            isOpen={open}
            onClose={handleClose}
            filter={Filter}
            setFilter={setMvrFilter}
            rawData={currentTableData}
          >
            {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ width: "100%" }}>
                {modalType === "table" && (
                  <ReusableTable
                    data={cu  rrentAuditTableData}
                    column={secondCurrentColumn}
                    title={secondTableTitle}
                  />
                )}
              </span>
              <span style={{ width: "100%" }}>
                {modalType === "table" && (
                  <ReusableTable
                    data={currentTableDataFiltered}
                    column={currentColumns}
                    title={tableTitle}
                  />
                )}
              </span>
            </div> */}

            {modalType === "employee" && (
              <EmployeeTable selectedRow={selectedRow} />
            )}
            <div style={{ marginLeft:"2rem", overflow:"auto"}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "brown" }}>
                <TabList
                  onChange={handleChange}
                >
                  <Tab label="Audit" value="1" />
                  <Tab label="MVRS Summary" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {" "}
                <span style={{overflow:"auto"}}>
                {modalType === "table" && (
                  <ReusableTable
                    data={currentAuditTableData}
                    column={secondCurrentColumn}
                    title={secondTableTitle}
                  />
                )}
                </span>
              
              </TabPanel>
              <TabPanel value="2">
                {" "}
                {modalType === "table" && (
                  <MvrTable
                    data={currentTableDataFiltered}
                    column={currentColumns}
                    title={tableTitle}
                  />
                )}
              </TabPanel>
            </TabContext>
            </div>
           
          {/* <Modal isOpen={open} onClose={handleClose} filter={Filter} setFilter={setMvrFilter} rawData={currentTableData}>
            {modalType === 'table' && <ReusableTable data={currentTableDataFiltered} column={currentColumns} title={tableTitle} />}
            {modalType === 'employee' && <EmployeeTable selectedRow={selectedRow} />}
            {modalType === 'mvrTable' && <MvrTable selectedRow={selectedRow} column={currentColumns} title={tableTitle} data={currentTableDataFiltered}  />} */}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Table;
