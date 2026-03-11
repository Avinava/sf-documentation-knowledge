---
title: "Commerce: Product Attribute Mapping"
domain: data-cloud
topic: commerce-product-attribute-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.919Z
keywords: [Commerce, Product, Attribute, Mapping, DLO, DMO]
---

# Commerce: Product Attribute Mapping

# Commerce: Product Attribute Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Product Attribute data is information about product attributes, for example, the type of material used for ShoeXYZ.

## DLO to DMO Mapping

These data mappings relate to the ProductAttribute object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field Name |
| --- | --- | --- | --- |
| Id | ID | ProductAttribute | id |
| ProductId | reference | ProductAttribute | ProductId |
| VariantParentId | reference | ProductAttribute | VariantParentId |
| Name | string | ProductAttribute | Name |