---
title: "ProductItemTransaction"
domain: sfFieldRef
topic: productitemtransaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:09.557Z
estimatedTokens: 454
keywords: [ProductItemTransaction, action, taken, product, item, service, transactions, auto-generated, records, help, track, replenished, consumed, adjusted]
---

# ProductItemTransaction

> Represents an action taken on a product item in field service. Product
			item transactions are auto-generated records that help you track when a product item is
			replenished, consumed, or adjusted.

# ProductItemTransaction

Represents an action taken on a product item in field service. Product item transactions are auto-generated records that help you track when a product item is replenished, consumed, or adjusted.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductItemTransaction](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productitemtransaction.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Product Item Transaction ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ProductItemId | Product Item ID | reference |  | 18 |  |  |
| ProductItemTransactionNumber | Product Item Transaction Number | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| RelatedRecordId | Related Record ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionType | Transaction Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
