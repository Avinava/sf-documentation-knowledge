---
title: "AnnualEmssnInventory"
domain: netzero-cloud-dev-guide
topic: annualemssninventory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:58.471Z
estimatedTokens: 7847
keywords: [AnnualEmssnInventory, company's, total, carbon, emissions, particular, year, metric, tonnes, CO2e, tCO2e, sum, scope, greenhouse, gas]
---

# AnnualEmssnInventory

> Represents information about a company's total carbon emissions for a
         particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the
         emissions in scope 1, scope 2, and scope 3 greenhouse gas categories. This object is
      available in API version 54.0 and later.

# AnnualEmssnInventory

Represents information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories. This object is available in API version 54.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| AccountNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the company, it's subsidiary, or it's business unit for which you are doing carbon accounting.This field is a relationship field.Relationship NameAccountNameRelationship TypeLookupRefers ToAccount |
| AllocScope1And2Emssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 and scope 2 emissions allocated to the inventory of an account.This field is a calculated field. |
| AllocScope1EmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions allocated to the inventory of an account. |
| AllocScope1EmssnOverride | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions value entered to override the scope 1 emissions that are allocated to the inventory of an account. |
| AllocScope2EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions allocated to the inventory of an account. |
| AllocScope2EmssnOverride | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions value entered to override the scope 2 emissions that are allocated to the inventory of an account. |
| AllocScope2LocBasedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 location-based emissions allocated to the inventory of an account. |
| AllocScope2MktBasedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 market-based emissions allocated to the inventory of an account. |
| AllocScope3EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions allocated to the inventory of an account. |
| AllocScope3EmssnOverride | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe emissions value entered to override the scope 3 emissions that are allocated to the inventory of an account. |
| EmissionsAllocToFranchCatg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions from child or partner companies that are allocated to GHG category 14 - Franchises category of the parent company account. |
| EmissionsAllocToInvestCatg | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions from child or partner companies that are allocated to GHG Category 15 - Investments category of the parent company account. |
| EnergyUsageCmclBldOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the energy used in commercial buildings. |
| EnergyUsageCommercialBld | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy used in all the commercial buildings that are related to the carbon footprint record or the override value. |
| EnergyUsageDataCenters | TypedoublePropertiesFilter, Nillable, SortDescriptionThe energy used in all the data centers that are related to the carbon footprint record or the override value. |
| EnergyUsageDataCtrOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the energy used in data centers. |
| FinalEmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consolidated emissions of an account that includes allocated emissions of the related account, which could be a child or partner account.This field is a calculated field. |
| FinalScope1EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consolidated scope 1 emissions of an account that includes allocated scope 1 emissions of the related account, which could be a child or partner account.This field is a calculated field. |
| FinalScope2EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consolidated scope 2 emissions of an account that includes allocated scope 2 emissions of the related account, which could be a child or partner account.This field is a calculated field. |
| FinalScope3EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consolidated scope 3 emissions of an account that includes allocated scope 3 emissions of the related account, which could be a child or partner account.This field is a calculated field. |
| FnlScp1And2EmssnInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe consolidated scope 1 and scope 2 emissions of an account that includes allocated scope 1 and scope 2 emissions of the related account, which could be a child or a partner account.This field is a calculated field. |
| IsLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record is locked or not.The default value is false. |
| IsRecordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the annual emissions inventory record and the associated carbon footprint records are locked for editing.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MayEdit | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the record can be edited (true) or not (false).The default value is false. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who owns this record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RenewableEnergyUsagePctCmclBld | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of renewable energy used for the total electricity consumption of all the commercial buildings that are related to the carbon footprint record or the override value. |
| RenewableEnergyUsagePctDataCtr | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of total renewable energy used for the total electricity consumption of all the data centers that are related to the carbon footprint record or the override value. |
| RenewableEnrgyPctCmclBldOvride | TypepercentPropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the commercial buildings renewable energy percentage. |
| RenewableEnrgyPctDataCtrOvride | TypepercentPropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the data centers renewable energy percentage. |
| Scope1EmissionsDataCenters | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from data centers that’s calculated based on the data center emissions in the related carbon footprint record or the override value. |
| Scope1EmissionsFleetVehicles | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from fleet vehicles that’s calculated based on the fleet vehicle emissions in the related carbon footprint record or the override value. |
| Scope1EmissionsPrivateJets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from private jets that’s calculated based on the private jet emissions in the related carbon footprint record or the override value. |
| Scope1EmssnCmclBldOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 1 emissions from commercial buildings. |
| Scope1EmssnCommercialBuildings | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from commercial buildings that’s calculated based on the commercial building emissions in the related carbon footprint record or the override value. |
| Scope1EmssnDataCentersOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 1 emissions from data centers. |
| Scope1EmssnPrivateJetsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 1 emissions from private jets. |
| Scp1EmssnWstGenInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 1 emissions from company's generated waste that’s calculated based on the waste related emissions in the related waste footprint record or the override value. |
| Scp1EmssnWstGenOvrideInTco2e | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value to override the scope 1 emissions from company's generated waste. |
| Scope2EmissionsFleetVehicles | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from fleet vehicles that’s calculated based on the fleet vehicle emissions in the related carbon footprint record or the override value. |
| Scope2EmissionsPrivateJets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from private jets that’s calculated based on the private jets emissions in the related carbon footprint record or the override value. |
| Scope2EmissionsType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of scope 2 emissions.Possible values are:LocationBased—Location-BasedMarketBased—Market-BasedThe default value is LocationBased. |
| Scope2LocBasedEmssnCmclBld | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from commercial buildings that’s calculated based on the location-based commercial buildings emissions in the related carbon footprint record or the override value. |
| Scope2LocBasedEmssnDataCtr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from data centers that’s calculated based on the location-based data center emissions in the related carbon footprint record or the override value. |
| Scope2MarketBasedEmssnCmclBld | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from commercial buildings that’s calculated based on the market-based commercial building emissions in the related carbon footprint record or the override value. |
| Scope2MarketBasedEmssnDataCtr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 2 emissions from data centers that’s calculated based on the market-based data center emissions in the related carbon footprint record or the override value. |
| Scope3EmissionsBusinessTravel | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from business travel that is included in category 6 of the related carbon footprint record or the override values. |
| Scope3EmissionsCapitalGoods | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of capital goods that is included in category 2 of the related carbon footprint record or the override value. |
| Scope3EmissionsDataCenters | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from all the data centers in the related carbon footprint record or the override value. |
| Scope3EmissionsFleetVehicles | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from all the fleet vehicles in the related carbon footprint record or the override value. |
| Scope3EmissionsFranchises | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of franchises that is included in category 14 of the related carbon footprint record or the override value. |
| Scope3EmissionsInvestments | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from investment that is included in category 15 of the related carbon footprint record or the override value. |
| Scope3EmissionsPctCapitalGoods | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the production of capital goods out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmissionsPctFranchises | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the operation of franchises out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmissionsPctInvestments | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from investments out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmissionsPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions out of the total emissions.This is a calculated field. |
| Scope3EmissionsPrivateJets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from all the private jets in the related carbon footprint record or the override value. |
| Scope3EmissionsType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of scope 3 emissions. The default value is LocationBased.Possible values are:LocationBased—Location-BasedMarketBased—Market-BasedThe default value is LocationBased. |
| Scope3EmissionsWasteGenInOper | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the treatment and disposal of generated waste that is included in category 5 of the related carbon footprint record or the override value. |
| Scope3EmssnCapitalGoodsOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the production of capital goods. |
| Scope3EmssnCmclBldOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from commercial buildings. |
| Scope3EmssnCommercialBuildings | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from all the commercial buildings in the related carbon footprint record or the override value. |
| Scope3EmssnDataCentersOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from data centers. |
| Scope3EmssnEmpCommutingOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the transportation of employees. |
| Scope3EmssnEmployeeCommuting | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation of employees that is included in category 7 of the related carbon footprint record or the override value. |
| Scope3EmssnFranchisesOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the operation of franchises. |
| Scope3EmssnInvestmentsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from investments. |
| Scope3EmssnPctBusinessTravel | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from business travel out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmssnPctDnstrmTrnspDstr | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the transportation and distribution of downstream leased assets out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmssnPctEmpCommuting | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the transportation of employees out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmssnPctUpstrmLeasedAsst | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the operation of upstream leased assets out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmssnPctUseOfSoldPrdct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from uncategorized sources out of the total scope 3 emissions.This is a calculated field. |
| Scope3EmssnUseOfSoldProducts | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the use of sold products and services that is included in category 11 of the related carbon footprint record or the override value. |
| Scope3UncategorizedEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from uncategorized sources in the related carbon footprint record or the override value. |
| Scp1EmssnFleetVehiclesOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 1 emissions from fleet vehicles. |
| Scp2EmssnFleetVehiclesOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 emissions from fleet vehicles. |
| Scp2EmssnPrivateJetsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 emissions from private jets. |
| Scp2LocBsdEmssnCmclBldOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 location-based emissions from commercial buildings. |
| Scp2LocBsdEmssnDataCtrOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 location-based emissions from data centers. |
| Scp2MktBsdEmssnCmclBldOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 market-based emissions from commercial buildings. |
| Scp2MktBsdEmssnDataCtrOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the scope 2 market-based emissions from data centers. |
| Scp3EmssnBusinessTravelOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from business travel. |
| Scp3EmssnDnstrmLeasedAssets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from downstream leased assets that is included in category 13 of the related carbon footprint record or the override value. |
| Scp3EmssnDnstrmLeasedAstOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from downstream leased assets. |
| Scp3EmssnDnstrmTrnspDstrOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the transportation and distribution of downstream assets. |
| Scp3EmssnDownstreamTrnspDstr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of downstream assets that is included in category 9 of the related carbon footprint record or the override value. |
| Scp3EmssnEolSoldPrdctOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the end-of-life treatment of sold products. |
| Scp3EmssnEolTreatOfSoldPrdct | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the end-of-life treatment of sold products that is included in category 12 of the related carbon footprint record or the override value. |
| Scp3EmssnFleetVehiclesOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from fleet vehicles. |
| Scp3EmssnFuelEnergyActivity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the production of fuel and energy that is included in category 3 of the related carbon footprint record or the override values. |
| Scp3EmssnFuelEnrgyActvtyOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the production of fuel and energy. |
| Scp3EmssnPctDnstrmLeasedAssets | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the downstream leased assets out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctEolTreatSoldPrdct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the end-of-life treatment of sold products out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctFuelEnrgyActivity | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the production of fuel and energy out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctProcSoldProducts | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the processing of sold products out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctPurchGoodsAndSrvcs | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the production of purchased goods and services out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctUpstrmTrnspDstr | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the transportation and distribution of upstream leased assets out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPctWasteGenInOper | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from the treatment and disposal of generated waste out of the total scope 3 emissions.This is a calculated field. |
| Scp3EmssnPrivateJetsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from private jets. |
| Scp3EmssnProcSoldPrdctOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the processing of sold products. |
| Scp3EmssnProcSoldProducts | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the processing of sold products that is included in category 10 of the related carbon footprint record or the override value. |
| Scp3EmssnPurchGoodsAndServices | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 emissions from the production of purchased goods and services, included in category 1 associated with the carbon footprint record or the relevant override value. |
| Scp3EmssnPurchGoodsSrvcsOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the production of purchased goods and services. |
| Scp3EmssnUpstreamLeasedAssets | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the operation of upstream leased assets that is included in category 8 of the related carbon footprint record or the override value. |
| Scp3EmssnUpstreamTrnspDstr | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions from the transportation and distribution of upstream leased assets that is included in category 4 of the related carbon footprint record or the override value. |
| Scp3EmssnUpstrmLeasedAstOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the operation of upstream leased assets. |
| Scp3EmssnUpstrmTrnspDstrOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the transportation and distribution of upstream leased assets. |
| Scp3EmssnUseOfSoldPrdctOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the use of sold products and services. |
| Scp3EmssnWasteGenInOperOvride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from the treatment and disposal of generated waste. |
| Scp3MktEmssnFuelEnrgy | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 market-based emissions, measured in metric tons, from producing fuel and energy. These emissions are included in the category 3 of the related carbon footprint record or the override values. |
| Scp3MktFuelEnrgyOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe scope 3 market-based emissions, measured in metric tons, that override the emissions from producing fuel and energy. |
| Scp3UncategorizedEmssnOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions from uncategorized sources. |
| Scp3UncatgEmssnPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of scope 3 emissions from uncategorized sources out of the total scope 3 emissions.This is a calculated field. |
| SupplementalScope3EmissionsPct | TypepercentPropertiesFilter, Nillable, SortDescriptionThe percentage of supplemental scope 3 emissions out of the total scope 3 emissions.This is a calculated field. |
| TotScope2LocBasedEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 location-based emissions from all the related records or the override value. |
| TotScope2MarketBsdEmssn | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 market-based emissions from all the related records or the override value. |
| TotalAllocEmissionsInTco2e | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total emissions allocated to the inventory of an account.This field is a calculated field. |
| TotalEmissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1, 2, and 3 emissions.This is a calculated field. |
| TotalScope1And2Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1 and 2 emissions of the related carbon footprint record.This is a calculated field. |
| TotalScope1Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 1 emissions from all the related energy use records and the supplemental emissions from the related carbon footprint record or the override value. |
| TotalScope1EmissionsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 1 emissions. |
| TotalScope2Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 2 emissions from all the related energy use records and the supplemental emissions from the related carbon footprint record or the override value. |
| TotalScope2EmissionsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 2 emissions. |
| TotalScope3Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total scope 3 emissions of the related carbon footprint record that’s calculated based on categorized, uncategorized, and supplemental scope 3 emissions or the override value. |
| TotalScope3EmissionsOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total scope 3 emissions. |
| TotalSuplScope3EmssnOverride | TypedoublePropertiesFilter, Nillable, SortDescriptionThe emissions value entered to override the value of the total supplemental scope 3 emissions. |
| TotalSuplScp3Emissions | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total supplemental scope 3 emissions from the related carbon footprint record or the override value. |
| UniqueIdx | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe unique index for this record. This field is available in API version 57.0 and later. |
| Year | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe year to which the carbon emissions inventory data corresponds.Possible values are:2000200120022003200420052006200720082009201020112012201320142015201620172018201920202021202220232024202520262027202820292030203120322033203420352036203720382039204020412042204320442045204620472048204920502051205220532054205520562057205820592060206120622063206420652066206720682069207020712072207320742075207620772078207920802081208220832084208520862087208820892090209120922093209420952096209720982099 |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AnnualEmssnInventoryChangeEvent](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 63.0)

Change events are available for the object.

[AnnualEmssnInventoryFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AnnualEmssnInventoryHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AnnualEmssnInventoryShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AnnualEmssnInventoryChangeEvent (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_change_event.htm)
- AnnualEmssnInventoryFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- AnnualEmssnInventoryHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- AnnualEmssnInventoryShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
