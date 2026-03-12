---
title: "StnryAssetWtrFtprntItm"
domain: sfFieldRef
topic: stnryassetwtrftprntitm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.620Z
estimatedTokens: 469
keywords: [StnryAssetWtrFtprntItm, total, volume, water, activity, withdrawal, consumption, discharge, stationary, assets, child, record, asset, footprint]
---

# StnryAssetWtrFtprntItm

> Represents information about the total volume of water from each water
         activity, such as withdrawal, consumption, or discharge related to the stationary assets.
         Each water activity is a child record of the stationary asset water footprint object.

# StnryAssetWtrFtprntItm

Represents information about the total volume of water from each water activity, such as withdrawal, consumption, or discharge related to the stationary assets. Each water activity is a child record of the stationary asset water footprint object.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see StnryAssetWtrFtprntItm in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivitySourceType | Activity Source Type | picklist |  | 255 |  |  |
| ActivityType | Activity Type | picklist |  | 255 |  |  |
| BaselineWaterStress | Baseline Water Stress | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Stationary Asset Water Footprint Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRecordLocked | Record Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentWaterFootprintId | Stationary Asset Water Footprint ID | reference |  | 18 |  |  |
| PrevYearWtrFtprntItemId | Stationary Asset Water Footprint Item ID | reference |  | 18 |  |  |
| QuantityInMl | Quantity (Ml) | double |  |  | 14 | 4 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCost | Total Cost | currency |  |  | 12 | 2 |
| TreatmentType | Treatment Type | picklist |  | 255 |  |  |
| WaterActivityPct | Water Activity Percentage | percent |  |  | 10 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
