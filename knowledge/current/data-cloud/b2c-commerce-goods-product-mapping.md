---
title: "B2C Commerce: Goods Product Mapping"
domain: data-cloud
topic: b2c-commerce-goods-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.753Z
estimatedTokens: 395
keywords: [B2C, Commerce, Goods, Product, Mapping, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source]
---

# B2C Commerce: Goods Product Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Goods Product object represents hard goods that can be
         purchased.

# B2C Commerce: Goods Product Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Goods Product object represents hard goods that can be purchased.

## DLO to DMO Mapping

These data mappings relate to the Goods Product object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| brand | text | Goods Product | Brand |
| longDescription | text | Goods Product | Product Long Description |
| manufacturerName | text | Goods Product | Manufacturer Name |
| masterProductId | text | Goods Product | Master Product |
| minOrderQuantityValue | number | Goods Product | Minimum Order Quantity Count |
| name | text | Goods Product | Product Name |
| productId | text | Goods Product | Product Id |
| shortDescription | text | Goods Product | Product Description |
| sku | text | Goods Product | Product SKU |
| validFrom | text | Goods Product | Valid From Date |
| validTo | text | Goods Product | Valid To Date |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We retained noninclusive terms to document a third-party system, but we encourage the developer community to embrace more inclusive language. We can update the term when it’s no longer required for technical accuracy.
