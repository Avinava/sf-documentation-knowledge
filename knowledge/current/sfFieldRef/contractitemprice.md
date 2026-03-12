---
title: "ContractItemPrice"
domain: sfFieldRef
topic: contractitemprice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:54.374Z
estimatedTokens: 440
keywords: [ContractItemPrice, that’s, capture, price, product, contract, API, version, 61.0, later]
---

# ContractItemPrice

> Represents an object that’s used to capture a price for a product on
         a contract. This object is available in API version 61.0 and later.

# ContractItemPrice

Represents an object that’s used to capture a price for a product on a contract. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ContractItemPrice in the Quote and Order Capture Guide and Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentMethod | Adjustment Method | picklist |  | 255 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DiscountType | Discount Type | picklist |  | 255 |  |  |
| DiscountValue | Discount Value | double |  |  | 18 | 6 |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Contract Item Price ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemId | Item ID | reference |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| Price | Price | currency |  |  | 18 | 2 |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| SellingModelType | Selling Model Type | picklist |  | 255 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
