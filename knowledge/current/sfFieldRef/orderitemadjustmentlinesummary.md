---
title: "OrderItemAdjustmentLineSummary"
domain: sfFieldRef
topic: orderitemadjustmentlinesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.780Z
estimatedTokens: 519
keywords: [OrderItemAdjustmentLineSummary, current, state, price, adjustments, OrderItemSummary, Corresponds, order, item, adjustment, line, objects, consisting, original, any]
---

# OrderItemAdjustmentLineSummary

> Represents the current properties and state of price adjustments on an
      OrderItemSummary. Corresponds to one or more order item adjustment line item objects,
      consisting of an original object and any change objects applicable to it.

# OrderItemAdjustmentLineSummary

Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemAdjustmentLineSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentBasisReferenceId | Adjustment Basis Reference ID | reference |  | 18 |  |  |
| AdjustmentCauseId | Adjustment Cause ID | reference |  | 18 |  |  |
| Amount | Adjustment | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| Id | Order Product Adjustment Line Item Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderAdjustmentGroupSummaryId | Order Adjustment Group Summary ID | reference |  | 18 |  |  |
| OrderItemSummaryId | Order Product Summary ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OriginalOrderItemAdjustmentLineItemId | Order Product Adjustment Line Item ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
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
