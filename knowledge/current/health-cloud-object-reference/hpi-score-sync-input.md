---
title: "HPI Score Sync Input"
domain: health-cloud-object-reference
topic: hpi-score-sync-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.084Z
estimatedTokens: 130
keywords: [HPI, Score, Sync, Input, representation, synchronization]
---

# HPI Score Sync Input

> Input representation of the score synchronization
    request.

# HPI Score Sync Input

Input representation of the score synchronization request.

Root XML tag

<HpiScoreSyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| categoryName | String | The name of the score category for which the score synchronization is triggered. | Required | 55.0 |
| debugMode | Boolean | For internal use only. | Optional | 55.0 |
| timestamp | String | For internal use only. | Optional | 55.0 |

## Code Examples

```
{
   "categoryName" : "HPI"
}
```
