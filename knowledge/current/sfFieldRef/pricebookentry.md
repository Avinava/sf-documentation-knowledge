---
title: "PricebookEntry"
domain: sfFieldRef
topic: pricebookentry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.609Z
estimatedTokens: 390
keywords: [PricebookEntry, product, entry, association, Pricebook2, Product2, price, book]
---

# PricebookEntry

> Represents a product entry (an association between a Pricebook2 and Product2) in a price book.

# PricebookEntry

Represents a product entry (an association between a Pricebook2 and Product2) in a price book.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PricebookEntry](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pricebookentry.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Price Book Entry ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsArchived | Archived | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Product Name | string |  | 255 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCode | Product Code | string |  | 255 |  |  |
| ProductSellingModelId | Product Selling Model ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitPrice | List Price | currency |  |  | 18 | 2 |
| UseStandardPrice | Use Standard Price | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
