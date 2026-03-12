---
title: "Commerce: Return Order Item Adjustment Mapping"
domain: data-cloud
topic: commerce-return-order-item-adjustment-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.133Z
estimatedTokens: 333
keywords: [Commerce, Order, Item, Adjustment, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects]
---

# Commerce: Return Order Item Adjustment Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Adjustment data is information
         about the change in price of the item in the return order product.

# Commerce: Return Order Item Adjustment Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Adjustment data is information about the change in price of the item in the return order product.

## DLO to DMO Mapping

These data mappings relate to the ReturnOrderItemAdjustment object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Data Field Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ReturnOrderProductPriceAdjustment | id |
| CurrencyIsoCode | picklist | ReturnOrderProductPriceAdjustment | Currency |
| ReturnOrderLineItemId | reference | ReturnOrderProductPriceAdjustment | ReturnOrderItemId |
| OrderItemAdjustLineSummaryId | reference | ReturnOrderProductPriceAdjustment | SalesOrderProductPriceAdjustmentId |
| Amount | currency | ReturnOrderProductPriceAdjustment | AdjustmentAmount |
| TotalTaxAmount | currency | ReturnOrderProductPriceAdjustment | TotalTaxAmount |
| TotalAmtWithTax | currency | ReturnOrderProductPriceAdjustment | WithTaxTotalAmount |
| Description | textarea | ReturnOrderProductPriceAdjustment | Description |
| SystemModstamp | dateTime | ReturnOrderProductPriceAdjustment | SystemModstamp |
