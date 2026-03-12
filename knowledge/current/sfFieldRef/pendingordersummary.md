---
title: "PendingOrderSummary"
domain: sfFieldRef
topic: pendingordersummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.541Z
estimatedTokens: 498
keywords: [PendingOrderSummary, representing, B2C, Commerce, order, ingested, via, High, Scale, Orders, OrderSummary, created, Optimized, online, transaction]
---

# PendingOrderSummary

> Object representing a B2C Commerce order ingested via High Scale Orders
         before an OrderSummary is created for it. Optimized for online transaction processing
         (OLTP). This object is available in API version 55.0 and later.

# PendingOrderSummary

Object representing a B2C Commerce order ingested via High Scale Orders before an OrderSummary is created for it. Optimized for online transaction processing (OLTP). This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PendingOrderSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_pendingordersummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| BillingEmailAddress | Billing Email Address | email |  | 80 |  |  |
| BillingPhoneNumber | Billing Phone Number | phone |  | 40 |  |  |
| CreatedById | User ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| ExternalId | External Id | string |  | 255 |  |  |
| ExternalReferenceIdentifier | External Reference Identifier | string |  | 255 |  |  |
| GrandTotalAmount | Grand Total Amount | currency |  |  | 18 | 2 |
| Id | Pending Order Summary ID | id |  | 18 |  |  |
| LastModifiedById | User ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OrderNumber | Order Number | string |  | 255 |  |  |
| OrderedDate | Ordered Date | datetime |  |  |  |  |
| Payload | Payload | textarea |  | 131072 |  |  |
| PayloadType | Payload Type | picklist |  | 255 |  |  |
| ProcessingInstructions | Processing Instructions | textarea |  | 255 |  |  |
| SalesStoreId | Store ID | reference |  | 18 |  |  |
| ShopperName | Shopper Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
