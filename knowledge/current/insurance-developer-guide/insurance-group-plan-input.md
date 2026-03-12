---
title: "Insurance Group Plan Input"
domain: insurance-developer-guide
topic: insurance-group-plan-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.831Z
estimatedTokens: 112
keywords: [Insurance, Group, Plan, Input, representation, census, member, plans, their, coverages]
---

# Insurance Group Plan Input

> Input representation for group census member plans and their coverages.

# Insurance Group Plan Input

Input representation for group census member plans and their coverages.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| coverages | Insurance Group Plan Input[] | List of coverages that are associated with this plan. | Optional | 65.0 |
| planId | String | ID of the contract group plan or coverage. | Required | 65.0 |

## Code Examples

```
{
  "planId": "0gpp00000004C9wAAE",
  "coverages": [
    {
      "planId": "0gqp00000004C9wAAE"
    }
  ]
}
```
