---
title: "StnryAssetCrbnFtprnt"
domain: sfFieldRef
topic: stnryassetcrbnftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.448Z
estimatedTokens: 2543
keywords: [StnryAssetCrbnFtprnt, total, carbon, emissions, environmental, attributes, stationary, assets, footprint, quantifies, effect, atmospheric, warming, represented, metric]
---

# StnryAssetCrbnFtprnt

> Represents the total carbon emissions and other environmental attributes from
         stationary assets. Carbon footprint quantifies the effect of atmospheric warming, which is
         represented in metric tonnes of carbon dioxide equivalent (tCO₂e). Additionally, it also
         quantifies various aspects of the energy performance of the asset.

# StnryAssetCrbnFtprnt

Represents the total carbon emissions and other environmental attributes from stationary assets. Carbon footprint quantifies the effect of atmospheric warming, which is represented in metric tonnes of carbon dioxide equivalent (tCO₂e). Additionally, it also quantifies various aspects of the energy performance of the asset.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetCrbnFtprnt in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllocatedRenewableEnergyInKwh | Allocated Renewable Energy (kWh) | double |  |  | 18 | 2 |
| AllocationStatus | Allocation Status | picklist |  | 40 |  |  |
| AnnualEmssnInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| AuditApprovalStatus | Audit Approval Status | picklist |  | 40 |  |  |
| AvgDataCenterPue | Average Data Center Power Usage Effectiveness | double |  |  | 18 | 2 |
| AvgMonthlyElectrCnsmpInKwh | Average Monthly Electricity Consumption (kWh) | double |  |  | 18 | 2 |
| BuildingEnergyIntensityId | Building Energy Intensity ID | reference |  | 18 |  |  |
| CarbonInventoryRecordCount | Carbon Inventory Record Count | double |  |  | 16 | 0 |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 16 | 6 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 16 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataCtrItDieselCnsmpIntensity | Data Center IT Diesel Consumption Intensity (kWh/IT kWh) | double |  |  | 18 | 6 |
| DataGapStatus | Data Gap Status | picklist |  | 40 |  |  |
| ElectricityIntensityVarPct | Electricity Intensity Variance Percentage | percent |  |  | 18 | 2 |
| EndDate | End Date | date |  |  |  |  |
| EnrgyCnsmpIntensityInKbtuM2 | Energy Consumption Intensity (kBtu/m2) | double |  |  | 18 | 4 |
| EnrgyCnsmpIntensityInKbtuSqft | Energy Consumption Intensity (kBtu/sqft) | double |  |  | 18 | 4 |
| EnrgyCnsmpIntensityInKwhM2 | Energy Consumption Intensity (kWh/m2) | double |  |  | 18 | 4 |
| EnrgyCnsmpIntensityInKwhSqft | Energy Consumption Intensity (kWh/sqft) | double |  |  | 18 | 4 |
| EnrgyIntensityVariancePct | Energy Intensity Variance Percentage | percent |  |  | 18 | 2 |
| FootprintStage | Footprint Stage | picklist |  | 40 |  |  |
| Id | Stationary Asset Carbon Footprint ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocBasedElectrFrOthrFuelInKwh | Location-Based Electricity from Other Fuel (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromBiomassInKwh | Location-Based Electricity from Biomass (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromCoalInKwh | Location-Based Electricity from Coal (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromGasInKwh | Location-Based Electricity from Gas (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromHydroInKwh | Location-Based Electricity from Hydro (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromNuclearInKwh | Location-Based Electricity from Nuclear (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromOilInKwh | Location-Based Electricity from Oil (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromSolarInKwh | Location-Based Electricity from Solar (kWh) | double |  |  | 18 | 2 |
| LocBasedElectrFromWindInKwh | Location-Based Electricity from Wind (kWh) | double |  |  | 18 | 2 |
| LocBsdElectrFrGeothermalInKwh | Location-Based Electricity from Geothermal (kWh) | double |  |  | 18 | 2 |
| LocBsdElectrOthrFossilFuelKwh | Location-Based Electricity from Other Fossil Fuel (kWh) | double |  |  | 18 | 2 |
| MaxVarianceAboveAvgElectrCnsmp | Maximum Variance Above Average Electricity Consumption | percent |  |  | 18 | 1 |
| MaxVarianceBelowAvgElectrCnsmp | Maximum Variance Below Average Electricity Consumption | percent |  |  | 18 | 1 |
| MktBsdElectrFrBiomassInKwh | Market-Based Electricity from Biomass (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrFromCoalInKwh | Market-Based Electricity from Coal (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrGasInKwh | Market-Based Electricity from Gas (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrGeothermalInKwh | Market-Based Electricity from Geothermal (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrHydroInKwh | Market-Based Electricity from Hydro (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrNuclearInKwh | Market-Based Electricity from Nuclear (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrOilInKwh | Market-Based Electricity from Oil (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrOthrFuelInKwh | Market-Based Electricity from Other Fuel (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrSolarInKwh | Market-Based Electricity from Solar (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrFrWindInKwh | Market-Based Electricity from Wind (kWh) | double |  |  | 18 | 2 |
| MktBsdElectrOthrFossilFuelKwh | Market-Based Electricity from Other Fossil Fuel (kWh) | double |  |  | 18 | 2 |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 16 | 6 |
| Name | Name | string |  | 255 |  |  |
| OccupiedFloorArea | Occupied Floor Area | double |  |  | 18 | 0 |
| OccupiedFloorAreaUnit | Occupied Floor Area Unit | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrevYrAnnlCarbonFootprintId | Stationary Asset Carbon Footprint ID | reference |  | 18 |  |  |
| PrevYrDataCenterPue | Previous Year Data Center Power Usage Effectiveness | double |  |  | 18 | 2 |
| PrevYrEnrgyIntensityKbtuM2 | Previous Year Energy Consumption Intensity (kBtu/m2) | double |  |  | 18 | 4 |
| PrevYrEnrgyIntensityKbtuSqft | Previous Year Energy Consumption Intensity (kBtu/sqft) | double |  |  | 18 | 4 |
| PrevYrEnrgyIntensityKwhM2 | Previous Year Energy Consumption Intensity (kWh/m2) | double |  |  | 18 | 4 |
| PrevYrEnrgyIntensityKwhSqft | Previous Year Energy Consumption Intensity (kWh/sqft) | double |  |  | 18 | 4 |
| RegionalBldgEnergyIntensityId | Building Energy Intensity ID | reference |  | 18 |  |  |
| ReportingDate | Reporting Date | date |  |  |  |  |
| ReportingYear | Reporting Year | picklist |  | 255 |  |  |
| RgnlElectrCnsmpIntensity | Regional Electricity Consumption Intensity (kWh/sqft) | double |  |  | 7 | 2 |
| RgnlEnrgyCnsmpIntensity | Regional Energy Consumption Intensity (kBtu/sqft) | double |  |  | 18 | 2 |
| Scope3EmssnDnstrmLsdAst | Scope 3 Emissions from Downstream Leased Assets (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnCptlGoods | Scope 3 Emissions from Capital Goods (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnFranchises | Scope 3 Emissions from Franchises (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnInvestments | Scope 3 Emissions from Investments (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnProcSoldPrdct | Scope 3 Emissions from Processing Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnPurchGoodsSrvcs | Scope 3 Emissions from Purchased Goods Services (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUpstrmLsdAst | Scope 3 Emissions from Upstream Leased Assets (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnUseOfSoldPrdct | Scope 3 Emissions from Use of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3EmssnWstGenInOper | Scope 3 Emissions from Waste Generated in Operations (tCO2e) | double |  |  | 18 | 2 |
| Scp3EndLifeTreatSoldPrdct | Scope 3 Emissions from End-Life Treatment of Sold Products (tCO2e) | double |  |  | 18 | 2 |
| Scp3FuelEnrgyRelaActv | Scope 3 Emissions from Fuel and Energy-Related Activities (tCO2e) | double |  |  | 18 | 2 |
| Scp3UncategorizedEmssn | Scope 3 Uncategorized Emissions (tCO2e) | double |  |  | 18 | 2 |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SuplScope1Emissions | Supplemental Scope 1 Emissions | double |  |  | 18 | 5 |
| SuplScope2LocationBasedEmssn | Supplemental Scope 2 Location-Based Emissions | double |  |  | 18 | 5 |
| SuplScope2MarketBasedEmssn | Supplemental Scope 2 Market-Based Emissions | double |  |  | 18 | 5 |
| SuplScope3DnstrmEmissions | Supplemental Scope 3 Downstream Emissions | double |  |  | 18 | 5 |
| SuplScope3UpstrmEmissions | Supplemental Scope 3 Upstream Emissions | double |  |  | 18 | 5 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotBldgIndirectEnrgyCnsmpInMwh | Total Building Indirect Energy Consumption (MWh) | double |  |  | 18 | 2 |
| TotEnergyConsumptionInGj | Total Energy Consumption (GJ) | double |  |  | 18 | 2 |
| TotEnergyConsumptionInKwh | Total Energy Consumption (kWh) | double |  |  | 18 | 2 |
| TotEnergyConsumptionInMwh | Total Energy Consumption (MWh) | double |  |  | 18 | 2 |
| TotRnwlEnrgyExclHydroInKwh | Total Renewable Energy Excluding Hydro (kWh) | double |  |  | 18 | 2 |
| TotRnwlEnrgyExclHydroPct | Total Renewable Energy Percentage Excluding Hydro | percent |  |  | 18 | 2 |
| TotScope1EmissionsInTco2e | Total Scope 1 Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotScope2LocBasedEmissions | Total Scope 2 Location-Based Emissions | double |  |  | 18 | 2 |
| TotScope2MktBasedEmissions | Total Scope 2 Market-based Emissions | double |  |  | 18 | 2 |
| TotalFloorArea | Total Floor Area | double |  |  | 18 | 0 |
| TotalFloorAreaUnit | Total Floor Area Unit | picklist |  | 255 |  |  |
| TotalRenewableEnergyInKwh | Total Renewable Energy (kWh) | double |  |  | 18 | 2 |
| TotalRenewableEnergyPct | Total Renewable Energy Percentage | percent |  |  | 18 | 2 |
| TotalScp3DnstrmEmissions | Total Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalScp3UpstrmEmissions | Total Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 2 |
| YearOverYearPueVariancePct | Year over Year Power Usage Effectiveness Variance Percentage | percent |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
