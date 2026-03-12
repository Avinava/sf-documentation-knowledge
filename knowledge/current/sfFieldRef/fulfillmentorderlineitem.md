---
title: "FulfillmentOrderLineItem"
domain: sfFieldRef
topic: fulfillmentorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.800Z
estimatedTokens: 692
keywords: [FulfillmentOrderLineItem, product, delivery, charge, belonging, FulfillmentOrder, Corresponds, OrderItemSummary, API, version, 48.0, later]
---

# FulfillmentOrderLineItem

> Represents a product or delivery charge belonging to a FulfillmentOrder.
      Corresponds to an OrderItemSummary. This object is available in API version 48.0 and
    later.

# FulfillmentOrderLineItem

Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FulfillmentOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| FulfillmentOrderId | Fulfillment Order ID | reference |  | 18 |  |  |
| FulfillmentOrderLineItemNumber | Fulfillment Order Product Number | string |  | 255 |  |  |
| GrossUnitPrice | Gross Unit Price | currency |  |  | 18 | 2 |
| Id | Fulfillment Order Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReship | Reship | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MainFulfillmentOrderLineItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |
| OriginalQuantity | Quantity on the Original Order | double |  |  | 18 | 0 |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 0 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | string |  | 100 |  |  |
| RejectReason | Reject Reason | picklist |  | 40 |  |  |
| RejectedQuantity | Rejected Quantity | double |  |  | 18 | 0 |
| ReshipReason | Reship Reason | picklist |  | 40 |  |  |
| ServiceDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentAmountWithTax | Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| TotalLineAmount | Line Subtotal | currency |  |  | 18 | 2 |
| TotalLineAmountWithTax | Line Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Line Subtotal Tax | currency |  |  | 18 | 2 |
| TotalPrice | Pretax Total | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
