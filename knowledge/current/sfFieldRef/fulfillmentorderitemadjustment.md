---
title: "FulfillmentOrderItemAdjustment"
domain: sfFieldRef
topic: fulfillmentorderitemadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.769Z
estimatedTokens: 452
keywords: [FulfillmentOrderItemAdjustment, price, adjustment, FulfillmentOrderLineItem, Corresponds, OrderItemAdjustmentLineSummary, associated, corresponding, OrderItemSummary, API, version, 48.0, later]
---

# FulfillmentOrderItemAdjustment

> Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an
      OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This
    object is available in API version 48.0 and later.

# FulfillmentOrderItemAdjustment

Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FulfillmentOrderItemAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Adjustment | currency |  |  | 18 | 2 |
| CampaignName | Campaign Name | string |  | 255 |  |  |
| CouponName | Coupon Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| FulfillmentOrderId | Fulfillment Order ID | reference |  | 18 |  |  |
| FulfillmentOrderItemAdjustmentNumber | Name | string |  | 255 |  |  |
| FulfillmentOrderLineItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| Id | Fulfillment Order Item Adjustment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PromotionName | Promotion Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmtWithTax | Adjustment with Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
