---
title: "Commerce: Order Adjustment Group Summary Mapping"
domain: data-cloud
topic: commerce-order-adjustment-group-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.882Z
keywords: [Commerce, Order, Adjustment, Group, Summary, Mapping, DLO, DMO]
---

# Commerce: Order Adjustment Group Summary Mapping

# Commerce: Order Adjustment Group Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Adjustment Group Summary data is a change to the price of a product that’s made before order fulfillment. A sales order price adjustment can be composed of sales order Product price adjustments that allocate the overall adjustment amount to products and services.

## DLO to DMO Mapping

These data mappings relate to the OrderAdjustmentGroupSummary object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | PriceAdjustmentGroup | id |
| Name | string | PriceAdjustmentGroup | Name |
| Description | textarea | SalesOrderPriceAdjustment | Description |
| PriceAdjustmentGroup |
| CurrencyIsoCode | picklist | SalesOrderPriceAdjustment | CurrencyId |
| PriceAdjustmentGroup |
| Type | picklist | PriceAdjustmentGroup | SalesOrderPriceAdjustmentTypeID |
| OrderSummaryId | picklist | SalesOrderPriceAdjustment | SalesOrderId |
| AdjustmentBasisReferenceId | reference | SalesOrderPriceAdjustment | CouponId |
| AdjustmentCauseId | reference | SalesOrderPriceAdjustment | PromotionId |
| OriginalOrderItemAdjGroupId | reference | SalesOrderPriceAdjustment | OriginalPriceAdjustmentGroupId |
| GrandTotalAmount | currency | SalesOrderPriceAdjustment | GrandTotalAmount |
| TotalAmount | currency | SalesOrderPriceAdjustment | AdjustmentAmount |
| TotalTaxAmount | currency | SalesOrderPriceAdjustment | TotalAdjustmentTaxAmount |
| SystemModstamp | dateTime | SalesOrderPriceAdjustment/PriceAdjustmentGroup | SystemModstamp |