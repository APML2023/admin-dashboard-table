/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import SkeletonLoading from "../features/SkeletonLoading";

const HsosTable = ({ column, title, data }) => {
  const [, setSearchInput] = useState("");

  data.forEach((d, i) => {
    let marks = 0
    let count = 0

    Object.values(d).forEach(v => {
      if (v === "Yes") {
        marks++
        count++
      } else if (v === "No") {
        count++
      }
    })

    data[i].marks = marks    
    data[i].percent = (marks / count * 100).toFixed(2)
  })

  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="w-full ">
      <div className="header">{title}</div>

      <div className="cus-search-filter">
        <IoIosSearch className="search-icon" />
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {column ? (
        <div className="table-users">
          <div className="cus-table">
            <table
              className="w-full overflow-auto"
              cellSpacing="0"
            >
              <thead className="table-head">
                <tr>
                  <th>Created At</th>
                  <th>Shop Name</th>
                  <th>Trainee Name</th>
                  <th>Marks Obtained</th>
                  <th>Grooming</th>
                  <th>Products are stocked</th>
                  <th>Equipments are all working</th>
                  <th>To Do defined and understood</th>
                  <th>Plan for the day is ready</th>
                  <th>Clean Hands</th>
                  <th>Right use and storage of cleaning chemicals</th>
                  <th>Correct use of lifting and carrying boxes</th>
                  <th>Use of caution wet floor signs</th>
                  <th>Mop the floor using right procedures</th>
                  <th>Freedom from accidents is important</th>
                  <th>The safety of life and the body of people is the most important</th>
                  <th>Customer Trust-Enhancing trust in the quality</th>
                  <th>Most common source/ cause of fire are cigarette butts</th>
                  <th>Never keep or store anything near electrical panels</th>
                  <th>What are the three elements upon which fire depends</th>
                  <th>How to use a Fire Extinguisher</th>
                  <th>Who leaves the branch, First, in event of fire</th>
                  <th>
                    What are the precautions you need to take while handling cleaning chemicals
                  </th>
                  <th>What steps do you need to take to prevent falls in the branch</th>
                  <th>Who takes care of the equipments repairs in the branch</th>
                  <th>Give 4 Rules of safe use of Step ladder</th>
                  <th>How can you keep lifting heavy boxes easy and risk free</th>
                </tr>
              </thead>

              <tbody>
                {data.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.createdAt.split("T")[0]}</td>
                      <td>{d.branchName}</td>
                      <td>{d.traineeName}</td>
                      <td>{d.marks} | {d.percent}%</td>
                      <td>{d.grooming}</td>
                      <td>{d.stocked}</td>
                      <td>{d.equipments}</td>
                      <td>{d.todo}</td>
                      <td>{d.planforday}</td>
                      <td>{d.cleanhands}</td>
                      <td>{d.chemicals}</td>
                      <td>{d.liftingboxes}</td>
                      <td>{d.wetsign}</td>
                      <td>{d.mopprocess}</td>
                      <td>{d.qa1}</td>
                      <td>{d.qa2}</td>
                      <td>{d.qa3}</td>
                      <td>{d.qa4}</td>
                      <td>{d.qa5}</td>
                      <td>{d.qa6}</td>
                      <td>{d.qa7}</td>
                      <td>{d.qa8}</td>
                      <td>{d.qa9}</td>
                      <td>{d.qa10}</td>
                      <td>{d.qa11}</td>
                      <td>{d.qa12}</td>
                      <td>{d.qa13}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
};

export default HsosTable;
