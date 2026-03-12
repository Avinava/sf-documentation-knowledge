---
title: "Commerce: Product Category Mapping"
domain: data-cloud
topic: commerce-product-category-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.266Z
estimatedTokens: 276
keywords: [Commerce, Product, Category, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., categories, subcategories]
---

# Commerce: Product Category Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category data is about categories and
         subcategories organize and group products in your catalog and on your storefront. For
         example, an outdoors outfitter site uses the Boots, Climbing Gear, and Outerwear categories
         to organize products on their storefront.

# Commerce: Product Category Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Category data is about categories and subcategories organize and group products in your catalog and on your storefront. For example, an outdoors outfitter site uses the Boots, Climbing Gear, and Outerwear categories to organize products on their storefront.

## DLO to DMO Mapping

These data mappings relate to the ProductCategory object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ProductCategory | id |
| CatalogId | reference | ProductCategory | productCatalogId |
| ParentCategoryId | reference | ProductCategory | parentCategoryId |
| Description | textarea | ProductCategory | Description |
| Name | string | ProductCategory | Name |
| CreatedDate | dateTime | ProductCategory | CreatedDate |
| LastModifiedDate | dateTime | ProductCategory | LastModifiedDate |
