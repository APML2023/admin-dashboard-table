/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import SkeletonLoading from "../features/SkeletonLoading";

const KocsTable = ({ column, title, data }) => {
  const [, setSearchInput] = useState("");

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
                  <th>Full Form of BOE and LSM</th>
                  <th>Impact of BOE and LSM</th>
                  <th>Accountable for BOE and LSM Activities</th>
                  <th>Ideal Percentage of BOE towards Store Sales</th>
                  <th>Purpose of Doing BOE</th>
                  <th>Requirements of Event Execution</th>
                  <th>Seven Levels of LSM</th>
                  <th>Commandments of Customer Service</th>
                  <th>Script for Community Approach</th>
                  <th>Grooming</th>
                  <th>LSM Calender</th>
                  <th>Fliers</th>
                  <th>Corporate Brochure</th>
                  <th>Corporate Database</th>
                  <th>Contact Persons of Schools, Colleges, NGOs & event</th>
                  <th>Checklists for Activity Execution</th>
                  <th>Store Kundli</th>
                  <th>Feedback</th>
                </tr>
              </thead>

              <tbody>
                {data.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>{d.createdAt.split("T")[0]}</td>
                      <td>{d.branchName}</td>
                      <td>{d.traineeName}</td>
                      <td>{d.fullFormOfBoeandLSM}</td>
                      <td>{d.impactOfBoeAndLsm}</td>
                      <td>{d.accountableOfBoeAndLsm}</td>
                      <td>{d.idealPercentageOfBoeInSales}</td>
                      <td>{d.purposeOfDoingBoe}</td>
                      <td>{d.requirementsOfEventExecution}</td>
                      <td>{d.sevenLevelsOfLsm}</td>
                      <td>{d.commandmentsOfCustomerService}</td>
                      <td>{d.scriptForCommunityApproach}</td>
                      <td>{d.grooming}</td>
                      <td>{d.lsmCalender}</td>
                      <td>{d.fliers}</td>
                      <td>{d.corporateBrochure}</td>
                      <td>{d.corporateDatabase}</td>
                      <td>{d.contactPerson}</td>
                      <td>{d.activityExecution}</td>
                      <td>{d.storeKundli}</td>
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

export default KocsTable;
