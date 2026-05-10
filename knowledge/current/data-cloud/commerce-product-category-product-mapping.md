---
title: "Commerce: Product Category Product Mapping"
domain: data-cloud
topic: commerce-product-category-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:12.174Z
estimatedTokens: 232
keywords: [Commerce, Product, Category, Mapping, stream, deployed, starter, bundle, automatically, maps, Cloud, model, DMO, assignment, categories, ShoeXYZ, assigned, Shoes, Running, DLO]
---

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category Product data is the assignment of
         a product to categories. For example, ShoeXYZ is assigned to the Shoes and Running
         categories.

# Commerce: Product Category Product Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category Product data is the assignment of a product to categories. For example, ShoeXYZ is assigned to the Shoes and Running categories.

## DLO to DMO Mapping

These data mappings relate to the ProductCategoryProduct object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ProductCategoryProduct | id |
| ProductCategoryId | reference | ProductCategoryProduct | productCategoryId |
| CreatedDate | dateTime | ProductCategoryProduct | CreatedDate |
| LastActivityDate | dateTime | ProductCategoryProduct | lastModifiedDate |
| ProductId | reference | ProductCategoryProduct | productId |
