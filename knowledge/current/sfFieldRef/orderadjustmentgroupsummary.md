---
title: "OrderAdjustmentGroupSummary"
domain: sfFieldRef
topic: orderadjustmentgroupsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.639Z
estimatedTokens: 492
keywords: [OrderAdjustmentGroupSummary, current, state, group, price, adjustments, Associated, OrderItemAdjustmentLineSummaries, apply, OrderItemSummaries, belonging, OrderSummary, Corresponds, order, adjustment]
---

# OrderAdjustmentGroupSummary

> Represents the current properties and state of a group of related price
      adjustments. Associated with a set of OrderItemAdjustmentLineSummaries that apply to
      OrderItemSummaries belonging to one OrderSummary. Corresponds to one or more order adjustment
      group objects, consisting of an original object and any change objects applicable to it.

# OrderAdjustmentGroupSummary

Represents the current properties and state of a group of related price adjustments. Associated with a set of OrderItemAdjustmentLineSummaries that apply to OrderItemSummaries belonging to one OrderSummary. Corresponds to one or more order adjustment group objects, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderAdjustmentGroupSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroupsummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentBasisReferenceId | Adjustment Basis Reference ID | reference |  | 18 |  |  |
| AdjustmentCauseId | Adjustment Cause ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Order Adjustment Group Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OriginalOrderAdjGroupId | Order Adjustment Group ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Pretax Total | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
