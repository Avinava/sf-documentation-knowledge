---
title: "B2C Commerce: Product Category Mapping"
domain: data-cloud
topic: b2c-commerce-product-category-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.764Z
estimatedTokens: 265
keywords: [B2C, Commerce, Product, Category, Mapping, data, stream, deployed, Salesforce, Order, starter, bundle, automatically, maps, source]
---

# B2C Commerce: Product Category Mapping

> After a data stream is deployed, the Salesforce B2C Commerce Order
         starter data bundle automatically maps source objects from B2C Commerce to data model
         objects (DMO)s in Data Cloud. The Product Category object represents categories of
         products.

# B2C Commerce: Product Category Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Category object represents categories of products.

## DLO to DMO Mapping

These data mappings relate to the Product Category object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| catalogId | text | Product Category | Product Catalog Id |
| name | text | Product Category | Category Name |
| unique_id | text | Product Category | Product Category Product ID |
| unique_id | text | Product Category Product | ProductCategoryProduct |
| unique_parentCategoryId | text | Product Category | Parent Category |
| unique_productCategoryId | text | Product Category Product | Product Category |
| validFrom | date | Product Category | Active From Date |
| validTo | date | Product Category | Active To Date |
