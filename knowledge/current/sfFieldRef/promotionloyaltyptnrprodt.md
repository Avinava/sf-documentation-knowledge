---
title: "PromotionLoyaltyPtnrProdt"
domain: sfFieldRef
topic: promotionloyaltyptnrprodt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.559Z
estimatedTokens: 378
keywords: [PromotionLoyaltyPtnrProdt, relationship, promotion, loyalty, partner, product, products, categories, applied, particular]
---

# PromotionLoyaltyPtnrProdt

> Represents a relationship between a promotion and a loyalty partner product. It
      indicates the products or product categories that are applied to a particular promotion.

# PromotionLoyaltyPtnrProdt

Represents a relationship between a promotion and a loyalty partner product. It indicates the products or product categories that are applied to a particular promotion.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PromotionLoyaltyPtnrProdt in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Promotion Loyalty Partner Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| LoyaltyPartnerProductId | Loyalty Partner Product ID | reference |  | 18 |  |  |
| LoyaltyProductId | Product ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductCategoryId | Category ID | reference |  | 18 |  |  |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
