---
title: "RateAdjustmentByTier"
domain: sfFieldRef
topic: rateadjustmentbytier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.328Z
estimatedTokens: 521
keywords: [RateAdjustmentByTier, adjustments, rate, resource, that’s, determined, tiers, stores, adjustment, any, applicable, boundaries, API, version, 62.0]
---

# RateAdjustmentByTier

> Represents the adjustments for the rate of a resource that’s
         determined based on the specified tiers. This object stores information about the type of
         adjustment used, the value of the adjustment type, and any applicable boundaries. This
      object is available in API version 62.0 and later.

# RateAdjustmentByTier

Represents the adjustments for the rate of a resource that’s determined based on the specified tiers. This object stores information about the type of adjustment used, the value of the adjustment type, and any applicable boundaries. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see RateAdjustmentByTier in the Rate Management Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Rate Adjustment By Tier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerBound | Lower Bound | double |  |  | 18 | 6 |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| RateCardEntryId | Rate Card Entry ID | reference |  | 18 |  |  |
| RateCardEntryStatus | Rate Card Entry Status | picklist |  | 255 |  |  |
| RateCardId | Rate Card ID | reference |  | 18 |  |  |
| RateUnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| RateUnitOfMeasureName | Rate Unit Of Measure Name | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpperBound | Upper Bound | double |  |  | 18 | 6 |
| UsageResourceId | Usage Resource ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
