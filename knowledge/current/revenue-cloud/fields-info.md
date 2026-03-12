---
title: "Fields Info"
domain: revenue-cloud
topic: fields-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.423Z
estimatedTokens: 226
keywords: [Info, Output, representation, metadata]
---

# Fields Info

> Output representation of the metadata fields in an object.

# Fields Info

Output representation of the metadata fields in an object.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| customField​Id | String | ID of the custom field. | Small, 62.0 | 62.0 |
| dataType | String | Type of data. | Small, 62.0 | 62.0 |
| is​Configurable | Boolean | Reserved for internal use. | Small, 62.0 | 62.0 |
| isFacetable​Configurable | Boolean | Indicates whether the field is facetable (true) or not (false). | Small, 63.0 | Small, 63.0 |
| isSearchable​Configurable | Boolean | Indicates whether the field is searchable (true) or not (false). | Small, 63.0 | Small, 63.0 |
| label | String | Label of the object field. | Small, 62.0 | 62.0 |
| name | String | Name of the object field. | Small, 62.0 | 62.0 |
| type | String | Type of the object field. | Small, 62.0 | 62.0 |

## Code Examples

```
"fields": [
          {
            "dataType": "text",
            "isFacetableConfigurable": true,
            "isSearchableConfigurable": false,
            "label": "Product Name",
            "name": "Name",
            "type": "Standard"
          },
          {
            "dataType": "multilinetext",
            "isFacetableConfigurable": false,
            "isSearchableConfigurable": true,
            "label": "Product Description",
            "name": "Description",
            "type": "Standard"
          }
        ]
```
