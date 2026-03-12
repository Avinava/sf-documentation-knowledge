---
title: "Query Context Record Input"
domain: omnistudio
topic: query-context-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.638Z
estimatedTokens: 137
keywords: [Query, Context, Record, Input, representation]
---

# Query Context Record Input

> Input representation of query context record.

# Query Context Record Input

Input representation of query context record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | String[] | List of attributes to be retrieved. | Optional | 58.0 |
| businessObjectTypeFilter | String | Filter based on a business object type. | Optional | 58.0 |
| contextId | String | The ID of the context to be queried. | Required | 58.0 |
| queryPath | String[] | Path to the parent node. | Optional | 58.0 |

## Code Examples

```
{
  "contextId": "7bc695bc-f38b-4a94-8a95-0caa50f3da53"
}
```
