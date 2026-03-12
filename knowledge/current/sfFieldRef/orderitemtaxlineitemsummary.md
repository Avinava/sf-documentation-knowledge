---
title: "OrderItemTaxLineItemSummary"
domain: sfFieldRef
topic: orderitemtaxlineitemsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.970Z
estimatedTokens: 466
keywords: [OrderItemTaxLineItemSummary, current, tax, OrderItemSummary, OrderItemAdjustmentLineSummary, Corresponds, order, item, line, items, consisting, original, any, change, objects]
---

# OrderItemTaxLineItemSummary

> Represents the current tax on an OrderItemSummary or
      OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items,
      consisting of an original object and any change objects applicable to it.

# OrderItemTaxLineItemSummary

Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemTaxLineItemSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Order Product Tax Line Item Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OrderItemAdjustmentLineSummaryId | Order Product Adjustment Line Item Summary ID | reference |  | 18 |  |  |
| OrderItemSummaryId | Order Product Summary ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OriginalOrderItemTaxLineItemId | Order Product Tax Line Item ID | reference |  | 18 |  |  |
| Rate | Rate | percent |  |  | 5 | 2 |
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
