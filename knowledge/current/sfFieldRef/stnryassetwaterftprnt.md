---
title: "StnryAssetWaterFtprnt"
domain: sfFieldRef
topic: stnryassetwaterftprnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.597Z
estimatedTokens: 1057
keywords: [StnryAssetWaterFtprnt, total, volume, water, activities, withdrawal, consumption, discharge, stationary, assets]
---

# StnryAssetWaterFtprnt

> Represents information about the total volume of water from the water
         activities, such as withdrawal, consumption, or discharge that are related to the
         stationary assets.

# StnryAssetWaterFtprnt

Represents information about the total volume of water from the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetWaterFtprnt in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CnsmpIntsVariancePct | Consumption Intensity Variance Percentage | percent |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DchgIntsVariancePct | Discharge Intensity Variance Percentage | percent |  |  | 18 | 2 |
| EmployeeCnsmpIntsInM3 | Employee Consumption Intensity (m3/employee) | double |  |  | 18 | 4 |
| EmployeeCount | Employee Count | double |  |  | 18 | 2 |
| EmployeeDchgIntsInM3 | Employee Discharge Intensity (m3/employee) | double |  |  | 18 | 4 |
| EmployeeWdrwIntsInM3 | Employee Withdrawal Intensity (m3/employee) | double |  |  | 18 | 4 |
| EndDate | End Date | date |  |  |  |  |
| ExtremeStressCnsmpPct | Extreme Stress Consumption Percentage | percent |  |  | 18 | 2 |
| ExtremeStressWdrwPct | Extreme Stress Withdrawal Percentage | percent |  |  | 18 | 2 |
| FlAreaCnsmpIntsInM3M2 | Floor Area Consumption Intensity (m3/m2) | double |  |  | 18 | 4 |
| FlAreaCnsmpIntsInM3Sqft | Floor Area Consumption Intensity (m3/sqft) | double |  |  | 18 | 4 |
| FlAreaDchgIntsInM3M2 | Floor Area Discharge Intensity (m3/m2) | double |  |  | 18 | 4 |
| FlAreaDchgIntsInM3Sqft | Floor Area Discharge Intensity (m3/sqft) | double |  |  | 18 | 4 |
| FlAreaWdrwIntsInM3M2 | Floor Area Withdrawal Intensity (m3/m2) | double |  |  | 18 | 4 |
| FlAreaWdrwIntsInM3Sqft | Floor Area Withdrawal Intensity (m3/sqft) | double |  |  | 18 | 4 |
| FootprintStage | Footprint Stage | picklist |  | 40 |  |  |
| HighStressCnsmpPct | High Stress Consumption Percentage | percent |  |  | 18 | 2 |
| HighStressWdrwPct | High Stress Withdrawal Percentage | percent |  |  | 18 | 2 |
| Id | Stationary Asset Water Footprint ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OccupiedFloorArea | Occupied Floor Area | double |  |  | 18 | 2 |
| OccupiedFloorAreaUnit | Occupied Floor Area Unit | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreviousYearWaterFtprntId | Stationary Asset Water Footprint ID | reference |  | 18 |  |  |
| ProdtVolumeCnsmpIntsInM3 | Production Volume Consumption Intensity (m3/product) | double |  |  | 18 | 4 |
| ProdtVolumeDchgIntsInM3 | Production Volume Discharge Intensity (m3/product) | double |  |  | 18 | 4 |
| ProdtVolumeWdrwIntsInM3 | Production Volume Withdrawal Intensity (m3/product) | double |  |  | 18 | 4 |
| ReportingYear | Reporting Year | picklist |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalConsumptionInMl | Total Consumption (Ml) | double |  |  | 18 | 4 |
| TotalCost | Total Cost | currency |  |  | 12 | 2 |
| TotalDischargeInMl | Total Discharge (Ml) | double |  |  | 18 | 4 |
| TotalFloorArea | Total Floor Area | double |  |  | 18 | 2 |
| TotalFloorAreaUnit | Total Floor Area Unit | picklist |  | 255 |  |  |
| TotalStorageInMl | Total Storage (Ml) | double |  |  | 18 | 4 |
| TotalUnitsManufactured | Total Units Manufactured | double |  |  | 18 | 2 |
| TotalWithdrawalInMl | Total Withdrawal (Ml) | double |  |  | 18 | 4 |
| WaterInventoryRecCount | Water Inventory Record Count | double |  |  | 16 | 0 |
| WdrwIntsVariancePct | Withdrawal Intensity Variance Percentage | percent |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
