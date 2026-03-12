---
title: "Extraction Context Attribute"
domain: clm-developer-guide
topic: extraction-context-attribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.510Z
estimatedTokens: 184
keywords: [Extraction, Context, Attribute, Output, representation, mapping]
---

# Extraction Context Attribute

> Output representation of extraction context attribute mapping.

# Extraction Context Attribute

Output representation of extraction context attribute mapping.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attribute​Id | String | ID of the extraction context attribute. | Small, 61.0 | 61.0 |
| attribute​Name | String | Name of the extraction context attribute. | Small, 61.0 | 61.0 |
| description | String | Description of the extraction attribute mapping. | Small, 61.0 | 61.0 |
| isCustom | Boolean | Indicates whether the attribute is a custom field (true) or not false. | Small, 61.0 | 61.0 |
| target​ObjectField | String | Target object field mapped to the attribute. | Small, 61.0 | 61.0 |

## Code Examples

```
{
  "contextAttributeMapping": [
    {
      "attributeName": "ContractName",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": false
    },
    {
      "attributeName": "ContractCustomField",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": true
    },
    {
      "attributeName": "Description",
      "attributeId": "11nxx000001hOozAAE",
      "targetObjectField": "Contract",
      "description": "extract startDate from the document",
      "isCustom": false
    }
  ]
}
```
