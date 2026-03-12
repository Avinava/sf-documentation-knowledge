---
title: "OrderItemTaxLineItem"
domain: sfFieldRef
topic: orderitemtaxlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.952Z
estimatedTokens: 404
keywords: [OrderItemTaxLineItem, tax, amount, applied, order, item, API, version, 48.0, later]
---

# OrderItemTaxLineItem

> The tax amount that has been applied to an order item. This object is
    available in API version 48.0 and later.

# OrderItemTaxLineItem

The tax amount that has been applied to an order item. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemTaxLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Id | Order Product Tax Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderItemAdjustmentLineItemId | Order Product Adjustment Line Item ID | reference |  | 18 |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |
| Rate | Rate | percent |  |  | 5 | 2 |
| RelatedTaxLineItemId | Order Product Tax Line Item ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
