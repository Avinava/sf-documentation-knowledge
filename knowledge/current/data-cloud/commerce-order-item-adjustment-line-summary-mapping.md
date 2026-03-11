---
title: "Commerce: Order Item Adjustment Line Summary Mapping"
domain: data-cloud
topic: commerce-order-item-adjustment-line-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.886Z
keywords: [Commerce, Order, Item, Adjustment, Line, Summary, Mapping, DLO, DMO]
---

# Commerce: Order Item Adjustment Line Summary Mapping

# Commerce: Order Item Adjustment Line Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Adjustment Line Summary data is information about a change to the price of a sales order product that is made before order fulfillment. A sales order product price adjustment can stand alone or be related to a sales order level adjustment.

## DLO to DMO Mapping

These data mappings relate to the OrderItemAdjustmentLineSummaryobject included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderProductPriceAdjustment | id |
| ProductAdjustmentGroup |
| Name | string | PriceAdjustmentGroup | Name |
| Description | textarea | SalesOrderProductPriceAdjustment | Description |
| ProductAdjustmentGroup |
| OrderSummaryId | picklist | SalesOrderProductPriceAdjustment | SalesOrderId |
| AdjustmentBasisReferenceId | reference | PriceAdjustmentGroup | CouponId |
| AdjustmentCauseId | reference | PriceAdjustmentGroup | PromotionId |
| OriginalOrderItemAdjustmentLineItemId | reference | PriceAdjustmentGroup | OriginalPriceAdjustmentGroupId |
| TotalAmtWithTax | currency | SalesOrderProductPriceAdjustment | SalesOrderProductPriceAdjustmentAmount |
| Amount | currency | SalesOrderProductPriceAdjustment | AdjustmentAmount |
| ProductAdjustmentGroup |
| TotalTaxAmount | currency | SalesOrderProductPriceAdjustment | AdjustmentTaxAmount |
| SystemModstamp | dateTime | SalesOrderProductPriceAdjustment | SystemModstamp |
| ProductAdjustmentGroup |