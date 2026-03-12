---
title: "Product Catalog Management Fields on Product Category"
domain: revenue-cloud
topic: product-catalog-management-fields-on-product-category
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:09.009Z
estimatedTokens: 227
keywords: [Product, Catalog, Management, Fields, Category, Standard, custom, fields, extend, standard, Management.]
---

# Product Catalog Management Fields on Product Category

> Standard and custom fields extend the standard Product Category
         object for use in Product Catalog Management.

# Product Catalog Management Fields on Product Category

Standard and custom fields extend the standard Product Category object for use in Product Catalog Management.

## Fields

| Field | Details |
| --- | --- |
| Code | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique ID associated with the catalog. The maximum size is 80 alphanumeric characters. |
| IsNavigational | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the category or subcategory is shown in the menu as a navigational breadcrumb (true) or not (false). Available in API version 62.0 and later.The default value is false. |

#### See Also

-   [Product Category](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productcategory.htm "Product Category - HTML (New Window)")
