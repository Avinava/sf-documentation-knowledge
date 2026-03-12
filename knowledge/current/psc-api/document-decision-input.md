---
title: "Document Decision Input"
domain: psc-api
topic: document-decision-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.013Z
estimatedTokens: 101
keywords: [Document, Decision, Input, representation]
---

# Document Decision Input

> Input representation of the Document Decision request.

# Document Decision Input

Input representation of the Document Decision request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | List<Map<String, Object>> | List of inputs passed to Decision Table. Each key is a Decision Table field name, and each value is valid for that field. | Required | 59.0 |

## Code Examples

```
{
  "inputs": [
    {
      "Country": "USA",
      "State": "CA"
    }
  ]
}
```
