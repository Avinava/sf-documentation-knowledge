---
title: "StnryAssetAnnualFact"
domain: sfFieldRef
topic: stnryassetannualfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.408Z
estimatedTokens: 428
keywords: [StnryAssetAnnualFact, stationary, assets, their, quantify, intensity]
---

# StnryAssetAnnualFact

> Represents the information about stationary assets and their types, which is
         used to quantify the related intensity.

# StnryAssetAnnualFact

Represents the information about stationary assets and their types, which is used to quantify the related intensity.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetAnnualFact in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicableYear | Applicable Year | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| EmployeeCount | Employee Count | int | 9 |  |  |  |
| Id | Stationary Asset Annual Fact ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OccupiedFloorArea | Occupied Floor Area | double |  |  | 18 | 2 |
| OccupiedFloorAreaUnit | Occupied Floor Area Unit | picklist |  | 255 |  |  |
| Revenue | Revenue | double |  |  | 18 | 2 |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalFloorArea | Total Floor Area | double |  |  | 18 | 2 |
| TotalFloorAreaUnit | Total Floor Area Unit | picklist |  | 255 |  |  |
| TotalUnitsManufactured | Total Units Manufactured | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
