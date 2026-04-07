---
title: "Auto Assignee Input"
domain: omnistudio
topic: auto-assignee-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:02:50.935Z
estimatedTokens: 141
keywords: [Auto, Assignee, Input, representation, updating]
---

# Auto Assignee Input

> Input representation for updating Auto Assignee.

# Auto Assignee Input

Input representation for updating Auto Assignee.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of assignee to which the new members in an actionable list are automatically assigned. In the case where the typeis user, the userId must be passed in this attribute. | Optional | 59.0 |
| type | String | The type of assignee to which the new members in an actionable list are automatically assigned. | Optional | 59.0 |

## Code Examples

```
{
  "type": "RecordOwner",
  "name": "RecordOwnerName"
}
```
