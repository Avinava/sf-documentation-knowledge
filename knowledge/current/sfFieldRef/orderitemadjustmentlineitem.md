---
title: "OrderItemAdjustmentLineItem"
domain: sfFieldRef
topic: orderitemadjustmentlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.761Z
estimatedTokens: 483
keywords: [OrderItemAdjustmentLineItem, adjustment, made, order, item, API, version, 48.0, later]
---

# OrderItemAdjustmentLineItem

> An adjustment that has been made to an order item. This object is
    available in API version 48.0 and later.

# OrderItemAdjustmentLineItem

An adjustment that has been made to an order item. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemAdjustmentLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlineitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmountScope | Adjustment Amount Scope | picklist |  | 255 |  |  |
| AdjustmentSource | Adjustment Source | picklist |  | 255 |  |  |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| AdjustmentValue | Adjustment Value | double |  |  | 18 | 0 |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Id | Order Product Adjustment Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderAdjustmentGroupId | Order Adjustment Group ID | reference |  | 18 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| RelatedAdjustmentLineItemId | Order Product Adjustment Line Item ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmtWithTax | Total Amount with Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
