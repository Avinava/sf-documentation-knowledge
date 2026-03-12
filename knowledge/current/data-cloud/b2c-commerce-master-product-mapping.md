---
title: "B2C Commerce: Master Product Mapping"
domain: data-cloud
topic: b2c-commerce-master-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.908Z
estimatedTokens: 396
keywords: [B2C, Commerce, Master, Product, Mapping, After, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source, objects, model, DMO, Data]
---

# B2C Commerce: Master Product Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Master Product object is a container for some types of
         products. Master products don’t have inventory records.

# B2C Commerce: Master Product Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Master Product object is a container for some types of products. Master products don’t have inventory records.

## DLO to DMO Mapping

These data mappings relate to the Master Product object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| brand | text | Master Product | Brand |
| longDescription | text | Master Product | Product Long Description |
| manufacturerName | text | Master Product | Manufacturer Name |
| minOrderQuantityValue | number | Master Product | Minimum Order Quantity Count |
| name | text | Master Product | Product Name |
| productId | text | Master Product | Master Product Id |
| shortDescription | text | Master Product | Product Description |
| sku | text | Master Product | Product SKU |
| validFrom | text | Master Product | Valid From Date |
| validTo | text | Master Product | Valid To Date |

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We retained noninclusive terms to document a third-party system, but we encourage the developer community to embrace more inclusive language. We can update the term when it’s no longer required for technical accuracy.
