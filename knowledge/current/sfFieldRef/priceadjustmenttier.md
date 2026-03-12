---
title: "PriceAdjustmentTier"
domain: sfFieldRef
topic: priceadjustmenttier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.539Z
estimatedTokens: 541
keywords: [PriceAdjustmentTier, discount, tier, price, adjustment, schedule, API, version, 47.0, later]
---

# PriceAdjustmentTier

> Represents a discount tier in a price adjustment schedule. This object is
    available in API version 47.0 and later.

# PriceAdjustmentTier

Represents a discount tier in a price adjustment schedule. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PriceAdjustmentTier](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_priceadjustmenttier.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Price Adjustment Tier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerBound | Lower Bound | double |  |  | 18 | 0 |
| Name | Price Adjustment Tier Name | string |  | 255 |  |  |
| PriceAdjustmentScheduleId | Price Adjustment Schedule ID | reference |  | 18 |  |  |
| PricingTerm | Pricing Term | int | 9 |  |  |  |
| PricingTermUnit | Pricing Term Unit | picklist |  | 255 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| ScheduleType | Schedule Type | picklist |  | 255 |  |  |
| SellingModelType | Selling Model Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TierType | Tier Type | picklist |  | 255 |  |  |
| TierValue | Tier Value | double |  |  | 18 | 6 |
| UpperBound | Upper Bound | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
