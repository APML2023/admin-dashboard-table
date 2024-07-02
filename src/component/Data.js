export const MVRS = [
      { heading: "Created At", value: 'createdAt' },
    { heading: "Recipient Phone", value: "recipientPhone" },
    { heading: "Shop Name", value: "shopName" },
    { heading: "Name", value: "employeeDetails[0].employeeName" },
    { heading: "Manager", value: "manager" },
    { heading: "Announced/Unannounced", value: "announcedUnAnnounced" },
    { heading: "Quality Products", value: "Quality Products" },
    // { heading: "Shelves Temperature", value: "shelvesTemperature" },
    // { heading: "Shelves Temperature Link", value: "shelvesTemperatureLink" },
    { heading: "Shelves Temperature Remark", value: "shelvesTemperatureRemark" },
    // { heading: "Freshness of Goods", value: "freshnessOfGoods" },
    { heading: "Freshness of Goods Remark", value: "freshnessOfGoodsRemark" },
    // { heading: "Variety of Goods", value: "varietyOfGoods" },
    { heading: "Variety of Goods Remark", value: "varietyOfGoodsRemark" },
    // { heading: "Presentation of Packaging Items", value: "presentationOfPackagingItems" },
    { heading: "Presentation of Packaging Items Remark", value: "presentationOfPackagingItemsRemark" },
    { heading: "Customer Greeting", value: "customerGreeting" },
    { heading: "Customer Greeting Remark", value: "customerGreetingRemark" },
    { heading: "Knowledge of Products", value: "knowledgeOfProducts" },
    { heading: "Knowledge of Products Remark", value: "knowledgeOfProductsRemark" },
    { heading: "Convincing Customer for Phone Number", value: "convincingCustomerForPhoneNumber" },
    // { heading: "Convincing Customer for Phone Number Link", value: "convincingCustomerForPhoneNumberLink" },
    { heading: "Convincing Customer for Phone Number Remark", value: "convincingCustomerForPhoneNumberRemark" },
    { heading: "Handling Customer Complaints and Inquiries", value: "handlingCustomerComplaintsAndInquiries" },
    { heading: "Handling Customer Complaints and Inquiries Remark", value: "handlingCustomerComplaintsAndInquiriesRemark" },
    { heading: "Cleanliness of Store", value: "cleanlinessOfStore" },
    { heading: "Cleanliness of Store Remark", value: "cleanlinessOfStoreRemark" },
    { heading: "Atmosphere and Decor", value: "atmosphereAndDecor" },
    { heading: "Atmosphere and Decor Remark", value: "atmosphereAndDecorRemark" },
    { heading: "Clean Exterior Signage", value: "cleanExteriorSignage" },
    { heading: "Clean Exterior Signage Remark", value: "cleanExteriorSignageRemark" },
    { heading: "Ease of Access", value: "easeOfAccess" },
    { heading: "Ease of Access Remark", value: "easeOfAccessRemark" },
    { heading: "Facade Maintained", value: "facadeMaintained" },
    { heading: "Facade Maintained Remark", value: "facadeMaintainedRemark" },
    { heading: "Understanding of Local Market", value: "understandingOfLocalMarket" },
    // { heading: "Understanding of Local Market Link", value: "understandingOfLocalMarketLink" },
    { heading: "Understanding of Local Market Remark", value: "understandingOfLocalMarketRemark" },
    { heading: "CRM Activities", value: "crmActivities" },
    { heading: "CRM Activities Remark", value: "crmActivitiesRemark" },
    { heading: "Competitor Awareness", value: "competitorAwareness" },
    { heading: "Competitor Awareness Remark", value: "competitorAwarenessRemark" },
    { heading: "Execution of Promotional Activities", value: "executionOfPromotionalActivities" },
    { heading: "Execution of Promotional Activities Remark", value: "executionOfPromotionalActivitiesRemark" },
    { heading: "Strategies to Upsell and Cross-Sell", value: "strategiesToUpsellAndCrossSell" },
    { heading: "Strategies to Upsell and Cross-Sell Remark", value: "strategiesToUpsellAndCrossSellRemark" },
    { heading: "Initiative at Local Level", value: "initiativeAtLocalLevel" },
    { heading: "Initiative at Local Level Remark", value: "initiativeAtLocalLevelRemark" },
    { heading: "KOC Filed", value: "kocFiled" },
    // { heading: "KOC Filed Link", value: "kocFiledLink" },
    { heading: "KOC Filed Remark", value: "kocFiledRemark" },
    { heading: "Minimization of Wastage Products", value: "minimizationOfWastageProducts" },
    { heading: "Minimization of Wastage Products Remark", value: "minimizationOfWastageProductsRemark" },
    { heading: "Optimization of Product Mix", value: "optimizationOfProductMix" },
    { heading: "Optimization of Product Mix Remark", value: "optimizationOfProductMixRemark" },
    { heading: "Management of Online Sales", value: "managementOfOnlineSales" },
    { heading: "Management of Online Sales Remark", value: "managementOfOnlineSalesRemark" },
    { heading: "Adherence to Operational Standards", value: "adherenceToOperationalStandards" },
    { heading: "Adherence to Operational Standards Remark", value: "adherenceToOperationalStandardsRemark" },
    { heading: "Updated At", value: "updatedAt" }
  ];


  export const  auditcolumn = [

    { heading: "Shop Name", value: "shopName" },
    { heading: "No of audit", value: "count" },
    { heading: "No of Days", value: "days" },
 
  ] 
export const MVRSFilter = [
  {
    // name: "Phone", 
    //  key: "recipientPhone",
    name: "Name", 
     key: "['employeeDetails']['employeeName']",
     val: null,
     type: "number"
  },
  {
    name: "Shop", 
    key: "shopName",
    val: null,
    type: "string"
  },
  {
    name: "From", 
    key: "createdAt",
    val: null,
    type: "string"
  },
  {
    name: "To", 
    key: "updatedAt",
    val: null,
    type: "string"
  }

  // {
  //   name: "From",
  //   key: "createdAt",
  //   val: null,
  //   type: "number"
  // },
]

export const KOCS = [
    { heading: "Full Form of BOE and LSM", value: "fullFormOfBoeandLSM" },
    { heading: "Impact of BOE and LSM", value: "impactOfBoeAndLsm" },
    { heading: "Accountable of BOE and LSM", value: "accountableOfBoeAndLsm" },
    { heading: "Ideal Percentage of BOE in Sales", value: "idealPercentageOfBoeInSales" },
    { heading: "Purpose of Doing BOE", value: "purposeOfDoingBoe" },
    { heading: "Requirements of Event Execution", value: "requirementsOfEventExecution" },
    { heading: "Seven Levels of LSM", value: "sevenLevelsOfLsm" },
    { heading: "Commandments of Customer Service", value: "commandmentsOfCustomerService" },
    { heading: "Script for Community Approach", value: "scriptForCommunityApproach" },
    { heading: "Grooming", value: "grooming" },
    { heading: "LSM Calendar", value: "lsmCalender" },
    { heading: "Fliers", value: "fliers" },
    { heading: "Corporate Brochure", value: "corporateBrochure" },
    { heading: "Corporate Database", value: "corporateDatabase" },
    { heading: "Contact Person", value: "contactPerson" },
    { heading: "Activity Execution", value: "activityExecution" },
    { heading: "Store Kundli", value: "storeKundli" },
    { heading: "Trainee Name", value: "traineeName" },
    { heading: "Branch Name", value: "branchName" },
    { heading: "Created At", value: "createdAt" },
    { heading: "Updated At", value: "updatedAt" }
  ]

export const KOCSFilter = [
  {
    name: "Trainee", 
    key: "traineeName",
    val: null,
    type: "string"
  },
  {
    name: "Shop", 
    key: "shopName",
    val: null,
    type: "string"
  },
  {
    name: "From", 
    key: "createdAt",
    val: null,
    type: "string"
  },
  {
    name: "To", 
    key: "updatedAt",
    val: null,
    type: "string"
  }
]

  export const HSOS = [
    { heading: "Trainee Name", value: "traineeName" },
    { heading: "Grooming", value: "grooming" },
    { heading: "Stocked", value: "stocked" },
    { heading: "Equipments", value: "equipments" },
    { heading: "To Do", value: "todo" },
    { heading: "Plan for Day", value: "planforday" },
    { heading: "Clean Hands", value: "cleanhands" },
    { heading: "Chemicals", value: "chemicals" },
    { heading: "Lifting Boxes", value: "liftingboxes" },
    { heading: "Wet Sign", value: "wetsign" },
    { heading: "Mop Process", value: "mopprocess" },
    { heading: "QA1", value: "qa1" },
    { heading: "QA2", value: "qa2" },
    { heading: "QA3", value: "qa3" },
    { heading: "QA4", value: "qa4" },
    { heading: "QA5", value: "qa5" },
    { heading: "QA6", value: "qa6" },
    { heading: "QA7", value: "qa7" },
    { heading: "QA8", value: "qa8" },
    { heading: "QA9", value: "qa9" },
    { heading: "QA10", value: "qa10" },
    { heading: "QA11", value: "qa11" },
    { heading: "QA12", value: "qa12" },
    { heading: "QA13", value: "qa13" },
    { heading: "Created At", value: "createdAt" },
    { heading: "Updated At", value: "updatedAt" }
  ]

export const HSOSFilter = [
  {
    name: "Trainee", 
    key: "traineeName",
    val: null,
    type: "string"
  },
  
  {
    name: "Shop", 
    key: "shopName",
    val: null,
    type: "string"
  },
  {
    name: "From", 
    key: "createdAt",
    val: null,
    type: "string"
  },
  {
    name: "To", 
    key: "updatedAt",
    val: null,
    type: "string"
  }
]

  export const HOCS = [
    { heading: "Define Clean and Sanitize", value: "defineCleanAndSanitize" },
    { heading: "Dos and Don'ts Handling Trash", value: "dosAndDontsHandlingTrash" },
    { heading: "What to Do When Product Expired", value: "whatToDoWhenProductExpired" },
    { heading: "General Signs of Damaged Product", value: "generalSignsOfDamagedProduct" },
    { heading: "Why Use Hot Water to Mop Floor", value: "whyUseHotWaterToMopFloor" },
    { heading: "Appearance on Work", value: "appearanceOnWork" },
    { heading: "Sequence of Mopping Floor", value: "sequenceOfMoppingFloor" },
    { heading: "Grooming", value: "grooming" },
    { heading: "To Do", value: "todo" },
    { heading: "Plan for the Day", value: "planForTheDay" },
    { heading: "Hands Clean", value: "handsClean" },
    { heading: "Towel", value: "towel" },
    { heading: "Mopping", value: "mopping" },
    { heading: "Strength", value: "strength" },
    { heading: "Weakness", value: "weakness" },
    { heading: "Clean Surface", value: "cleanSurface" },
    { heading: "Opportunities", value: "opportunities" },
    { heading: "Actionable", value: "actionable" },
    { heading: "Created At", value: "createdAt" },
    { heading: "Updated At", value: "updatedAt" }
  ]

  export const ISSUES = [
    { "heading": "issueDescription", "value": "issueDescription" },
    { "heading": "productCategory", "value": "productCategory" },
    { "heading": "productName", "value": "productName" },
    { "heading": "dateOfPurchase", "value": "dateOfPurchase" },
    { "heading": "timeOfPurchase", "value": "timeOfPurchase" },
    { "heading": "createdBy", "value": "createdBy" },
    { "heading": "issueId", "value": "issueId" },
    { "heading": "type", "value": "type" },
    { "heading": "status", "value": "status",
    "subColumns": [
      { "heading": "phone", "value": "status?.phone" },
      { "heading": "status", "value": "status?.status" },
      { "heading": "Remark", "value": "status?.remark" },
    ],
     },
    { "heading": "Time", "value": "status?.time" },
    // { "heading": "assignees", "value": "assignees" },
    { "heading": "createdAt", "value": "createdAt" },
    { "heading": "updatedAt", "value": "updatedAt" },
    { "heading": "__v", "value": "__v" },
    { "heading": "url", "value": "url" },
    { "heading": "issueType", "value": "issueType" }
  ]
  
  
  export const BranchFilter = [
    {
      name: "Name", 
      key: "weakness",
      val: null,
      type: "string"
    }
  ]
  // export const HOCSFilter = [
  //   {
  //     name: "Weakness", 
  //     key: "weakness",
  //     val: null,
  //     type: "string"
  //   }
  // ]