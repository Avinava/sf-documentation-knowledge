---
title: "Facet Value"
domain: comms-developer-guide
topic: facet-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:39.353Z
estimatedTokens: 100
keywords: [Facet, Output, representation, found, search, result]
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
| nameOr​Id | String | ID or the internal name of the facet value. | Small, 63.0 | 63.0 |

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
