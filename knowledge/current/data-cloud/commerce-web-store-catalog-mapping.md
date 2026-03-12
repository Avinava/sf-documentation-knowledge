---
title: "Commerce: Web Store Catalog Mapping"
domain: data-cloud
topic: commerce-web-store-catalog-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:13.311Z
estimatedTokens: 221
keywords: [Commerce, Web, Store, Catalog, Mapping, After, data, stream, deployed, starter, bundle, automatically, maps, Cloud, model, objects, DMO, Data, Cloud., information]
---

# Commerce: Web Store Catalog Mapping

> After a data stream is deployed, the Commerce starter data bundle
         automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store Catalog data is information about the
         products available at a store. Each record in a WebStoreCatalog data source object
         specifies a product catalog that organizes the products in a store.

# Commerce: Web Store Catalog Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Web Store Catalog data is information about the products available at a store. Each record in a WebStoreCatalog data source object specifies a product catalog that organizes the products in a store.

## DLO to DMO Mapping

These data mappings relate to the WebStoreCatalog object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | WebStoreProductCatalog | Field Name |
| ProductCatalogId | reference | WebStoreProductCatalog | ProductCatalogId |
| Name | string | WebStoreProductCatalog | Name |
| SalesStoreId | reference | WebStoreProductCatalog | WebstoreId |
