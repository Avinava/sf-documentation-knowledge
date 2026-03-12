---
title: "Assessment Links Input"
domain: health-cloud-object-reference
topic: assessment-links-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.740Z
estimatedTokens: 155
keywords: [Assessment, Links, Input, Associated, assessments, including, category, reason, sequence]
---

# Assessment Links Input

> Associated assessments including id, category, reason and
      sequence.

# Assessment Links Input

Associated assessments including id, category, reason and sequence.

Root XML tag

<assessmentLinks>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| category | String | The category that the supporting content belongs to. | No | 63.0 |
| id | String | The assessment used as the supporting content. | Yes | 55.0 |
| reason | String | The reason why the supporting content is required. | No | 63.0 |
| sequence | String | The sequence number of the content when multiple contents are available. | No | 63.0 |

## Code Examples

```
{
    "id": "0U3SG00000068Cb0AI",
    "category": "0iPSG0000024n0z2AA",
    "reason": "0iPSG0000024n0z2AA",
    "sequence": 333
  }
]
```
