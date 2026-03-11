---
title: "Product"
domain: revenue-cloud
topic: product
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.480Z
keywords: [Product]
---

# Product

# Product

Output representation of the product definition.

JSON example

This example shows a sample of the Product List (POST) API response.

```

```

This example shows a sample of the Bulk Product Details (POST) API response.

```

```

This example shows a sample of the Product By ID (GET) API response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields | Map<String, Additional Fields Input> | Key-value pair of additional standard or custom fields with their values. | Small, 61.0 | 61.0 |
| attribute​Category | Attribute Category[] | List of categorized attributes related to the product. | Small, 60.0 | 60.0 |
| attributes | Attribute Definition[] | List of uncategorized attributes related to the product. | Small, 60.0 | 60.0 |
| availability​Date | String | Date when the part is used in the product or is made available for sale. | Small, 60.0 | 60.0 |
| catalogs | Catalog[] | List of the associated catalogs returned with the Product List API (POST) response. The Product By ID API (GET) returns an empty catalog list in the response.Returns the name and id values only. | Small, 61.0 | 61.0 |
| categories | Category[] | List of the associated categories returned with the Product List API (POST) response. The Product By ID API (GET) returns an empty category list in the response.Returns the name and id values only. | Small, 60.0 | 60.0 |
| child​Products | Product[] | Hierarchy of the child products. | Small, 60.0 | 60.0 |
| configure​During​Sale | String | Determines whether to allow or prevent configuration when a bundle is sold. | Small, 60.0 | 60.0 |
| description | String | Description of the product. If data translation is set up and specified in the org, the translated description is available. | Small, 60.0 | 60.0 |
| discontinued​Date | String | Date from when the part can’t be used in the product or sold. | Small, 60.0 | 60.0 |
| display​Url | String | Display image URL of the product. | Small, 60.0 | 60.0 |
| endOf​Life​Date | String | Date after which a product isn’t supported, ordered, or maintained. | Small, 60.0 | 60.0 |
| id | String | ID of the product. | Small, 60.0 | 60.0 |
| isActive | Boolean | Indicates if the product is active (true) or not (false). | Small, 60.0 | 60.0 |
| is​Assetizable | Boolean | Indicates if the product instance remains a customer asset after it's purchased (true) or not (false). | Small, 60.0 | 60.0 |
| is​SoldOnly​WithOther​Prods | Boolean | Indicates whether the product can't be sold separately (true) or not (false). | Small, 60.0 | 60.0 |
| name | String | Name of the product. If data translation is set up and specified in the org, the translated name is available. | Small, 60.0 | 60.0 |
| node​Type | String | Type of the node, such as a product or bundled product. | Small, 60.0 | 60.0 |
| product​Classification | Product Classification | Details of the product classification that the product is based on. | Small, 60.0 | 60.0 |
| product​Code | String | Universal product code that's used to track the part that’s used in the product. | Small, 60.0 | 60.0 |
| product​Component​Groups | Product Component Group[] | Logical grouping of the component products in a bundle and the group cardinality for ordering the product components. | Small, 60.0 | 60.0 |
| product​Related​Component | Product Related Component | Details of the related components of a product. | Small, 60.0 | 60.0 |
| product​Selling​Model​Options | Product Selling Model Option[] | Details of the product selling model options. | Small, 60.0 | 60.0 |
| product​Specification​Type | Product Specification Type | Details of the product specification type. | Small, 60.0 | 60.0 |
| quantity​Scale​Method | String | Method to scale the quantity of the child product in relation to the quantity of the parent. | Small, 60.0 | 60.0 |