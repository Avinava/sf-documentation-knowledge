---
title: "Commerce: Product Catalog Mapping"
domain: data-cloud
topic: commerce-product-catalog-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:14.106Z
estimatedTokens: 186
keywords: [Commerce, Product, Catalog, Mapping, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO]
---

# Commerce: Product Catalog Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Catalog data is a catalog used for a
         business process. For example, inventory or merchandising.

# Commerce: Product Catalog Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Catalog data is a catalog used for a business process. For example, inventory or merchandising.

## DLO to DMO Mapping

These data mappings relate to the ProductCatalog object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ProductCatalog | id |
| Name | string | ProductCatalog | Name |
| CreatedDate | dateTime | ProductCatalog | CreatedDate |
| LastModifiedDate | dateTime | ProductCatalog | LastModifiedDate |
