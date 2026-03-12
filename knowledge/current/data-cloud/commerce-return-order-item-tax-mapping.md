---
title: "Commerce: Return Order Item Tax Mapping"
domain: data-cloud
topic: commerce-return-order-item-tax-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.137Z
estimatedTokens: 348
keywords: [Commerce, Order, Item, Tax, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects]
---

# Commerce: Return Order Item Tax Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Tax data is information about
         the tax amount adjustments made for the return order product.

# Commerce: Return Order Item Tax Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Return Order Item Tax data is information about the tax amount adjustments made for the return order product.

## DLO to DMO Mapping

These data mappings relate to the ReturnOrderItemTax object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ReturnOrderProductTax | id |
| TaxEffectiveDate | date | ReturnOrderProductTax |  |
| ReturnOrderItemAdjustmentId | reference | ReturnOrderProductTax | ReturnOrderProductAdjustmentid |
| ReturnOrderItemTaxNumber | string | ReturnOrderProductTax |  |
| ReturnOrderLineItemId | reference | ReturnOrderProductTax | ReturnOrderItemId |
| OrderItemTaxLineItemSummaryId | reference | ReturnOrderProductTax | SalesOrderProductTaxId |
| Rate | percent | ReturnOrderProductTax | TaxRatePercent |
| CurrencyIsoCode | picklist | ReturnOrderProductTax | Currency |
| Amount | currency | ReturnOrderProductTax | TaxAmount |
| Type | picklist | ReturnOrderProductTax | ReturnOrderProductTaxType |
| Description | textarea | ReturnOrderProductTax | Description |
| SystemModstamp | dateTime | ReturnOrderProductTax | SystemModstamp |
