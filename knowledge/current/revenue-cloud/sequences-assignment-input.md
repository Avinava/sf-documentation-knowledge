---
title: "Sequences Assignment Input"
domain: revenue-cloud
topic: sequences-assignment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.325Z
estimatedTokens: 164
keywords: [Sequences, Assignment, Input, representation, target, objects, sequence, pattern, assigned]
---

# Sequences Assignment Input

> Input representation of the details of the target objects to which the sequence pattern
    values are assigned.

# Sequences Assignment Input

Input representation of the details of the target objects to which the sequence pattern values are assigned.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sequence​PolicyId | String | ID of the sequence policy. | Optional | 65.0 |
| shouldPublish​Platform​Event | Boolean | Indicates whether to publish a platform event when a sequence is assigned to a target record (true) or not (false). | Optional | 65.0 |
| target​ObjectIds | String[] | List of records to which the sequence pattern values are assigned. | Required | 65.0 |

## Code Examples

```
{
  "targetObjectIds": [
    "3ttxx00000005nhAAA",
    "3ttxx00000006bhAAA"
  ],
  "sequencePolicyId": "1Vdxx0000004CFU"
}
```
