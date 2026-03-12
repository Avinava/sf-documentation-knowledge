---
title: "B2C Commerce: Product Category Product Mapping"
domain: data-cloud
topic: b2c-commerce-product-category-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.918Z
estimatedTokens: 195
keywords: [B2C, Commerce, Product, Category, Mapping, After, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source, objects, model, DMO, Data]
---

# B2C Commerce: Product Category Product Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Product Category Product object represents categories of
         products.

# B2C Commerce: Product Category Product Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Category Product object represents categories of products.

## DLO to DMO Mapping

These data mappings relate to the Product Category Product object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| unique_id | text | Product Category Product | Product Category Product Id |
| unique_productCategoryId | text | Product Category Product | Product Category |
| productId | text | Product Category Product | Product |
