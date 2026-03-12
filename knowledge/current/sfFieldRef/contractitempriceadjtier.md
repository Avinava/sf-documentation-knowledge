---
title: "ContractItemPriceAdjTier"
domain: sfFieldRef
topic: contractitempriceadjtier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.381Z
estimatedTokens: 352
keywords: [ContractItemPriceAdjTier, tiers, price, adjustment, product, contract, API, version, 63.0, later]
---

# ContractItemPriceAdjTier

> Represents the tiers of a price adjustment to a product on a contract.
      This object is available in API version 63.0 and later.

# ContractItemPriceAdjTier

Represents the tiers of a price adjustment to a product on a contract. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ContractItemPriceAdjTier in the Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContractItemPriceId | Contract Item Price ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Contract Item Price Adjustment Tier ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerBound | Lower Bound | double |  |  | 18 | 0 |
| Name | Name | string |  | 255 |  |  |
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
