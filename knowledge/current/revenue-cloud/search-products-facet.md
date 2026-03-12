---
title: "Search Products Facet"
domain: revenue-cloud
topic: search-products-facet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.931Z
estimatedTokens: 175
keywords: [Search, Products, Facet, Output, representation, faceted]
---

# Search Products Facet

> Output representation of the details of the faceted search.

# Search Products Facet

Output representation of the details of the faceted search.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attribute​Type | String | Search attribute type of the facet. | Small, 63.0 | 63.0 |
| display​Name | String | Display name of the facet. | Small, 63.0 | 63.0 |
| display​Rank | Integer | Display rank for the facet. | Small, 63.0 | 63.0 |
| nameOr​Id | String | ID or the internal name of the facet. | Small, 63.0 | 63.0 |
| values | Facet Value[] | Values of the facet found in the search result. Sorted by display name in alphabetical order. | Medium, 63.0 | 63.0 |

## Code Examples

```
"facets": [
    {
      "attributeType": "ProductStandard",
      "displayName": "Product Type",
      "displayRank": 2,
      "nameOrId": "Type",
      "values": [
        {
          "displayName": "Bundle",
          "nameOrId": "Bundle"
        }
      ]
    },
    {
      "attributeType": "ProductDynamicAttribute",
      "displayName": "Display",
      "displayRank": 3,
      "nameOrId": "0tjDU0000003K5BYAU",
      "values": [
        {
          "displayName": "1080p Built-in Display",
          "nameOrId": "1080p Built-in Display"
        },
        {
          "displayName": "2k Built-in Display",
          "nameOrId": "2k Built-in Display"
        },
        {
          "displayName": "4k Built-in Display",
          "nameOrId": "4k Built-in Display"
        }
      ]
    }
  ]
```

## Related Topics

- Facet Value (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_facet_value.htm)
