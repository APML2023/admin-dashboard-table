
export const useGetCount = ( data ) => {
console?.log(data,"datadata")
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
        if (Number(e?.shelvesTemperature)===0 ) st ++
        if (e?.freshnessOfGoods != "N/A") fg = fg + Number(e?.freshnessOfGoods)
        if (e?.varietyOfGoods != "N/A") vog = vog + Number(e?.varietyOfGoods)
        if (e?.presentationOfPackagingItems != "N/A") pop = pop + Number(e?.presentationOfPackagingItems)
        if (e?.customerGreeting != "N/A") cg = cg + Number(e?.customerGreeting)
        if (e?.knowledgeOfProducts != "N/A") kop = kop + Number(e?.knowledgeOfProducts)
        if (e?.convincingCustomerForPhoneNumber != "N/A") ccfpn = ccfpn + Number(e?.convincingCustomerForPhoneNumber)
        if (e?.handlingCustomerComplaintsAndInquiries != "N/A") hccai = hccai + Number(e?.handlingCustomerComplaintsAndInquiries)
        if (e?.cleanlinessOfStore != "N/A") cos = cos + Number(e?.cleanlinessOfStore)
        if (e?.atmosphereAndDecor != "N/A") aad = aad + Number(e?.atmosphereAndDecor)
        if (e?.cleanExteriorSignage != "N/A") ces = ces + Number(e?.cleanExteriorSignage)
        if (e?.easeOfAccess != "N/A") eoa = eoa + Number(e?.easeOfAccess)
        if (e?.facadeMaintained != "N/A") fm = fm + Number(e?.facadeMaintained)
        if (e?.understandingOfLocalMarket != "N/A") uolm = uolm + Number(e?.understandingOfLocalMarket)
        if (e?.crmActivities != "N/A") ca = ca + Number(e?.crmActivities)
        if (e?.competitorAwareness != "N/A") cta = cta + Number(e?.competitorAwareness)
        if (e?.executionOfPromotionalActivities != "N/A") eopa = eopa + Number(e?.executionOfPromotionalActivities)
        if (e?.strategiesToUpsellAndCrossSell != "N/A") stuc = stuc + Number(e?.strategiesToUpsellAndCrossSell)
        if (e?.initiativeAtLocalLevel != "N/A") iall = iall + Number(e?.initiativeAtLocalLevel)
        if (e?.kocFiled != "N/A") kocf = kocf + Number(e?.kocFiled)
        if (e?.minimizationOfWastageProducts != "N/A") mowp = mowp + Number(e?.minimizationOfWastageProducts)
        if (e?.optimizationOfProductMix != "N/A") oopm = oopm + Number(e?.optimizationOfProductMix)
        if (e?.managementOfOnlineSales != "N/A") moos = moos + Number(e?.managementOfOnlineSales)
        if (e?.adherenceToOperationalStandards != "N/A") atos = atos + Number(e?.adherenceToOperationalStandards)
    });

    cobj = {
        "shelvesTemperature": st,
        "freshnessOfGoods": fg,
        "varietyOfGoods": vog,
        "presentationOfPackagingItems": pop,
        "customerGreeting": cg,
        "knowledgeOfProducts": kop,
        "convincingCustomerForPhoneNumber": ccfpn,
        "handlingCustomerComplaintsAndInquiries": hccai,
        "cleanlinessOfStore": cos,
        "atmosphereAndDecor": aad,
        "cleanExteriorSignage": ces,
        "easeOfAccess": eoa,
        "facadeMaintained": fm,
        "understandingOfLocalMarket": uolm,
        "crmActivities": ca,
        "competitorAwareness": cta,
        "executionOfPromotionalActivities": eopa,
        "strategiesToUpsellAndCrossSell": stuc,
        "initiativeAtLocalLevel": iall,
        "kocFiled": kocf,
        "minimizationOfWastageProducts": mowp,
        "optimizationOfProductMix": oopm,
        "managementOfOnlineSales": moos,
        "adherenceToOperationalStandards": atos,
    }

    return {cobj}
}