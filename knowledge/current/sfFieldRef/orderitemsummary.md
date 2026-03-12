---
title: "OrderItemSummary"
domain: sfFieldRef
topic: orderitemsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.931Z
estimatedTokens: 1294
keywords: [OrderItemSummary, current, state, product, charge, OrderSummary, Corresponds, order, item, objects, consisting, original, any, change, applicable]
---

# OrderItemSummary

> Represents the current properties and state of a product or charge on an
      OrderSummary. Corresponds to one or more order item objects, consisting of an original object
      and any change objects applicable to it.

# OrderItemSummary

Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderItemSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedLineAmount | Adjusted Line Subtotal | currency |  |  | 18 | 2 |
| AdjustedLineAmtWithTax | Line Total | currency |  |  | 18 | 2 |
| AssetId | Asset ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EarliestEstimatedDeliveryDate | Earliest Estimated Delivery Date | date |  |  |  |  |
| EarliestEstimatedDeliveryTime | Earliest Estimated Delivery Time | time |  |  |  |  |
| EndDate | End Date | date |  |  |  |  |
| EstimatedDeliveryReference | Estimated Delivery Reference | string |  | 255 |  |  |
| EstimatedDeliveryTimeZone | Estimated Delivery Time Zone | picklist |  | 255 |  |  |
| GrossUnitPrice | Gross Unit Price | currency |  |  | 18 | 2 |
| Id | Order Product Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LatestEstimatedDeliveryDate | Latest Estimated Delivery Date | date |  |  |  |  |
| LatestEstimatedDeliveryTime | Latest Estimated Delivery Time | time |  |  |  |  |
| LineNumber | Order Line Number | int | 9 |  |  |  |
| ListPrice | List Price | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OrderDeliveryGroupSummaryId | Order Delivery Group Summary ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OriginalOrderItemId | Order Product ID | reference |  | 18 |  |  |
| PricebookEntryId | Price Book Entry ID | reference |  | 18 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductCode | Product Code | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 18 | 0 |
| QuantityAllocated | Quantity Allocated | double |  |  | 18 | 0 |
| QuantityAvailableToCancel | Quantity Available to Cancel | double |  |  | 18 | 0 |
| QuantityAvailableToFulfill | Quantity Available to Fulfill | double |  |  | 18 | 0 |
| QuantityAvailableToReship | Quantity Available to Reship | double |  |  | 18 | 0 |
| QuantityAvailableToReturn | Quantity Available to Return | double |  |  | 18 | 0 |
| QuantityCanceled | Quantity Canceled | double |  |  | 18 | 0 |
| QuantityFulfilled | Quantity Fulfilled | double |  |  | 18 | 0 |
| QuantityNetOrdered | Quantity Net Ordered | double |  |  | 18 | 0 |
| QuantityOrdered | Quantity Ordered | double |  |  | 18 | 0 |
| QuantityReshipped | Quantity Reshipped | double |  |  | 18 | 0 |
| QuantityReturnInitiated | Quantity Return Initiated | double |  |  | 18 | 0 |
| QuantityReturned | Quantity Returned | double |  |  | 18 | 0 |
| QuantityShipped | Quantity Shipped | double |  |  | 18 | 0 |
| ReservedAtLocationId | ReservedAtLocation ID | reference |  | 18 |  |  |
| ServiceDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| StockKeepingUnit | Product Sku | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustedLineTaxAmount | Adjusted Line Subtotal Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentAmount | Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentAmtWithTax | Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentDistAmount | Distributed Order Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentDistAmtWithTax | Distributed Order Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentDistTaxAmount | Distributed Order Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAmtWithTax | Total with Tax | currency |  |  | 18 | 2 |
| TotalLineAdjustmentAmount | Line Adjustments | currency |  |  | 18 | 2 |
| TotalLineAdjustmentAmtWithTax | Line Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalLineAdjustmentTaxAmount | Line Adjustments Tax | currency |  |  | 18 | 2 |
| TotalLineAmount | Line Subtotal | currency |  |  | 18 | 2 |
| TotalLineAmountWithTax | Line Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Line Subtotal Tax | currency |  |  | 18 | 2 |
| TotalPrice | Pretax Total | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 40 |  |  |
| TypeCode | Type Code | picklist |  | 255 |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
