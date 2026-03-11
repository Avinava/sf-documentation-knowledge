---
title: "Commerce: Fulfillment Order Item Tax"
domain: data-cloud
topic: commerce-fulfillment-order-item-tax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.871Z
keywords: [Commerce, Fulfillment, Order, Item, Tax, DLO, DMO, Mapping]
---

# Commerce: Fulfillment Order Item Tax

# Commerce: Fulfillment Order Item Tax

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Fulfillment Order Item Tax data is a tax that is calculated on the base price of a fulfillment order product.

## DLO to DMO Mapping

These data mappings relate to the FulfillmentOrderItemTax object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | FulfillmentOrderProductTax | id |
| TaxEffectiveDate | date | FulfillmentOrderProductTax | TaxEffectiveDate |
| FulfillmentOrderItemTaxNumber | string | FulfillmentOrderProductTax | Number |
| FulfillmentOrderLineItemId | reference | FulfillmentOrderProductTax | FulfillmentOrderProductId |
| Rate | percent | FulfillmentOrderProductTax | TaxRatePercent |
| CurrencyIsoCode | picklist | FulfillmentOrderProductTax | CurrencyIsoCode |
| Amount | currency | FulfillmentOrderProductTax | FulfillmentOrderProductTaxAmount |
| Type | picklist | FulfillmentOrderProductTax | FulfillmentOrderTaxType |
| SystemModstamp | dateTime | FulfillmentOrderProductTax | SystemModstamp |