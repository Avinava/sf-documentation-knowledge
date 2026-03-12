---
title: "Commerce: Product Category Product Mapping"
domain: data-cloud
topic: commerce-product-category-product-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.269Z
estimatedTokens: 232
keywords: [Commerce, Product, Category, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., assignment, product]
---

# Commerce: Product Category Product Mapping

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
