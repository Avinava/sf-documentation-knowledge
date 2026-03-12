---
title: "Commerce: Order Item Tax Line Item Summary Mapping"
domain: data-cloud
topic: commerce-order-item-tax-line-item-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.019Z
estimatedTokens: 370
keywords: [Commerce, Order, Item, Tax, Line, Summary, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud]
---

# Commerce: Order Item Tax Line Item Summary Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Tax Line Item Summary data is a charge
         imposed by a government entity. The tax types are aligned to phases of the process:
         SalesOrderTax, FulfillmentProductTax, and ShipmentProductTax.

# Commerce: Order Item Tax Line Item Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Item Tax Line Item Summary data is a charge imposed by a government entity. The tax types are aligned to phases of the process: SalesOrderTax, FulfillmentProductTax, and ShipmentProductTax.

## DLO to DMO Mapping

These data mappings relate to the OrderItemTaxLineItemSummary object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderProductTax | id |
| Tax |
| Amount | currency | SalesOrderProductTax | SalesOrderTaxAmount |
| TaxAmount |
| CurrencyIsoCode | picklist | Tax | CurrencyId |
| Description | textarea | SalesOrderProductTax | Description |
| Tax |
| Name | string | SalesOrderProductTax | Name |
| Tax |
| OrderItemAdjustmentLineSummaryId | reference | Tax | SalesOrderProductPriceAdjTaxId |
| OrderItemSummaryId | reference | SalesOrderProductTax | SalesOrderProductId |
| OriginalOrderItemTaxLineItemId | reference | SalesOrderProductTax | OriginalSalesOrderProductTaxId |
| Rate | percent | Tax | TaxRatePercent |
| TaxEffectiveDate | date | SalesOrderProductTax | TaxEffectiveDate |
| Type | picklist | SalesOrderProductTax | SalesOrderTaxTypeId |
| Tax |
| SystemModstamp | dateTime | Tax | SystemModstamp |
