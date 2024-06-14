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
                  <th>Uniform neat and clean</th>
                  <th>To Do defined and understood</th>
                  <th>Plan for the day is ready</th>
                  <th>Clean Hands 2-hour Hand wash</th>
                  <th>Changes towels / dusters after every hour</th>
                  <th>Adherence to product holding time and arrangement</th>
                  <th>Right Method for mopping the floors</th>
                  <th>Define clean and sanitize</th>
                  <th>What are the do’s and don’ts while handling trash?</th>
                  <th>What must you do if a product has passed its shelf life?</th>
                  <th>How must your appearance be when you come to work?</th>
                  <th>What are the general signs of damaged/ expired products?</th>
                  <th>Why do we use hot water to mop the Floor?</th>
                  <th>What is the right sequence of moping the floor?</th>
                  <th>Strength</th>
                  <th>Weaknesses</th>
                  <th>Opportunities</th>
                  <th>Actionable</th>
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
                      <td>{d.todo}</td>
                      <td>{d.planForTheDay}</td>
                      <td>{d.handsClean}</td>
                      <td>{d.towel}</td>
                      <td>{d.cleanSurface}</td>
                      <td>{d.mopping}</td>
                      <td>{d.defineCleanAndSanitize}</td>
                      <td>{d.dosAndDontsHandlingTrash}</td>
                      <td>{d.whatToDoWhenProductExpired}</td>
                      <td>{d.appearanceOnWork}</td>
                      <td>{d.generalSignsOfDamagedProduct}</td>
                      <td>{d.whyUseHotWaterToMopFloor}</td>
                      <td>{d.sequenceOfMoppingFloor}</td>
                      <td>{d.strength}</td>
                      <td>{d.weakness}</td>
                      <td>{d.opportunities}</td>
                      <td>{d.actionable}</td>
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
