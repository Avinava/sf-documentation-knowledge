---
title: "ProductCategoryProduct"
domain: sfFieldRef
topic: productcategoryproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:09.231Z
estimatedTokens: 357
keywords: [ProductCategoryProduct, Holds, relation, product, category, assign, products, API, version, 55.0, later]
---

# ProductCategoryProduct

> Holds the relation between product and product category to assign products to a category. This object is available in API version 55.0 and later.

# ProductCategoryProduct

Holds the relation between product and product category to assign products to a category. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductCategoryProduct](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productcategoryproduct.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CatalogId | Catalog ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Product Category Product ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimaryCategory | Is Primary Category | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductCategoryId | Category ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductToCategory | Product/Category Concatenation | string |  | 30 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
