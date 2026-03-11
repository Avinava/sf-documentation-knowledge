---
title: "B2C Commerce: Product Catalog Mapping"
domain: data-cloud
topic: b2c-commerce-product-catalog-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.700Z
keywords: [B2C, Commerce, Product, Catalog, Mapping, DLO, DMO]
---

# B2C Commerce: Product Catalog Mapping

# B2C Commerce: Product Catalog Mapping

After a data stream is deployed, the Salesforce B2C Commerce Order starter data bundle automatically maps source objects from B2C Commerce to data model objects (DMO)s in Data Cloud. The Product Catalog object represents categories and products used to organize merchandise.

## DLO to DMO Mapping

These data mappings relate to the Product Catalog object used with the B2C Commerce connector. You can add or customize the data mappings.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| catalogId | text | Product Catalog | Product Catalog Id |
| createdDate | date | Product Catalog | Created Date |
| displayName | text | Product Catalog | Product Catalog Name |