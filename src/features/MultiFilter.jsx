import React from "react";
import { FiFilter } from "react-icons/fi";

const MultiFilter = ({ setFilter, data, filter }) => {
  const GroupBy = (d, key) => {
    const set = new Set(d.map((v) => v[key]));
    return Array.from(set);
  };
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
              // <div className="filter-container">
              //     <h4 >{ val.name ? val.name : "Please Add Name in Filter" }</h4>
              //     <select name="Select" id="" onChange={(e)=> {
              //         setFilter((p)=> {
              //             const pre = JSON.parse(JSON.stringify(p));

              //                 pre[index] = {
              //                     ...pre[index],
              //                     key: val.key,
              //                     val: (e.target.value == -1) ? null : e.target.value,
              //                     type: val.type

              //                 }

              //             return (pre)
              //         })
              //     }}>
              //         <option className='option' value={-1}>Select</option>
              //         {data && GroupBy(data, val.key, val.key1).map((v)=> {
              //             return (<option value={v} className='option' >{v}</option>)
              //         })}
              //     </select>
              //     </div>
              <div className="filter-container">
                <h4>{val.name ? val.name : "Please Add Name in Filter"}</h4>
                <select
                  name="Select"
                  id=""
                  onChange={(e) => {
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
                    GroupBy(data, val.key, val.key2).map((v) => {
                      // Use second key here
                      return (
                        <option value={v} className="option">
                          {v}
                        </option>
                      );
                    })}
                </select>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MultiFilter;
