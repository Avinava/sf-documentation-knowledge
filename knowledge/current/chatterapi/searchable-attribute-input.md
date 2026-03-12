---
title: "Searchable Attribute Input"
domain: chatterapi
topic: searchable-attribute-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.805Z
estimatedTokens: 198
keywords: [Searchable, Attribute, Input]
---

# Searchable Attribute Input

> Searchable attribute.

# Searchable Attribute Input

Searchable attribute.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSearchable | Boolean | Specifies whether the attribute is searchable (true) or not (false). Default value is true. | Optional | 49.0 |
| nameOrId | String | Developer name of the attribute. In version 49.0 and later, the ID of the attribute isn’t supported. | Required | 49.0 |
| type | String | Type of attribute. Values are:CustomProductAttributeProductCategoryStandard | Required | 49.0 |

#### See Also

-   [Searchable Attributes Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_searchable_attributes_collection_input.htm "Collection of searchable attributes.")

## Code Examples

```
{
   "type" : "Standard",
   "nameOrId" : "Description",
   "isSearchable" : true
   }
```

## Related Topics

- Searchable Attributes Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_searchable_attributes_collection_input.htm)
