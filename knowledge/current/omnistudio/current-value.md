---
title: "Current Value"
domain: omnistudio
topic: current-value
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.668Z
estimatedTokens: 104
keywords: [Current, Output, representation, guardrail, row, level]
---

# Current Value

> Output representation of the current value of the guardrail at a row level.

# Current Value

Output representation of the current value of the guardrail at a row level.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| currentValue | String | Current value at a row-level. | Small, 63.0 | 63.0 |
|  | String | Unique identifier name of the sObject that the current value is provided from. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "values": {
    "currentValue": "50"
  }
}
```
