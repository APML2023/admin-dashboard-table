import React from 'react'

const SkeletonLoading = () => {
  return (
    <div className="table-users bg-slate-100 h-full">
      <div className="header">
        <span></span>
      </div>
      <table cellSpacing="0">
        <thead className='table-head'>
          <tr>
            
          </tr>
        </thead>
        <tbody className='w-full h-[550px] flex justify-center items-center '>
        <img src="https://ribbonsandballoons.com/frontassets/wave-ball-preloader.gif" className='w-[100px] h-[100px]' style={{backgroundColor:"transparent"}}></img>
        </tbody>
      </table>
    </div>
  )
}

export default SkeletonLoading