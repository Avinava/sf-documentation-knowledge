---
title: "Commerce: Order Delivery Group Summary Mapping"
domain: data-cloud
topic: commerce-order-delivery-group-summary-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:13.231Z
estimatedTokens: 587
keywords: [Commerce, Order, Delivery, Group, Summary, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud.]
---

# Commerce: Order Delivery Group Summary Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Delivery Group Summary data is information
         about the method that the buyer uses to compensate a seller for a service or product
         purchased.

# Commerce: Order Delivery Group Summary Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Order Delivery Group Summary data is information about the method that the buyer uses to compensate a seller for a service or product purchased.

## DLO to DMO Mapping

These data mappings relate to the OrderDeliveryGroupSummaryobject included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | SalesOrderDeliveryGroup | id |
| OrderSummaryId | reference | SalesOrderDeliveryGroup | SalesOrderId |
| CurrencyIsoCode | picklist | SalesOrderDeliveryGroup | TotalDeliveryChargeAmountCurrencyId |
| TotalDeliveryAmountCurrencyId |
| OrderDeliveryMethodId | reference | SalesOrderDeliveryGroup | OrderDeliveryMethodId |
| OriginalOrderDeliveryGroupId | reference | SalesOrderDeliveryGroup | OriginalDeliveryGroupId |
| Description | textarea | SalesOrderDeliveryGroup | Description |
| SystemModstamp | dateTime | SalesOrderDeliveryGroup | SystemModstamp |
| GiftMessage | textarea | SalesOrderDeliveryGroup | GiftMessageText |
| IsGift | boolean | SalesOrderDeliveryGroup | IsGift |
| DeliveryInstructions | textarea | SalesOrderDeliveryGroup | DeliveryInstructionsText |
| DesiredDeliveryDate | dateTime | SalesOrderDeliveryGroup | DesiredDeliveryDate |
| PromisedDeliveryDate | dateTime | SalesOrderDeliveryGroup | PromisedDate |
| TotalLineAmount | currency | SalesOrderDeliveryGroup | TotalDeliveryChargeAmount |
| TotalLineTaxAmount | currency | SalesOrderDeliveryGroup | TotalDeliveryChargeTaxAmount |
| TotalAdjustmentAmount | currency | SalesOrderDeliveryGroup | TotalDeliveryAdjustmentAmount |
| TotalAdjustmentTaxAmount | currency | SalesOrderDeliveryGroup | TotalDeliveryAdjustmentTaxAmount |
| TotalAmount | currency | SalesOrderDeliveryGroup | TotalPriceAmount |
| TotalTaxAmount | currency | SalesOrderDeliveryGroup | TotalDeliveryTaxAmount |
| GrandTotalAmount | currency | SalesOrderDeliveryGroup | GrandTotalDeliveryAmount |
| TotalAdjustmentAmtWithTax | currency | SalesOrderDeliveryGroup | TotalWithTaxAdjustmentAmount |
| TotalLineAmt | currency | SalesOrderDeliveryGroup | TotalWithTaxDelivChargeAmount |
