import React, { useEffect, useState } from 'react'
import SkeletonLoading from '../features/SkeletonLoading';
import { useGetCount } from '../hooks/hooks';
import { IoIosSearch } from "react-icons/io";

const MvrTable = ({ column, title, data, from, to }) => {
  const [isExpandOpions, setIsExpandOptions] = useState(false)
  const [isExpandService, setIsExpandService] = useState(false)
  const [isExpandVisibility, setIsExpandVisibility] = useState(false)
  const [isExpandKnowledge, setIsExpandKnowledge] = useState(false)
  const [isExpandMarketing, setIsExpandMarketing] = useState(false)
  const [isExpandTraining, setIsExpandTraining] = useState(false)
  const [sortedData, setSortedData] = useState([]);
  const [searchInput, setSearchInput] = useState("")

  const { cobj, totalCount } = useGetCount(data)
  let st = 0
  let fg = 0
  let vog = 0
  let pop = 0


  let sht = data.forEach(e => {
    if (Number(e?.shelvesTemperature) == 0) st++
    if (Number(e?.freshnessOfGoods) == 0) fg++
    if (Number(e?.varietyOfGoods) == 0) vog++
    if (Number(e?.presentationOfPackagingItems) == 0) pop++
  });


  function QualityProduct(s, f, v, p) {
    let total = Number(s) + Number(f) + Number(v) + Number(p)
    return total
  }

  function Service(a, b, c, d, e, f) {
    let total = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f)
    return total
  }

  function Visibility(a, b, c) {
    let total = Number(a) + Number(b) + Number(c)
    return total
  }

  function Knowledge(a, b, c) {
    let total = Number(a) + Number(b) + Number(c)
    return total
  }

  function Marketing(a) {
    let total = Number(a)
    return total
  }

  const TotalQualityProduct = st + fg + vog + pop
  const TotalService = getCount("customerGreeting") + getCount("knowledgeOfProducts") + getCount("convincingCustomerForPhoneNumber") + getCount("handlingCustomerComplaintsAndInquiries") + getCount("cleanlinessOfStore") + getCount("atmosphereAndDecor")
  const TotalVisi = getCount("cleanExteriorSignage") + getCount("easeOfAccess") + getCount("facadeMaintained")
  const TotalKnow = getCount("understandingOfLocalMarket") + getCount("crmActivities") + getCount("competitorAwareness")
  const TotalMark = getCount("executionOfPromotionalActivities")
  const Totaltrain = getCount("strategiesToUpsellAndCrossSell") + getCount("initiativeAtLocalLevel") + getCount("kocFiled") + getCount("minimizationOfWastageProducts") + getCount("optimizationOfProductMix") + getCount("managementOfOnlineSales") + getCount("adherenceToOperationalStandards")

  function getCount(type) {
    let count = 0
    for (let i = 0; i < cobj.length; i++) {
      if (cobj[i].key === type) {
        count = cobj[i].value
      }
    }
    return count
  }

  const filteredData = sortedData.filter((d) => {
    const createdAtDate = new Date(d.createdAt);
    const fromDate = new Date(from); // Replace with your actual "from" date
    const toDate = new Date(to); // Replace with your actual "to" date
    // Check if the createdAtDate falls within the specified range
    return createdAtDate >= fromDate && createdAtDate <= toDate;
  });

  const searchFilter = sortedData.filter((d) => {
    // Customize this condition based on your search requirements
    return JSON.stringify(d)?.toLowerCase().includes(searchInput.toLowerCase());
  })

  // If both "from" and "to" dates are defined, use filteredData; otherwise, use sortedData
  const finalData = from && to ? filteredData : searchInput.length != 0 ? searchFilter : sortedData;


  useEffect(() => {
    const sorted = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setSortedData(sorted);
  }, [isExpandOpions, from, to, data])


  return (
    <div className='w-full '>
      <div className="header">
        {title}
      </div>
      <div className='cus-search-filter'>
        <IoIosSearch className='search-icon' />
        <input type="text" placeholder='search here' onChange={(e) => setSearchInput(e.target.value)} />
      </div>
      {
        column ? (
          <div className="table-users">
            {/* <div className="header">
              {title}
            </div> */}
            {/* <br/> */}

            <div className='cus-table'>
              <table className='w-full overflow-auto' cellSpacing="0">
                <thead className='table-head'>

                  <tr>
                    {/* {column.map((item, index) => <TableHeadingColumn isExpandOpions={isExpandOpions} setIsExpandOptions={setIsExpandOptions} total={st + fg + vog + pop} data={data} key={index} item={item} cobj={cobj} />)} */}
                    <th>createdAt </th>
                    {/* <th>recipientPhone</th> */}
                    <th style={{ minWidth: "100px", maxWidth: "100px" }}>
                      shopName
                    </th>
                    <th>employeeName</th>
                    {/* <th>manager</th> */}
                    {/* <th>announcedUnAnnounced</th> */}
                    <th>Total 100</th>

                    <th>Quality products {TotalQualityProduct} <input onClick={() => setIsExpandOptions(!isExpandOpions)} type='checkbox' style={{ width: '20px', height: '20px' }} /></th>
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Shelves Temperature  {getCount("shelvesTemperature")}</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Shelves Temperature Remark</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Freshness of Goods {getCount("freshnessOfGoods")}</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Freshness of Goods Remark</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Variety of Goods {getCount("varietyOfGoods")}</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Variety of Goods Remark</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Presentation of Packaging Items {getCount("presentationOfPackagingItems")}</th>}
                    {isExpandOpions && <th style={{ backgroundColor: '#684F31', color: 'white' }}>Presentation of Packaging Items Remark</th>}

                    <th>Service To The Customer {TotalService} <input type="checkbox" style={{ width: '20px', height: '20px' }} onClick={() => setIsExpandService(!isExpandService)} /></th>
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>customerGreeting {getCount("customerGreeting")}</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>customerGreetingRemark</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>knowledgeOfProducts {getCount("knowledgeOfProducts")}</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>knowledgeOfProductsRemark</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>convincingCustomerForPhoneNumbe {getCount("convincingCustomerForPhoneNumber")}r</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>convincingCustomerForPhoneNumberRemark</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>handlingCustomerComplaintsAndInquiries {getCount("handlingCustomerComplaintsAndInquiries")}</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>handlingCustomerComplaintsAndInquiriesRemark</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>cleanlinessOfStore {getCount("cleanlinessOfStore")}</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>cleanlinessOfStoreRemark</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>atmosphereAndDecor {getCount("atmosphereAndDecor")}</th>}
                    {isExpandService && <th style={{ backgroundColor: '#684F31', color: 'white' }}>atmosphereAndDecorRemark</th>}

                    <th>Visibility And Accessibility<br /> of the shop {TotalVisi} <input type='checkbox' style={{ width: '20px', height: '20px' }} onClick={() => setIsExpandVisibility(!isExpandVisibility)} /></th>
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>cleanExteriorSignage {getCount("cleanExteriorSignage")}</th>}
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>cleanExteriorSignageRemark</th>}
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>easeOfAccess {getCount("easeOfAccess")}</th>}
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>easeOfAccessRemark</th>}
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>facadeMaintained {getCount("facadeMaintained")}</th>}
                    {isExpandVisibility && <th style={{ backgroundColor: '#684F31', color: 'white' }}>facadeMaintainedRemark</th>}

                    <th>Knowledge of Trading area <br />and CRM Activities {TotalKnow} <input type='checkbox' style={{ width: '20px', height: '20px' }} onClick={() => setIsExpandKnowledge(!isExpandKnowledge)} /></th>
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>understandingOfLocalMarket {getCount("understandingOfLocalMarket")}</th>}
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>understandingOfLocalMarketRemark</th>}
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>crmActivities {getCount("crmActivities")}</th>}
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>crmActivitiesRemark</th>}
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>competitorAwareness {getCount("competitorAwareness")}</th>}
                    {isExpandKnowledge && <th style={{ backgroundColor: '#684F31', color: 'white' }}>competitorAwarenessRemark</th>}

                    <th>Marketing Collateral Management <br /> and Promotions {TotalMark} <input type='checkbox' style={{ width: '20px', height: '20px' }} onClick={() => setIsExpandMarketing(!isExpandMarketing)} /></th>
                    {isExpandMarketing && <th style={{ backgroundColor: '#684F31', color: 'white' }}>executionOfPromotionalActivities {getCount("executionOfPromotionalActivities")}</th>}
                    {isExpandMarketing && <th style={{ backgroundColor: '#684F31', color: 'white' }}>executionOfPromotionalActivitiesRemark</th>}

                    <th>Training And Sales<br /> Building Activities {Totaltrain} <input type='checkbox' style={{ width: '20px', height: '20px' }} onClick={() => setIsExpandTraining(!isExpandTraining)} /></th>
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>strategiesToUpsellAndCrossSell {getCount("strategiesToUpsellAndCrossSell")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>strategiesToUpsellAndCrossSellRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>initiativeAtLocalLevel {getCount("initiativeAtLocalLevel")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>initiativeAtLocalLevelRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>kocFiled {getCount("kocFiled")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>kocFiledRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>minimizationOfWastageProducts {getCount("minimizationOfWastageProducts")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>minimizationOfWastageProductsRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>optimizationOfProductMix {getCount("optimizationOfProductMix")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>optimizationOfProductMixRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>managementOfOnlineSales {getCount("managementOfOnlineSales")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>managementOfOnlineSalesRemark</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>adherenceToOperationalStandards {getCount("adherenceToOperationalStandards")}</th>}
                    {isExpandTraining && <th style={{ backgroundColor: '#684F31', color: 'white' }}>adherenceToOperationalStandardsRemark</th>}
                    <th>Strength</th>
                    <th>Opportunites</th>
                    <th>Actionable</th>
                    {/* <th>updatedAt</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    finalData.map((d, i) => {
                      return (
                        <tr key={i}>
                          <td>{d.createdAt.split("T")[0]}</td>
                          {/* <td>{d.recipientPhone}</td> */}
                          <td>
                            {d.shopName}</td>
                          <td style={{ minWidth: "80px", maxWidth: "80px" }}>
                            {d?.employeeDetails[0]?.employeeName}
                          </td>
                          {/* <td>{d.manager}</td> */}
                          {/* <td>{d.announcedUnAnnounced}</td> */}
                          <td>{Number(d.customerGreeting == "N/A" ? 0 : d.customerGreeting) + Number(d.knowledgeOfProducts == "N/A" ? 0 : d.knowledgeOfProducts) + Number(d.convincingCustomerForPhoneNumber == "N/A" ? 0 : d.convincingCustomerForPhoneNumber) + Number(d.handlingCustomerComplaintsAndInquiries == "N/A" ? 0 : d.handlingCustomerComplaintsAndInquiries) + Number(d.cleanlinessOfStore == "N/A" ? 0 : d.cleanlinessOfStore) + Number(d.atmosphereAndDecor == "N/A" ? 0 : d.atmosphereAndDecor) + Number(d.cleanExteriorSignage == "N/A" ? 0 : d.cleanExteriorSignage) + Number(d.easeOfAccess == "N/A" ? 0 : d.easeOfAccess) + Number(d.facadeMaintained == "N/A" ? 0 : d.facadeMaintained) + Number(d.understandingOfLocalMarket == "N/A" ? 0 : d.understandingOfLocalMarket) + Number(d.crmActivities == "N/A" ? 0 : d.crmActivities) + Number(d.competitorAwareness == "N/A" ? 0 : d.competitorAwareness) + Number(d.executionOfPromotionalActivities == "N/A" ? 0 : d.executionOfPromotionalActivities) + Number(d.strategiesToUpsellAndCrossSell == "N/A" ? 0 : d.strategiesToUpsellAndCrossSell) + Number(d.initiativeAtLocalLevel == "N/A" ? 0 : d.initiativeAtLocalLevel) + Number(d.kocFiled == "N/A" ? 0 : d.kocFiled) + Number(d.minimizationOfWastageProducts == "N/A" ? 0 : d.minimizationOfWastageProducts) + Number(d.optimizationOfProductMix == "N/A" ? 0 : d.optimizationOfProductMix) + Number(d.managementOfOnlineSales == "N/A" ? 0 : d.managementOfOnlineSales) + Number(d.adherenceToOperationalStandards == "N/A" ? 0 : d.adherenceToOperationalStandards)}</td>

                          <td>{QualityProduct(d.shelvesTemperature == "N/A" ? 0 : d.shelvesTemperature, d.freshnessOfGoods == "N/A" ? 0 : d.freshnessOfGoods, d.varietyOfGoods == 'N/A' ? 0 : d.varietyOfGoods, d.presentationOfPackagingItems == "N/A" ? 0 : d.presentationOfPackagingItems)}</td>
                          {isExpandOpions && <td style={{ color: d.shelvesTemperature == "0" ? 'white' : '', backgroundColor: d.shelvesTemperature == "0" ? 'red' : "" }}> <a href={d.shelvesTemperature == "0" ? d.shelvesTemperatureLink : ""} target='_blank' > {d.shelvesTemperature == "N/A" ? 0 : d.shelvesTemperature}</a></td>}
                          {isExpandOpions && <td >{d.shelvesTemperatureRemark}</td>}
                          {isExpandOpions && <td style={{ color: d.varietyOfGoods == "0" ? 'white' : '', backgroundColor: d.varietyOfGoods == "0" ? 'red' : "" }}><a href={d.varietyOfGoods == "0" ? d.varietyOfGoodsLink : ""} target='_blank' > {d.varietyOfGoods}</a></td>}
                          {isExpandOpions && <td >{d.varietyOfGoodsRemark}</td>}
                          {isExpandOpions && <td style={{ color: d.freshnessOfGoods == "0" ? 'white' : '', backgroundColor: d.freshnessOfGoods == "0" ? 'red' : "" }}><a href={d.freshnessOfGoods == "0" ? d.freshnessOfGoodsLink : ""} target='_blank' > {d.freshnessOfGoods}</a></td>}
                          {isExpandOpions && <td >{d.freshnessOfGoodsRemark}</td>}
                          {isExpandOpions && <td style={{ color: d.freshnessOfGoods == "0" ? 'white' : '', backgroundColor: d.freshnessOfGoods == "0" ? 'red' : "" }}><a href={d.presentationOfPackagingItemsfreshnessOfGoods == "0" ? d.presentationOfPackagingItemsfreshnessOfGoodsLink : ""} target='_blank' >{d.presentationOfPackagingItemsfreshnessOfGoods}</a></td>}
                          {isExpandOpions && <td style={{ color: d.presentationOfPackagingItemsRemark == "0" ? 'white' : '', backgroundColor: d.presentationOfPackagingItemsRemark == "0" ? 'red' : "" }}>{d.presentationOfPackagingItemsRemark}</td>}

                          <td>{Service(d.customerGreeting == "N/A" ? 0 : d.customerGreeting, d.knowledgeOfProducts == "N/A" ? 0 : d.knowledgeOfProducts, d.convincingCustomerForPhoneNumber == "N/A" ? 0 : d.convincingCustomerForPhoneNumber, d.handlingCustomerComplaintsAndInquiries == "N/A" ? 0 : d.handlingCustomerComplaintsAndInquiries, d.cleanlinessOfStore == "N/A" ? 0 : d.cleanlinessOfStore, d.atmosphereAndDecor == "N/A" ? 0 : d.atmosphereAndDecor)}</td>
                          {isExpandService && <td style={{ color: d.customerGreeting == "0" ? 'white' : '', backgroundColor: d.customerGreeting == "0" ? 'red' : "" }}><a href={d.customerGreeting == "0" ? d.customerGreetingLink : ""} target='_blank' >{d.customerGreeting}</a></td>}
                          {isExpandService && <td>{d.customerGreetingRemark}</td>}
                          {isExpandService && <td style={{ color: d.knowledgeOfProducts == "0" ? 'white' : '', backgroundColor: d.knowledgeOfProducts == "0" ? 'red' : "" }}><a href={d.knowledgeOfProducts == "0" ? d.knowledgeOfProductsLink : ""} target='_blank' >{d.knowledgeOfProducts}</a></td>}
                          {isExpandService && <td>{d.knowledgeOfProductsRemark}</td>}
                          {isExpandService && <td style={{ color: d.convincingCustomerForPhoneNumber == "0" ? 'white' : '', backgroundColor: d.convincingCustomerForPhoneNumber == "0" ? 'red' : "" }}><a href={d.convincingCustomerForPhoneNumber == "0" ? d.convincingCustomerForPhoneNumberLink : ""} target='_blank' >{d.convincingCustomerForPhoneNumber}</a></td>}
                          {isExpandService && <td>{d.convincingCustomerForPhoneNumberRemark}</td>}
                          {isExpandService && <td style={{ color: d.handlingCustomerComplaintsAndInquiries == "0" ? 'white' : '', backgroundColor: d.handlingCustomerComplaintsAndInquiries == "0" ? 'red' : "" }}><a href={d.handlingCustomerComplaintsAndInquiries == "0" ? d.handlingCustomerComplaintsAndInquiriesLink : ""} target='_blank' >{d.handlingCustomerComplaintsAndInquiries}</a></td>}
                          {isExpandService && <td>{d.handlingCustomerComplaintsAndInquiriesRemark}</td>}
                          {isExpandService && <td style={{ color: d.cleanlinessOfStore == "0" ? 'white' : '', backgroundColor: d.cleanlinessOfStore == "0" ? 'red' : "" }}><a href={d.cleanlinessOfStore == "0" ? d.cleanlinessOfStoreLink : ""} target='_blank' >{d.cleanlinessOfStore}</a></td>}
                          {isExpandService && <td>{d.cleanlinessOfStoreRemark}</td>}
                          {isExpandService && <td style={{ color: d.atmosphereAndDecor == "0" ? 'white' : '', backgroundColor: d.atmosphereAndDecor == "0" ? 'red' : "" }}><a href={d.atmosphereAndDecor == "0" ? d.atmosphereAndDecorLink : ""} target='_blank' >{d.atmosphereAndDecor}</a></td>}
                          {isExpandService && <td>{d.atmosphereAndDecorRemark}</td>}

                          <td>{Visibility(d.cleanExteriorSignage == "N/A" ? 0 : d.cleanExteriorSignage, d.easeOfAccess == "N/A" ? 0 : d.easeOfAccess, d.facadeMaintained == "N/A" ? 0 : d.facadeMaintained)}</td>
                          {isExpandVisibility && <td style={{ color: d.cleanExteriorSignage == "0" ? 'white' : '', backgroundColor: d.cleanExteriorSignage == "0" ? 'red' : "" }}><a href={d.cleanExteriorSignage == "0" ? d.cleanExteriorSignageLink : ""} target='_blank' >{d.cleanExteriorSignage}</a></td>}
                          {isExpandVisibility && <td>{d.cleanExteriorSignageRemark}</td>}
                          {isExpandVisibility && <td style={{ color: d.easeOfAccess == "0" ? 'white' : '', backgroundColor: d.easeOfAccess == "0" ? 'red' : "" }}><a href={d.easeOfAccess == "0" ? d.easeOfAccessLink : ""} target='_blank' >{d.easeOfAccess}</a></td>}
                          {isExpandVisibility && <td>{d.easeOfAccessRemark}</td>}
                          {isExpandVisibility && <td style={{ color: d.facadeMaintained == "0" ? 'white' : '', backgroundColor: d.facadeMaintained == "0" ? 'red' : "" }}><a href={d.facadeMaintained == "0" ? d.facadeMaintainedLink : ""} target='_blank' >{d.facadeMaintained}</a></td>}
                          {isExpandVisibility && <td>{d.facadeMaintainedRemark}</td>}

                          <td>{Knowledge(d.understandingOfLocalMarket == "N/A" ? 0 : d.understandingOfLocalMarket, d.crmActivities == "N/A" ? 0 : d.crmActivities, d.competitorAwareness == "N/A" ? 0 : d.competitorAwareness)}</td>
                          {isExpandKnowledge && <td style={{ color: d.understandingOfLocalMarket == "0" ? 'white' : '', backgroundColor: d.understandingOfLocalMarket == "0" ? 'red' : "" }}><a href={d.understandingOfLocalMarket == "0" ? d.understandingOfLocalMarketLink : ""} target='_blank' >{d.understandingOfLocalMarket}</a></td>}
                          {isExpandKnowledge && <td>{d.understandingOfLocalMarketRemark}</td>}
                          {isExpandKnowledge && <td style={{ color: d.crmActivities == "0" ? 'white' : '', backgroundColor: d.crmActivities == "0" ? 'red' : "" }}><a href={d.crmActivities == "0" ? d.crmActivitiesLink : ""} target='_blank' >{d.crmActivities}</a></td>}
                          {isExpandKnowledge && <td>{d.crmActivitiesRemark}</td>}
                          {isExpandKnowledge && <td style={{ color: d.competitorAwareness == "0" ? 'white' : '', backgroundColor: d.competitorAwareness == "0" ? 'red' : "" }}><a href={d.competitorAwareness == "0" ? d.competitorAwarenessLink : ""} target='_blank' >{d.competitorAwareness}</a></td>}
                          {isExpandKnowledge && <td>{d.competitorAwarenessRemark}</td>}

                          <td>{Marketing(d.executionOfPromotionalActivities == "N/A" ? 0 : d.executionOfPromotionalActivities)}</td>
                          {isExpandMarketing && <td style={{ color: d.executionOfPromotionalActivities == "0" ? 'white' : '', backgroundColor: d.executionOfPromotionalActivities == "0" ? 'red' : "" }}><a href={d.executionOfPromotionalActivities == "0" ? d.executionOfPromotionalActivitiesLink : ""} target='_blank' >{d.executionOfPromotionalActivities}</a></td>}
                          {isExpandMarketing && <td>{d.executionOfPromotionalActivitiesRemark}</td>}

                          <td>{Marketing(d.strategiesToUpsellAndCrossSell == "N/A" ? 0 : d.strategiesToUpsellAndCrossSell, d.initiativeAtLocalLevel == "N/A" ? 0 : d.initiativeAtLocalLevel, d.kocFiled == "N/A" ? 0 : d.kocFiled, d.minimizationOfWastageProducts == "N/A" ? 0 : d.minimizationOfWastageProducts, d.optimizationOfProductMix == "N/A" ? 0 : d.optimizationOfProductMix, d.managementOfOnlineSales == "N/A" ? 0 : d.managementOfOnlineSales, d.adherenceToOperationalStandards == "N/A" ? 0 : d.adherenceToOperationalStandards)}</td>
                          {isExpandTraining && <td style={{ color: d.strategiesToUpsellAndCrossSell == "0" ? 'white' : '', backgroundColor: d.strategiesToUpsellAndCrossSell == "0" ? 'red' : "" }}><a href={d.strategiesToUpsellAndCrossSell == "0" ? d.strategiesToUpsellAndCrossSellLink : ""} target='_blank' >{d.strategiesToUpsellAndCrossSell}</a></td>}
                          {isExpandTraining && <td>{d.strategiesToUpsellAndCrossSellRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.initiativeAtLocalLevel == "0" ? 'white' : '', backgroundColor: d.initiativeAtLocalLevel == "0" ? 'red' : "" }}><a href={d.initiativeAtLocalLevel == "0" ? d.initiativeAtLocalLevelLink : ""} target='_blank' >{d.initiativeAtLocalLevel}</a></td>}
                          {isExpandTraining && <td>{d.initiativeAtLocalLevelRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.kocFiled == "0" ? 'white' : '', backgroundColor: d.kocFiled == "0" ? 'red' : "" }}><a href={d.kocFiled == "0" ? d.kocFiledLink : ""} target='_blank' >{d.kocFiled}</a></td>}
                          {isExpandTraining && <td>{d.kocFiledRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.minimizationOfWastageProducts == "0" ? 'white' : '', backgroundColor: d.minimizationOfWastageProducts == "0" ? 'red' : "" }}><a href={d.minimizationOfWastageProducts == "0" ? d.minimizationOfWastageProductsLink : ""} target='_blank' >{d.minimizationOfWastageProducts}</a></td>}
                          {isExpandTraining && <td>{d.minimizationOfWastageProductsRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.optimizationOfProductMix == "0" ? 'white' : '', backgroundColor: d.optimizationOfProductMix == "0" ? 'red' : "" }}><a href={d.optimizationOfProductMix == "0" ? d.optimizationOfProductMixLink : ""} target='_blank' >{d.optimizationOfProductMix}</a></td>}
                          {isExpandTraining && <td>{d.optimizationOfProductMixRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.managementOfOnlineSales == "0" ? 'white' : '', backgroundColor: d.managementOfOnlineSales == "0" ? 'red' : "" }}><a href={d.managementOfOnlineSales == "0" ? d.managementOfOnlineSalesLink : ""} target='_blank' >{d.managementOfOnlineSales}</a></td>}
                          {isExpandTraining && <td>{d.managementOfOnlineSalesRemark}</td>}
                          {isExpandTraining && <td style={{ color: d.adherenceToOperationalStandards == "0" ? 'white' : '', backgroundColor: d.adherenceToOperationalStandards == "0" ? 'red' : "" }}><a href={d.adherenceToOperationalStandards == "0" ? d.adherenceToOperationalStandardsLink : ""} target='_blank' >{d.adherenceToOperationalStandards}</a></td>}
                          {isExpandTraining && <td>{d.adherenceToOperationalStandardsRemark}</td>}
                          {/* <td>{d.updatedAt.split("T")[0]}</td> */}
                          {/* <td>{d.managementOfOnlineSalesRemark}</td> */}
                          <td>
                            <textarea>
                              {d.strength}
                            </textarea>
                          </td>
                          <td>
                            <textarea>
                              {d.opportunities}
                            </textarea></td>
                          <td>
                            <textarea>

                              {d.actionable}
                            </textarea></td>

                        </tr>

                      )
                    })

                  }

                </tbody>
              </table>
            </div>
          </div>

        ) : (
          <SkeletonLoading />
        )
      }
    </div>
  )
}

const TableHeadingColumn = ({ isExpandOpions, setIsExpandOptions, item, data, cobj, total }) => {
  useEffect(() => {
  }, [isExpandOpions])



  return (
    <th>{item.heading} -  {item.heading == 'Quality Products' ? total : cobj[item?.value]} {item.heading == 'Quality Products' && <input onClick={() => setIsExpandOptions(!isExpandOpions)} type='checkbox' style={{ width: '20px', height: '20px' }} />} {/* {data.length} */}</th>
  )
}



export default MvrTable