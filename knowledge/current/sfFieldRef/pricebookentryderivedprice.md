---
title: "PriceBookEntryDerivedPrice"
domain: sfFieldRef
topic: pricebookentryderivedprice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.558Z
estimatedTokens: 461
keywords: [PriceBookEntryDerivedPrice, price, product, that’s, derived, another, source, asset, API, version, 61.0, later]
---

# PriceBookEntryDerivedPrice

> Represents the price of a product that’s derived from another source
         such as a product or an asset. This object is available in API version 61.0 and
      later.

# PriceBookEntryDerivedPrice

Represents the price of a product that’s derived from another source such as a product or an asset. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PriceBookEntryDerivedPrice in the Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContributingProductId | Product ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DerivedPricingScope | Derived Pricing Scope | picklist |  | 255 |  |  |
| EffectiveFrom | Effective From | datetime |  |  |  |  |
| EffectiveTo | Effective To | datetime |  |  |  |  |
| Formula | Formula | string |  | 256 |  |  |
| Id | Price Book Entry Derived Price ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Price Book Entry Derived Price Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| PricebookId | Price Book ID | reference |  | 18 |  |  |
| PricingSource | Pricing Source | picklist |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
