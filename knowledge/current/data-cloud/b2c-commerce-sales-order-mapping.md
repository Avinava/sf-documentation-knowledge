---
title: "B2C Commerce: Sales Order Mapping"
domain: data-cloud
topic: b2c-commerce-sales-order-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.925Z
estimatedTokens: 369
keywords: [B2C, Commerce, Sales, Order, Mapping, After, data, stream, deployed, Salesforce, starter, bundle, automatically, maps, source, objects, model, DMO, Data, Cloud.]
---

# B2C Commerce: Sales Order Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Sales Order object represents an order.

# B2C Commerce: Sales Order Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Sales Order object represents an order.

## DLO to DMO Mapping

These data mappings relate to the Sales Order object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| currencyCodeAlpha3 | text | Sales Order | Currency Code |
| text | Sales Order | Total Product Amount Currency |
| text | Sales Order | Total Product Tax Amount Currency |
| number | Sales Order | Total Delivery Amount Currency |
| text | Sales Order | Total Amount Currency |
| grandTotalGrossPrice | number | Sales Order | Grand Total Amount |
| grossDiscountPrice | number | Sales Order | Total Adjustment Amount |
| orderPlacedTimestamp | date | Sales Order | Created Date |
| shippingGrossPrice | number | Sales Order | Total Delivery Amount |
| shippingTax | number | Sales Order | Total Delivery Tax Amount |
| subtotalGrossPrice | number | Sales Order | Total Product Amount |
| subtotalTax | number | Sales Order | Total Product Tax Amount |
| unique_id | text | Sales Order | Sales Order Id |
| visitorId | text | Sales Order | Sold To Customer |
| text | Sales Order | Account Id |
| text | Sales Order | Bill to Account |
| text | Sales Order | Party |
