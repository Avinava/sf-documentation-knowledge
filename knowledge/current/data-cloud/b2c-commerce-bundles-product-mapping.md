---
title: "B2C Commerce: Bundles Product Mapping"
domain: data-cloud
topic: b2c-commerce-bundles-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.891Z
estimatedTokens: 314
keywords: [B2C, Commerce, Bundles, Product, Mapping, After, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source, objects, model, DMO, Data]
---

# B2C Commerce: Bundles Product Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Bundles Product object represents products that can be
         purchased as a group. Bundle products can contain independent inventory records for the
         bundle and the product that make up the bundle.

# B2C Commerce: Bundles Product Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Bundles Product object represents products that can be purchased as a group. Bundle products can contain independent inventory records for the bundle and the product that make up the bundle.

## DLO to DMO Mapping

These data mappings relate to the Bundles Product object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| brand | text | Bundle Product | Brand |
| longDescription | text | Bundle Product | Product Long Description |
| manufacturerName | text | Bundle Product | Manufacturer Name |
| minOrderQuantityValue | number | Bundle Product | Minimum Order Quantity Count |
| name | text | Bundle Product | Product Name |
| productId | text | Bundle Product | Bundle Product Id |
| shortDescription | text | Bundle Product | Product Description |
| sku | text | Bundle Product | Product SKU |
| validFrom | text | Bundle Product | Valid From Date |
| validTo | text | Bundle Product | Valid To Date |
