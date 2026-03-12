---
title: "LoyaltyPartnerProduct"
domain: sfFieldRef
topic: loyaltypartnerproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.141Z
estimatedTokens: 372
keywords: [LoyaltyPartnerProduct, products, product, categories, offered, loyalty, partners]
---

# LoyaltyPartnerProduct

> Represents products and product categories offered by loyalty partners.

# LoyaltyPartnerProduct

Represents products and product categories offered by loyalty partners.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyPartnerProduct in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Loyalty Partner Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| PartnerCategoryDerivedFieldId | Category ID | reference |  | 18 |  |  |
| PartnerProductCost | Partner's Product Cost | currency |  |  | 18 | 2 |
| ProductDerivedFieldId | Product ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
