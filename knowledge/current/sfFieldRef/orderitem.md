---
title: "OrderItem"
domain: sfFieldRef
topic: orderitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.753Z
estimatedTokens: 491
keywords: [OrderItem, order, product, organization, sells]
---

# OrderItem

> Represents an order product that your organization
		sells.

# OrderItem

Represents an order product that your organization sells.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AvailableQuantity | Available Quantity | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Line Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Order Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderItemNumber | Order Product Number | string |  | 30 |  |  |
| OriginalOrderItemId | Original Order Item ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| RelatedOrderItemId | Order Product ID | reference |  | 18 |  |  |
| ServiceDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalLineAmount | Product Subtotal | currency |  |  | 18 | 2 |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 100 |  |  |
| TypeCode | Type Code | picklist |  | 40 |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
