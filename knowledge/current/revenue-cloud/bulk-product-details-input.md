---
title: "Bulk Product Details Input"
domain: revenue-cloud
topic: bulk-product-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.198Z
keywords: [Bulk, Product, Details, Input]
---

# Bulk Product Details Input

# Bulk Product Details Input

Input representation of the request to retrieve the details of multiple products.

JSON example

```

```

This example shows a sample request to fetch data from Enterprise Product Catalog.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
| additional​Fields | Map<String, Additional Fields Input> | Map of object and list of additional standard or custom fields to be included in the response.The supported objects are:Product2ProductAttributeDefinition—If the fields defined for the ProductAttributeDefinition object aren’t available for the ProductClassificationAttr object, then the API request fails. | Optional | 61.0 |
| catalogSystems | String[] | Name of the catalog system. Valid values are:epc—Enterprise Product Catalogpcm—Product Catalog ManagementAlthough this property accepts a list, you can pass only one value. If you don’t specify a value, the default behavior is to fetch data from the pcm catalog. | Optional | 66.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 61.0 |
| language | String | Custom language that you can specify to get translated data for the fields of an object that's enabled for translation. See Translate Product and Product Category Data. | Optional | 64.0 |
| product​Ids | String[] | List of product IDs that details must be returned for.If any product ID is blank, invalid, or not found, then the request is processed with valid and available product IDs. | Required | 61.0 |
| upto​Level | Integer | Hierarchy level to follow to return the product details. For a bundle, this property determines the number of levels of child components to be returned. You can specify up to a hierarchy level of 1.If unspecified, the default level is the full bundle hierarchy. | Optional | 61.0 |