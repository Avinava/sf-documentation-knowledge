---
title: "StnryAssetWaterActvty"
domain: sfFieldRef
topic: stnryassetwateractvty
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:14.566Z
estimatedTokens: 638
keywords: [StnryAssetWaterActvty, water, activities, withdrawal, consumption, discharge, stationary, assets]
---

# StnryAssetWaterActvty

> Represents information about the water activities, such as withdrawal,
         consumption, or discharge that are related to the stationary assets.

# StnryAssetWaterActvty

Represents information about the water activities, such as withdrawal, consumption, or discharge that are related to the stationary assets.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetWaterActvty in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivitySourceType | Activity Source Type | picklist |  | 255 |  |  |
| ActivityType | Activity Type | picklist |  | 255 |  |  |
| CostCenter | Cost Center | string |  | 255 |  |  |
| CostPerUnit | Cost Per Unit (Cost/m3) | currency |  |  | 10 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataGapFillingMethodName | Data Gap Filling Method Name | picklist |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | End Date | date |  |  |  |  |
| EnvironmentalRiskId | Environmental Risk ID | reference |  | 18 |  |  |
| FinalWaterQuantity | Final Water Quantity | double |  |  | 18 | 2 |
| Id | Stationary Asset Water Activity ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| IsSystemGeneratedRecord | System Generated Record | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProposedWaterQuantity | Proposed Water Quantity | double |  |  | 18 | 2 |
| Quantity | Quantity | double |  |  | 15 | 5 |
| QuantityInM3 | Quantity (m3) | double |  |  | 15 | 5 |
| QuantityUnit | Quantity Unit | picklist |  | 255 |  |  |
| ServiceProviderId | Supplier ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| StnryAssetEnvrSrcId | Stationary Asset Environmental Source ID | reference |  | 18 |  |  |
| StnryAssetWaterFtprntId | Stationary Asset Water Footprint ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCost | Total Cost | currency |  |  | 12 | 2 |
| TreatmentType | Treatment Type | picklist |  | 255 |  |  |
| WaterFtprntReportDate | Water Footprint Report Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
