---
title: "Facet Value"
domain: revenue-cloud
topic: facet-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.714Z
estimatedTokens: 100
keywords: [Facet, Output, representation, facet, values, found, search, result.]
---

# Facet Value

> Output representation of the facet values found in the search result.

# Facet Value

Output representation of the facet values found in the search result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| display​Name | String | Display name of the facet value. | Small, 63.0 | 63.0 |
| nameOr​Id | String | Facet value name or ID. Reserved for internal use. | Small, 63.0 | 63.0 |
| product​Count |  | Number of products in the search result that match the facet value. | Small, 63.0 | 63.0 |

## Code Examples

```
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
```

```
"values": [
        {
          "displayName": "Simple",
          "nameOrId": "Simple",
          "productCount": 9
        }
      ]
```
