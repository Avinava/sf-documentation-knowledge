---
title: "StnryAssetEnrgyUse"
domain: sfFieldRef
topic: stnryassetenrgyuse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:14.506Z
estimatedTokens: 1888
keywords: [StnryAssetEnrgyUse, energy, consumption, stationary, assets, across, multiple, fuel]
---

# StnryAssetEnrgyUse

> Represents the energy consumption related to stationary assets across
         multiple fuel types.

# StnryAssetEnrgyUse

Represents the energy consumption related to stationary assets across multiple fuel types.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetEnrgyUse in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllocatedRenewableEnergyInKwh | Allocated Renewable Energy Override (kWh) | double |  |  | 18 | 2 |
| CarbonFootprintReportDate | Carbon Footprint Report Date | date |  |  |  |  |
| Ch4EmissionsInKg | CH4 Emissions (kg) | double |  |  | 16 | 6 |
| Co2EmissionsInKg | CO2 Emissions (kg) | double |  |  | 16 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataGapFillingMethodName | Data Gap Filling Method Name | picklist |  | 255 |  |  |
| ElectricityEmissionFactorsId | Electricity Emissions Factor Set ID | reference |  | 18 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FinalEnergyConsumption | Final Energy Consumption | double |  |  | 18 | 2 |
| FuelConsumption | Fuel Consumption | double |  |  | 18 | 2 |
| FuelConsumptionInGigajoule | Fuel Consumption (GJ) | double |  |  | 18 | 4 |
| FuelConsumptionInKwh | Fuel Consumption (kWh) | double |  |  | 18 | 4 |
| FuelConsumptionUnit | Fuel Consumption Unit | picklist |  | 255 |  |  |
| FuelConsumptionUnitRefId | Sustainability Unit of Measure ID | reference |  | 18 |  |  |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| FuelTypeRefId | Fuel Type ID | reference |  | 18 |  |  |
| Id | Stationary Asset Energy Use ID | id |  | 18 |  |  |
| IsCompanyOwnedAsset | Company-Owned Asset | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPueMonthlyRange | Power Usage Effectiveness Monthly Range | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| IsSystemGeneratedRecord | System Generated Record | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocBasedElectrFrBiomassInKwh | Location-Based Electricity from Biomass (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFrNuclearInKwh | Location-Based Electricity from Nuclear (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFrOthrFuelInKwh | Location-Based Electricity from Other Fuel (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromCoalInKwh | Location-Based Electricity from Coal (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromGasInKwh | Location-Based Electricity from Gas (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromHydroInKwh | Location-Based Electricity from Hydro (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromOilInKwh | Location-Based Electricity from Oil (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromSolarInKwh | Location-Based Electricity from Solar (kWh) | double |  |  | 18 | 4 |
| LocBasedElectrFromWindInKwh | Location-Based Electricity from Wind (kWh) | double |  |  | 18 | 4 |
| LocBsdElectrFrGeothermalInKwh | Location-Based Electricity from Geothermal (kWh) | double |  |  | 18 | 4 |
| LocBsdElectrFrNonRenewablesKwh | Location-Based Electricity from Non-Renewables (kWh) | double |  |  | 18 | 4 |
| LocBsdElectrOthrFossilFuelKwh | Location-Based Electricity from Other Fossil Fuel (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFrBiomassInKwh | Market-Based Electricity from Biomass (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFrNuclearInKwh | Market-Based Electricity from Nuclear (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromCoalInKwh | Market-Based Electricity from Coal (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromGasInKwh | Market-Based Electricity from Gas (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromHydroInKwh | Market-Based Electricity from Hydro (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromOilInKwh | Market-Based Electricity from Oil (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromSolarInKwh | Market-Based Electricity from Solar (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrFromWindInKwh | Market-Based Electricity from Wind (kWh) | double |  |  | 18 | 4 |
| MktBasedElectrOthrFuelInKwh | Market-Based Electricity from Other Fuel (kWh) | double |  |  | 18 | 4 |
| MktBsdElectrFrGeothermalInKwh | Market-Based Electricity from Geothermal (kWh) | double |  |  | 18 | 4 |
| MktBsdElectrFrNonRenewablesKwh | Market-Based Electricity from Non-Renewables (kWh) | double |  |  | 18 | 4 |
| MktBsdElectrOthrFossilFuelKwh | Market-Based Electricity from Other Fossil Fuel (kWh) | double |  |  | 18 | 4 |
| N2oEmissionsInKg | N2O Emissions (kg) | double |  |  | 16 | 6 |
| Name | Name | string |  | 255 |  |  |
| NormalizedMoElectrCnsmpInKwh | Normalized Monthly Electricity Consumption (kWh) | double |  |  | 18 | 2 |
| OccupiedFloorArea | Occupied Floor Area | double |  |  | 18 | 0 |
| OccupiedFloorAreaInSqft | Occupied Floor Area (sqft) | double |  |  | 18 | 0 |
| OccupiedFloorAreaUnit | Occupied Floor Area Unit | picklist |  | 255 |  |  |
| OtherEmssnFctrId | Other Emissions Factor Set ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PowerUsageEffectiveness | Power Usage Effectiveness | double |  |  | 12 | 2 |
| ProposedEnergyConsumption | Proposed Energy Consumption | double |  |  | 18 | 2 |
| RefrigerantEmssnFctrId | Refrigerant Emissions Factor ID | reference |  | 18 |  |  |
| RenewableEnergyType | Renewable Energy Type Override | picklist |  | 255 |  |  |
| Scope1EmissionsInTco2e | Scope 1 Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope2LocBasedEmssnInTco2e | Scope 2 Location-Based Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope2MktBasedEmssnInTco2e | Scope 2 Market-Based Emissions (tCO2e) | double |  |  | 18 | 4 |
| Scope3DnstrmEmissionsInTco2e | Scope 3 Downstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| Scope3GhgCategory | Scope 3 GHG Category | picklist |  | 255 |  |  |
| Scope3UpstrmEmissionsInTco2e | Scope 3 Upstream Emissions (tCO2e) | double |  |  | 18 | 5 |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetCrbnFtprntId | Stationary Asset Carbon Footprint ID | reference |  | 18 |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SuplScope1Emissions | Supplemental Scope 1 Emissions | double |  |  | 18 | 5 |
| SuplScope2LocationBasedEmssn | Supplemental Scope 2 Location-Based Emissions | double |  |  | 18 | 5 |
| SuplScope2MarketBasedEmssn | Supplemental Scope 2 Market-Based Emissions | double |  |  | 18 | 5 |
| SuplScope3DnstrmEmissions | Supplemental Scope 3 Downstream Emissions | double |  |  | 18 | 5 |
| SuplScope3UpstrmEmissions | Supplemental Scope 3 Upstream Emissions | double |  |  | 18 | 5 |
| SupplierId | Supplier ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotRnwlEnrgyExclHydroInKwh | Total Renewable Energy Excluding Hydro (kWh) | double |  |  | 18 | 4 |
| TotalFloorArea | Total Floor Area | double |  |  | 18 | 5 |
| TotalFloorAreaInSqft | Total Floor Area (sqft) | double |  |  | 18 | 0 |
| TotalFloorAreaUnit | Total Floor Area Unit | picklist |  | 255 |  |  |
| TotalFuelConsumptionInKwh | Total Fuel Consumption (kWh) | double |  |  | 18 | 2 |
| TotalRenewableEnergyInKwh | Total Renewable Energy (kWh) | double |  |  | 18 | 4 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
