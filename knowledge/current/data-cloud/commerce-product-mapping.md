---
title: "Commerce: Product Mapping"
domain: data-cloud
topic: commerce-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.257Z
estimatedTokens: 262
keywords: [Commerce, Product, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., product, company, selling.]
---

# Commerce: Product Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product data is about the product that a company
         is selling. The Product object includes fields for quantity and revenue.

# Commerce: Product Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product data is about the product that a company is selling. The Product object includes fields for quantity and revenue.

## DLO to DMO Mapping

These data mappings relate to the Product object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | XProduct | id |
| CurrencyIsoCode | picklist | XProduct | mSRPAmountCurrency |
| Description | textarea | XProduct | Description |
| Family | picklist | XProduct | ProductFamilyId |
| Name | string | XProduct | Name |
| ProductCode | string | XProduct | ProductCode |
| QuantityUnitOfMeasure | picklist | XProduct | QuantityUnitOfMeasure |
| StockKeepingUnit | string | XProduct | productSKU |
| Type | picklist | XProduct | productType |
| Serialized | boolean | XProduct | IsSerialized |
