
export const useGetCount = (data) => {
    console?.log(data, "datadata")
    let st = 0
    let fg = 0
    let vog = 0
    let pop = 0
    let cg = 0
    let kop = 0
    let ccfpn = 0
    let hccai = 0
    let cos = 0
    let aad = 0
    let ces = 0
    let eoa = 0
    let fm = 0
    let uolm = 0
    let ca = 0
    let cta = 0
    let eopa = 0
    let stuc = 0
    let iall = 0
    let kocf = 0
    let mowp = 0
    let oopm = 0
    let moos = 0
    let atos = 0
    let cobj = {}

    data?.forEach(e => {
        // if (e?.shelvesTemperature != "N/A") st = st + Number(e?.shelvesTemperature)
        if (Number(e?.shelvesTemperature) == 0) st++
        if (Number(e?.freshnessOfGoods) == 0) fg++
        if (Number(e?.varietyOfGoods) == 0) vog++
        if (Number(e?.presentationOfPackagingItems) == 0) pop++
        if (Number(e?.customerGreeting) == 0) cg++
        if (Number(e?.knowledgeOfProducts) == 0) kop++
        if (Number(e?.convincingCustomerForPhoneNumber) == 0) ccfpn++
        if (Number(e?.handlingCustomerComplaintsAndInquiries) == 0) hccai++
        if (Number(e?.cleanlinessOfStore) == 0) cos++
        if (Number(e?.atmosphereAndDecor) == 0) aad++
        if (Number(e?.cleanExteriorSignage) == 0) ces++
        if (Number(e?.easeOfAccess) == 0) eoa++
        if (Number(e?.facadeMaintained) == 0) fm++
        if (Number(e?.understandingOfLocalMarket) == 0) uolm++
        if (Number(e?.crmActivities) == 0) ca++
        if (Number(e?.competitorAwareness) == 0) cta++
        if (Number(e?.executionOfPromotionalActivities) == 0) eopa++
        if (Number(e?.strategiesToUpsellAndCrossSell) == 0) stuc++
        if (Number(e?.initiativeAtLocalLevel) == 0) iall++
        if (Number(e?.kocFiled) == 0) kocf++
        if (Number(e?.minimizationOfWastageProducts) == 0) mowp++
        if (Number(e?.optimizationOfProductMix) == 0) oopm++
        if (Number(e?.managementOfOnlineSales) == 0) moos++
        if (Number(e?.adherenceToOperationalStandards) == 0) atos++
    });

    cobj = [
        { key: "shelvesTemperature", value: st, },
        { key: "freshnessOfGoods", value: fg, },
        { key: "varietyOfGoods", value: vog, },
        { key: "presentationOfPackagingItems", value: pop, },
        { key: "customerGreeting", value: cg, },
        { key: "knowledgeOfProducts", value: kop, },
        { key: "convincingCustomerForPhoneNumber", value: ccfpn, },
        { key: "handlingCustomerComplaintsAndInquiries", value: hccai, },
        { key: "cleanlinessOfStore", value: cos, },
        { key: "atmosphereAndDecor", value: aad, },
        { key: "cleanExteriorSignage", value: ces, },
        { key: "easeOfAccess", value: eoa, },
        { key: "facadeMaintained", value: fm, },
        { key: "understandingOfLocalMarket", value: uolm, },
        { key: "crmActivities", value: ca, },
        { key: "competitorAwareness", value: cta, },
        { key: "executionOfPromotionalActivities", value: eopa, },
        { key: "strategiesToUpsellAndCrossSell", value: stuc, },
        { key: "initiativeAtLocalLevel", value: iall, },
        { key: "kocFiled", value: kocf, },
        { key: "minimizationOfWastageProducts", value: mowp, },
        { key: "optimizationOfProductMix", value: oopm, },
        { key: "managementOfOnlineSales", value: moos, },
        { key: "adherenceToOperationalStandards", value: atos, },
    ]

    let totalCount = 0
    cobj.forEach(e => {
        totalCount = e.value + totalCount
    })

    return { cobj,totalCount }
}