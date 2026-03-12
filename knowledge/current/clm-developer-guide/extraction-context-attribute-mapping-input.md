---
title: "Extraction Context Attribute Mapping Input"
domain: clm-developer-guide
topic: extraction-context-attribute-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.166Z
estimatedTokens: 114
keywords: [Extraction, Context, Attribute, Mapping, Input, representation, mappings]
---

# Extraction Context Attribute Mapping Input

> Input representation of attribute mappings used in the extraction context.

# Extraction Context Attribute Mapping Input

Input representation of attribute mappings used in the extraction context.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attribute​Id | String | ID of the context attribute mapping required for update. | Required | 61.0 |
| description | String | Description of what the attribute maps to. | Optional | 61.0 |

## Code Examples

```
{
  "contextAttributeMapping": [
    {
      "attributeId": "11nxx000001hOozAAE",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAV",
      "description": "extract startDate from the document"
    },
    {
      "attributeId": "11nxx000001hOozAAR",
      "description": "extract startDate from the document"
    }
  ]
}
```
