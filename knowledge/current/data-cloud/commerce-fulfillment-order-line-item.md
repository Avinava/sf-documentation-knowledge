---
title: "Commerce: Fulfillment Order Line Item"
domain: data-cloud
topic: commerce-fulfillment-order-line-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.997Z
estimatedTokens: 554
keywords: [Commerce, Fulfillment, Order, Line, Item, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects]
---

# Commerce: Fulfillment Order Line Item

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Line data is a shippable product
         or service that is part of a fulfillment order.

# Commerce: Fulfillment Order Line Item

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Line data is a shippable product or service that is part of a fulfillment order.

## DLO to DMO Mapping

These data mappings relate to the FulfillmentOrderLineItem object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | FulfillmentOrderProduct | id |
| Description | string | FulfillmentOrderProduct | Description |
| EndDate | dateTime | FulfillmentOrderProduct | RequestedEndDate |
| FulfillmentOrderId | reference | FulfillmentOrderProduct | FulfillmentOrderId |
| FulfillmentOrderLineItemNumber | string | FulfillmentOrderProduct | Number |
| GrossUnitPrice | currency | FulfillmentOrderProduct |  |
| OrderItemSummaryId | reference | FulfillmentOrderProduct | SalesOrderProductId |
| CurrencyIsoCode | picklist | FulfillmentOrderProduct |  |
| OriginalQuantity | double | FulfillmentOrderProduct | OriginalQuantity |
| Product2Id | reference | FulfillmentOrderProduct | InventoryProductId |
| Quantity | double | FulfillmentOrderProduct | FulfilledQuantity |
| QuantityUnitOfMeasure | string | FulfillmentOrderProduct | QuantityUnitOfMeasureId |
| ServiceDate | date | FulfillmentOrderProduct | ProvisioningDate |
| TotalAdjustmentAmount | currency | FulfillmentOrderProduct | TotalAdjustmentAmount |
| TotalAdjustmentTaxAmount | currency | FulfillmentOrderProduct | TotalOrderProductAdjTaxAmount |
| TotalAmount | currency | FulfillmentOrderProduct |  |
| TotalLineAmount | currency | FulfillmentOrderProduct | ProductAmount |
| TotalLineAmountWithTax | currency | FulfillmentOrderProduct |  |
| TotalLineTaxAmount | currency | FulfillmentOrderProduct | TotalProductTaxAmount |
| TotalPrice | currency | FulfillmentOrderProduct | GrandTotalAmount |
| TotalTaxAmount | currency | FulfillmentOrderProduct | TotalTaxAmount |
| UnitPrice | currency | FulfillmentOrderProduct | UnitPriceAmount |
| SystemModstamp | dateTime | FulfillmentOrderProduct | SystemModstamp |
