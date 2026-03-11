---
title: "Commerce: Product Catalog Mapping"
domain: data-cloud
topic: commerce-product-catalog-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.927Z
keywords: [Commerce, Product, Catalog, Mapping, DLO, DMO]
---

# Commerce: Product Catalog Mapping

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