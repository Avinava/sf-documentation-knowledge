---
title: "Facetable Attribute Input"
domain: chatterapi
topic: facetable-attribute-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.656Z
estimatedTokens: 275
keywords: [Facetable, Attribute, Input, search]
---

# Facetable Attribute Input

> Facetable attribute for search.

# Facetable Attribute Input

Facetable attribute for search.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| displayRank | Integer | Display rank of the facet. Valid values are from 1 through 50. Values must be unique and sequential. | Required | 49.0 |
| displayType | String | Display type of the facet. Values are:CategoryTreeMultiSelect | Required | 49.0 |
| nameOrId | String | Developer name of the attribute. In version 49.0 and later, the ID of the attribute isn’t supported. | Required | 49.0 |
| type | String | Type of attribute. Values are:CustomProductAttributeProductCategoryStandardWhen updating facetable attributes, you must include a ProductCategory facet with nameOrId set to Id and displayType set to categoryTree, as shown in the JSON example. | Required | 49.0 |

#### See Also

-   [Facetable Attributes Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_facetable_attributes_collection_input.htm "Collection of facetable settings for search attributes.")

## Code Examples

```
{
   "type" : "ProductCategory",
   "nameOrId" : "Id",
   "displayRank" : "1",
   "displayType" : "CategoryTree"
}
```

## Related Topics

- Facetable Attributes Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_facetable_attributes_collection_input.htm)
