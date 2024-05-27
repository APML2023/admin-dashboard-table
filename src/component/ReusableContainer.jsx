import React from 'react'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdSupervisorAccount } from "react-icons/md";


const ReusableContainer = ({temprature,totalCount}) => {
  const Data = [
    {
      name:"Total Temprature",
      img: <LiaTemperatureHighSolid/>,
      value: temprature,
    },
    {
      name:"Total Count",
      img: <MdSupervisorAccount/>,
      value: totalCount,
    },
  ]
  return (
    <div className='ReusableContainer-main-container'>
    {
      Data.map((val,key) =>{
        return(
          <div className='ReusableContainer'>
            <div className='ReusableContainer-inner-container1'>
              <h4>{val.name}</h4>
              <h1>{val.img}</h1>
            </div >
              <div className='ReusableContainer-inner-container2'>{val.value}</div>
          </div>
        )
      })
    }
    </div>
  )
}

export default ReusableContainer