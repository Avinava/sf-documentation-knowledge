---
title: "BundleBasedAdjustment"
domain: sfFieldRef
topic: bundlebasedadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.550Z
estimatedTokens: 571
keywords: [BundleBasedAdjustment, association, product, selling, model, price, adjustment, service, sold, bundle, stores, service's, discounts, applied, along]
---

# BundleBasedAdjustment

> Represents the association between the product selling model and the price
         adjustment for a product or service being sold as a bundle. This object stores information
         of the product or service's price, the discounts applied, along with its value for a given
         date range. This object is available in API version 60.0 and later.

# BundleBasedAdjustment

Represents the association between the product selling model and the price adjustment for a product or service being sold as a bundle. This object stores information of the product or service's price, the discounts applied, along with its value for a given date range. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BundleBasedAdjustment in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 6 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Id | Bundle Based Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ParentProductId | Product ID | reference |  | 18 |  |  |
| ParentProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| PriceAdjustmentScheduleId | Price Adjustment Schedule ID | reference |  | 18 |  |  |
| PricingTerm | Pricing Term | int | 9 |  |  |  |
| PricingTermUnit | Pricing Term Unit | picklist |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| RootBundleId | Product ID | reference |  | 18 |  |  |
| RootProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| ScheduleType | Schedule Type | picklist |  | 255 |  |  |
| SellingModelType | Selling Model Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
