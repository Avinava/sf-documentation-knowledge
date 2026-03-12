---
title: "Metadata Detail"
domain: omnistudio
topic: metadata-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.384Z
estimatedTokens: 121
keywords: [Metadata, Detail, Output, representation, metadata, detail, request.]
---

# Metadata Detail

> Output representation of the metadata detail request.

# Metadata Detail

Output representation of the metadata detail request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| column | String | Developer name or API name of the configured object's column on which a quick action is performed. | Small, 58.0 | 58.0 |
| label | String | Label name of the configured object's column on which a quick action is performed. | Small, 58.0 | 58.0 |

## Code Examples

```
"metadataDetailRepresentation": [
        {
          "column": "Phone",
          "label": "Account Phone"
        }
        {
          "column": "Home_Phone",
          "label": "Home Phone"
        }
      ]
```
