import React from 'react'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdSupervisorAccount } from "react-icons/md";


const ReusableContainer = ({data,totalCount}) => {
  const columnsToCheck = [
    'shelvesTemperature',
    'freshnessOfGoods',
    'varietyOfGoods',
    'presentationOfPackagingItems',
    'customerGreeting',
    'knowledgeOfProducts',
    'convincingCustomerForPhoneNumber',
    'handlingCustomerComplaintsAndInquiries',
    'cleanlinessOfStore',
    'atmosphereAndDecor',
    'cleanExteriorSignage',
    'easeOfAccess',
    'facadeMaintained',
    'understandingOfLocalMarket',
    'crmActivities',
    'competitorAwareness',
    'executionOfPromotionalActivities',
    'strategiesToUpsellAndCrossSell',
    'initiativeAtLocalLevel',
    'kocFiled',
    'minimizationOfWastageProducts',
    'optimizationOfProductMix',
    'managementOfOnlineSales',
    'adherenceToOperationalStandards'
  ];

  const zeroCounts = columnsToCheck.reduce((acc, col) => {
    acc[col] = data.reduce((count, currentItem) => {
      const value = Number(currentItem[col]);
      return count + (value === 0 ? 1 : 0);
    }, 0);
    return acc;
  }, {});
  // const Data = [
  //   {
  //     name:"Shop Count",
  //     img: <MdSupervisorAccount/>,
  //     value: totalCount,
  //   },
  //   {
  //     name:"0 Shelves Temp",
  //     img: <LiaTemperatureHighSolid/>,
  //     value: temprature,
  //   },
  // ]
  return (
    <div className='ReusableContainer-main-container'>
    {
      columnsToCheck.map(col =>{
        return(
          <div key={col} className='ReusableContainer'>
            <div className='ReusableContainer-inner-container1'>
              <h4>{col}</h4>
              {/* <h1>{val.img}</h1> */}
            </div >
              <div className='ReusableContainer-inner-container2'>{zeroCounts[col]} </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default ReusableContainer