---
title: "Qualification Context"
domain: revenue-cloud
topic: qualification-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:40.758Z
estimatedTokens: 116
keywords: [Qualification, Context, product]
---

> Output representation of the details about the product qualification.

# Qualification Context

Output representation of the details about the product qualification.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isQualified | Boolean | Indicates whether the product is qualified (true) or not (false). | Small, 67.0 | 67.0 |
| reason | String | Specifies the reason for product qualification or disqualification. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "qualificationContext": {
    "isQualified": true
  }
}
```
