---
title: "StnryAssetCrbnFtprntItm"
domain: sfFieldRef
topic: stnryassetcrbnftprntitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.467Z
estimatedTokens: 536
keywords: [StnryAssetCrbnFtprntItm, total, tCO₂e, emissions, individual, fuel, child, records, stationary, asset, carbon, footprint, record]
---

# StnryAssetCrbnFtprntItm

> Represents the total tCO₂e emissions of individual fuel types, which are the
         child records of the stationary asset carbon footprint record.

# StnryAssetCrbnFtprntItm

Represents the total tCO₂e emissions of individual fuel types, which are the child records of the stationary asset carbon footprint record.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetCrbnFtprntItm in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EnergyIntensityVariancePct | Energy Intensity Variance Percentage | percent |  |  | 18 | 2 |
| EnrgyCnsmpIntensityInKwhM2 | Energy Consumption Intensity (kWh/m2) | double |  |  | 18 | 2 |
| EnrgyCnsmpIntensityInKwhSqft | Energy Consumption Intensity (kWh/sqft) | double |  |  | 18 | 2 |
| FuelType | Fuel Type | picklist |  | 255 |  |  |
| Id | Stationary Asset Carbon Footprint Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentCarbonFootprintId | Stationary Asset Carbon Footprint ID | reference |  | 18 |  |  |
| PrevYearCarbonFootprintItemId | Stationary Asset Carbon Footprint Item ID | reference |  | 18 |  |  |
| PrevYrEnrgyIntensityKwhM2 | Previous Year Energy Consumption Intensity (kWh/m2) | double |  |  | 18 | 0 |
| PrevYrEnrgyIntensityKwhSqft | Previous Year Energy Consumption Intensity (kWh/sqft) | double |  |  | 18 | 0 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalEmissionsInTco2e | Total Emissions (tCO2e) | double |  |  | 18 | 2 |
| TotalEnergyConsumptionInGj | Total Energy Consumption (GJ) | double |  |  | 18 | 2 |
| TotalEnergyConsumptionInKwh | Total Energy Consumption (kWh) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
