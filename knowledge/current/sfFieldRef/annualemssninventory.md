---
title: "AnnualEmssnInventory"
domain: sfFieldRef
topic: annualemssninventory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.099Z
estimatedTokens: 3184
keywords: [AnnualEmssnInventory, company's, total, carbon, emissions, particular, year, metric, tonnes, CO2e, tCO2e, sum, scope, greenhouse, gas]
---

# AnnualEmssnInventory

> Represents information about a company's total carbon emissions for a
         particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the
         emissions in scope 1, scope 2, and scope 3 greenhouse gas categories.

# AnnualEmssnInventory

Represents information about a company's total carbon emissions for a particular year in metric tonnes of CO2e (tCO2e). These emissions are the sum of all the emissions in scope 1, scope 2, and scope 3 greenhouse gas categories.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AnnualEmssnInventory in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnergyUsageCmclBldOverride | Energy Usage in Commercial Buildings Override (Kwh) | double |  |  | 18 | 2 |
| EnergyUsageCommercialBld | Energy Usage in Commercial Buildings (Kwh) | double |  |  | 18 | 2 |
| EnergyUsageDataCenters | Energy Usage in Data Centers (Kwh) | double |  |  | 18 | 2 |
| EnergyUsageDataCtrOverride | Energy Usage in Data Centers Override (Kwh) | double |  |  | 18 | 2 |
| Id | Annual Emissions Inventory ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RenewableEnergyUsagePctCmclBld | Renewable Energy Usage Percentage in Commercial Buildings | percent |  |  | 18 | 2 |
| RenewableEnergyUsagePctDataCtr | Renewable Energy Usage Percentage in Data Centers | percent |  |  | 18 | 2 |
| RenewableEnrgyPctCmclBldOvride | Renewable Energy Usage Percentage in Commercial Buildings Override | percent |  |  | 18 | 2 |
| RenewableEnrgyPctDataCtrOvride | Renewable Energy Usage Percentage in Data Centers Override | percent |  |  | 18 | 2 |
| Scope1EmissionsDataCenters | Scope 1 Emissions from Data Centers (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmissionsFleetVehicles | Scope 1 Emissions from Fleet Vehicles (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmissionsPrivateJets | Scope 1 Emissions from Private Jets (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmssnCmclBldOverride | Scope 1 Emissions from Commercial Buildings Override (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmssnCommercialBuildings | Scope 1 Emissions from Commercial Buildings (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmssnDataCentersOverride | Scope 1 Emissions from Data Centers Override (tCO2e) | double |  |  | 18 | 2 |
| Scope1EmssnPrivateJetsOverride | Scope 1 Emissions from Private Jets Override (tCO2e) | double |  |  | 18 | 2 |
| Scope2EmissionsFleetVehicles | Scope 2 Emissions from Fleet Vehicles (tCO2e) | double |  |  | 18 | 2 |
| Scope2EmissionsPrivateJets | Scope 2 Emissions from Private Jets (tCO2e) | double |  |  | 18 | 2 |
| Scope2EmissionsType | Scope 2 Emissions Type | picklist |  | 255 |  |  |
| Scope2LocBasedEmssnCmclBld | Scope 2 Location-Based Emissions from Commercial Buildings (tCO2e) | double |  |  | 18 | 2 |
| Scope2LocBasedEmssnDataCtr | Scope 2 Location-Based Emissions from Data Centers (tCO2e) | double |  |  | 18 | 2 |
| Scope2MarketBasedEmssnCmclBld | Scope 2 Market-Based Emissions from Commercial Buildings (tCO2e) | double |  |  | 18 | 2 |
| Scope2MarketBasedEmssnDataCtr | Scope 2 Market-Based Emissions from Data Centers (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsBusinessTravel | Scope 3 Emissions from Business Travel (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsCapitalGoods | Scope 3 Emissions from Capital Goods (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsDataCenters | Scope 3 Emissions from Data Centers (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsFleetVehicles | Scope 3 Emissions from Fleet Vehicles (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsFranchises | Scope 3 Emissions from Franchises (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsInvestments | Scope 3 Emissions from Investments (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsPctCapitalGoods | Scope 3 Emissions Percentage from Capital Goods | percent |  |  | 18 | 2 |
| Scope3EmissionsPctFranchises | Scope 3 Emissions Percentage from Franchises | percent |  |  | 18 | 2 |
| Scope3EmissionsPctInvestments | Scope 3 Emissions Percentage from Investments | percent |  |  | 18 | 2 |
| Scope3EmissionsPercentage | Scope 3 Emissions Percentage | percent |  |  | 18 | 2 |
| Scope3EmissionsPrivateJets | Scope 3 Emissions from Private Jets (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmissionsWasteGenInOper | Scope 3 Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnCapitalGoodsOvride | Scope 3 Emissions from Capital Goods Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnCmclBldOverride | Scope 3 Emissions from Commercial Buildings Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnCommercialBuildings | Scope 3 Emissions from Commercial Buildings (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnDataCentersOverride | Scope 3 Emissions from Data Centers Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnEmpCommutingOvride | Scope 3 Emissions from Employee Commuting Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnEmployeeCommuting | Scope 3 Emissions from Employee Commuting (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnFranchisesOverride | Scope 3 Emissions from Franchises Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnInvestmentsOverride | Scope 3 Emissions from Investments Override (tCO2e) | double |  |  | 18 | 2 |
| Scope3EmssnPctBusinessTravel | Scope 3 Emissions Percentage from Business Travel | percent |  |  | 18 | 2 |
| Scope3EmssnPctDnstrmTrnspDstr | Scope 3 Emissions Percentage from Downstream Transportation and Distribution | percent |  |  | 18 | 2 |
| Scope3EmssnPctEmpCommuting | Scope 3 Emissions Percentage from Employee Commuting | percent |  |  | 18 | 2 |
| Scope3EmssnPctUpstrmLeasedAsst | Scope 3 Emissions Percentage from Upstream Leased Assets | percent |  |  | 18 | 2 |
| Scope3EmssnPctUseOfSoldPrdct | Scope 3 Emissions Percentage from Use of Sold Products | percent |  |  | 18 | 2 |
| Scope3EmssnUseOfSoldProducts | Scope 3 Emissions from Use of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scope3UncategorizedEmissions | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 2 |
| Scp1EmssnFleetVehiclesOverride | Scope 1 Emissions from Fleet Vehicles Override (tCO2e) | double |  |  | 18 | 2 |
| Scp1EmssnWstGenInTco2e | Scope 1 Emissions from Waste Generated (tCO2e) | double |  |  | 18 | 2 |
| Scp1EmssnWstGenOvrideInTco2e | Scope 1 Emissions from Waste Generated Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2EmssnFleetVehiclesOverride | Scope 2 Emissions from Fleet Vehicles Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2EmssnPrivateJetsOverride | Scope 2 Emissions from Private Jets Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2LocBsdEmssnCmclBldOverride | Scope 2 Location-Based Emissions from Commercial Buildings Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2LocBsdEmssnDataCtrOvride | Scope 2 Location-Based Emissions from Data Centers Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2MktBsdEmssnCmclBldOverride | Scope 2 Market-Based Emissions from Commercial Buildings Override (tCO2e) | double |  |  | 18 | 2 |
| Scp2MktBsdEmssnDataCtrOverride | Scope 2 Market-Based Emissions from Data Centers Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnBusinessTravelOvride | Scope 3 Emissions from Business Travel Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnDnstrmLeasedAssets | Scope 3 Emissions from Downstream Leased Assets (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnDnstrmLeasedAstOvride | Scope 3 Emissions from Downstream Leased Assets Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnDnstrmTrnspDstrOvride | Scope 3 Emissions from Downstream Transportation and Distribution Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnDownstreamTrnspDstr | Scope 3 Emissions from Downstream Transportation and Distribution (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnEolSoldPrdctOvride | Scope 3 Emissions from End-of-Life Treatment of Sold Products Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnEolTreatOfSoldPrdct | Scope 3 Emissions from End-of-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnFleetVehiclesOverride | Scope 3 Emissions from Fleet Vehicles Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnFuelEnergyActivity | Scope 3 Emissions from Fuel and Energy-Related Activity (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnFuelEnrgyActvtyOvride | Scope 3 Emissions from Fuel and Energy-Related Activity Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnPctDnstrmLeasedAssets | Scope 3 Emissions Percentage from Downstream Leased Assets | percent |  |  | 18 | 2 |
| Scp3EmssnPctEolTreatSoldPrdct | Scope 3 Emissions Percentage from End-of-Life Treatment of Sold Products | percent |  |  | 18 | 2 |
| Scp3EmssnPctFuelEnrgyActivity | Scope 3 Emissions Percentage from Fuel and Energy-Related Activity | percent |  |  | 18 | 2 |
| Scp3EmssnPctProcSoldProducts | Scope 3 Emissions Percentage from Processing of Sold Products | percent |  |  | 18 | 2 |
| Scp3EmssnPctPurchGoodsAndSrvcs | Scope 3 Emissions Percentage from Purchased Goods and Services | percent |  |  | 18 | 2 |
| Scp3EmssnPctUpstrmTrnspDstr | Scope 3 Emissions Percentage from Upstream Transportation and Distribution | percent |  |  | 18 | 2 |
| Scp3EmssnPctWasteGenInOper | Scope 3 Emissions Percentage from Waste Generated in Operations | percent |  |  | 18 | 2 |
| Scp3EmssnPrivateJetsOverride | Scope 3 Emissions from Private Jets Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnProcSoldPrdctOverride | Scope 3 Emissions from Processing of Sold Products Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnProcSoldProducts | Scope 3 Emissions from Processing of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnPurchGoodsAndServices | Scope 3 Emissions from Purchased Goods and Services (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnPurchGoodsSrvcsOvride | Scope 3 Emissions from Purchased Goods and Services Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUpstreamLeasedAssets | Scope 3 Emissions from Upstream Leased Assets (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUpstreamTrnspDstr | Scope 3 Emissions from Upstream Transportation and Distribution (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUpstrmLeasedAstOvride | Scope 3 Emissions from Upstream Leased Assets Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUpstrmTrnspDstrOvride | Scope 3 Emissions from Upstream Transportation and Distribution Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUseOfSoldPrdctOvride | Scope 3 Emissions from Use of Sold Products Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnWasteGenInOperOvride | Scope 3 Emissions from Waste Generated in Operations Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3UncategorizedEmssnOverride | Scope 3 Uncategorized Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| Scp3UncatgEmssnPct | Scope 3 Uncategorized Emissions Percentage | percent |  |  | 18 | 2 |
| SupplementalScope3EmissionsPct | Supplemental Scope 3 Emissions Percentage | percent |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotScope2LocBasedEmssn | Total Scope 2 Location Based Emissions | double |  |  | 18 | 2 |
| TotScope2MarketBsdEmssn | Total Scope 2 Market Based Emissions | double |  |  | 18 | 2 |
| TotalEmissions | Total Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope1And2Emissions | Total Scope 1 and 2 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope1Emissions | Total Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope1EmissionsOverride | Total Scope 1 Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| TotalScope2Emissions | Total Scope 2 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope2EmissionsOverride | Total Scope 2 Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| TotalScope3Emissions | Total Scope 3 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScope3EmissionsOverride | Total Scope 3 Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| TotalSuplScope3EmssnOverride | Total Supplemental Scope 3 Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| TotalSuplScp3Emissions | Total Supplemental Scope 3 Emissions (tCO2e) | double |  |  | 18 | 2 |
| UniqueIdx | Unique Index | string |  | 255 |  |  |
| Year | Year | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
