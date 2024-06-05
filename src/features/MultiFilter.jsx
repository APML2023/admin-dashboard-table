import React from "react";
import { FiFilter } from "react-icons/fi";

const MultiFilter = ({ setFilter, data, filter, setFrom, setTo }) => {
  const GroupBy = (d, key, name, val) => {
    console.log("filtername", val)

    console.log('group by', d, key, d[0].employeeDetails[0].employeeName)
    const set = new Set(d.map((v) => {
      if (name != 'Name') {
        // if(val?.val == null && v?.employeeDetails[0]?.employeeName == val?.val)
        // if(name)
        return v[key]
      } else {
        return v?.employeeDetails[0]?.employeeName
      }
    }
    ));
    return Array.from(set);
  };

  let filterData = filter[0]?.val == null ? data : data.filter(d => d?.employeeDetails[0]?.employeeName == filter[0]?.val)

  const handleDateFilter = (e, type) => {
    console.log(e.target.name, "dateFilterDatadateFilterData")
    if (type == 'From') {
      setFrom(e.target.value)
    } else {
      setTo(e.target.value)
    }
  }

  return (
    <div className="filter-main-container ">
      <div className="div1-container">
        <h3 className="">Filter</h3>
        <div className="filter-icon">
          <FiFilter className="" size={30} />
        </div>
      </div>
      <div className="div2-container ">
        {filter &&
          filter.map((val, index) => {
            return (

              <div className="filter-container" key={index}>
                <h4>{val.name ? val.name : "Please Add Name in Filter"}  </h4>

                {
                  val.name == 'Name'
                    ?
                    <select
                      name="Select"
                      id=""
                      onChange={(e) => {
                        setFrom(null)
                          setTo(null)
                        console.log(e.target.value, 'namefilter')
                        setFilter((p) => {
                          val.val = val.val = null;
                          
                          const pre = JSON.parse(JSON.stringify(p));
                          pre[index] = {
                            ...pre[index],
                            key: val.key,
                            key2: val.key2,
                            val: e.target.value == -1 ? null : e.target.value,
                            type: val.type,
                          };
                          console.log(pre, "prepre")
                          return pre;
                        });
                      }}
                    >
                      <option className="option" value={-1}>
                        Select
                      </option>
                      {data &&
                        GroupBy(data, val.key, val.name, val).map((v, i) => {
                          // Use second key here
                          return (
                            <option value={v} className="option" key={i}>
                              {v}
                            </option>
                          );
                        })}
                    </select>
                    // : filter[2]?.val != null && filter[3]?.val != null ?
                    : val?.name == "From" || val?.name == "To" ?
                      <input type="date" id={val.name} name={val.name}
                        onChange={(e) => handleDateFilter(e, val.name)}
                      />
                      :
                      <select
                        name="Select"
                        id=""
                        onChange={(e) => {
                          setFrom(null)
                            setTo(null)
                          setFilter((p) => {
                            
                            const pre = JSON.parse(JSON.stringify(p));
                            pre[index] = {
                              ...pre[index],
                              key: val.key,
                              key2: val.key2,
                              val: e.target.value == -1 ? null : e.target.value,
                              type: val.type,
                            };
                            return pre;
                          });
                        }}
                      >
                        <option className="option" value={-1}>
                          Select
                        </option>
                        {data &&
                          GroupBy(filterData, val.key, val.name, val).map((v, i) => {
                            // Use second key here
                            return (
                              <option value={v} className="option" key={i}>
                                {v}
                              </option>
                            );
                          })}
                      </select>
                }

                {/* <select
                  name="Select"
                  id=""
                  onChange={(e) => {
                    console.log(e.target.value, 'namefilter')
                    setFilter((p) => {
                      const pre = JSON.parse(JSON.stringify(p));
                      pre[index] = {
                        ...pre[index],
                        key: val.key,
                        key2: val.key2,
                        val: e.target.value == -1 ? null : e.target.value,
                        type: val.type,
                      };
                      console.log(pre, "prepre")
                      return pre;
                    });
                  }}
                >
                  <option className="option" value={-1}>
                    Select
                  </option>
                  {data &&
                    GroupBy(data, val.key, val.name, val).map((v, i) => {
                      // Use second key here
                      return (
                        <option value={v} className="option" key={i}>
                          {v}
                        </option>
                      );
                    })}
                </select> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MultiFilter;
