---
title: "OrderItemGroup"
domain: sfFieldRef
topic: orderitemgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.824Z
estimatedTokens: 404
keywords: [OrderItemGroup, Stores, group, line, items, order, aggregated, subtotal, parent-child, relationship, API, version, 62.0, later]
---

# OrderItemGroup

> Stores the group information for line items in an order. It also stores the
         aggregated line field information (subtotal). It contains a parent-child relationship to
         order. This object is available in API version 62.0 and later.

# OrderItemGroup

Stores the group information for line items in an order. It also stores the aggregated line field information (subtotal). It contains a parent-child relationship to order. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemgroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Order Product Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Order Product Group Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SummarySubtotal | Summary Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Order Product Group Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
