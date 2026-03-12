---
title: "ProductConsumed"
domain: sfFieldRef
topic: productconsumed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.410Z
estimatedTokens: 576
keywords: [ProductConsumed, item, inventory, work, order, line, service]
---

# ProductConsumed

> Represents an item from your inventory that was used to complete a
			work order or work order line item in field service.

# ProductConsumed

Represents an item from your inventory that was used to complete a work order or work order line item in field service.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductConsumed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productconsumed.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| Id | Product Consumed ID | id |  | 18 |  |  |
| IsConsumed | Consumed | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProduct2Serialized | Serialized | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductConsumedNumber | Product Consumed Number | string |  | 255 |  |  |
| ProductItemId | Product Item ID | reference |  | 18 |  |  |
| ProductName | Product Name | string |  | 255 |  |  |
| QuantityConsumed | Quantity Consumed | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |
| WorkOrderLineItemId | Work Order Line Item ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
