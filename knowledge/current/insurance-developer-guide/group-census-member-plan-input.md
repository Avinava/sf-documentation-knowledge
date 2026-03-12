---
title: "Group Census Member Plan Input"
domain: insurance-developer-guide
topic: group-census-member-plan-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.747Z
estimatedTokens: 150
keywords: [Group, Census, Member, Plan, Input, representation, that's, associated]
---

# Group Census Member Plan Input

> Input representation for a single plan that's associated with a group census
  member.

# Group Census Member Plan Input

Input representation for a single plan that's associated with a group census member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contractGroupPlanId | String | ID of the contract group plan. | Required | 65.0 |
| groupCensusMemberId | String | ID of the group census member. | Optional | 65.0 |
| id | String | ID of the group census member plan record. | Required to update plan | 65.0 |
| name | String | Name of the group census member plan. | Optional | 65.0 |

## Code Examples

```
{
  "contractGroupPlanId": "0s1xx000000001aEAA",
  "name": "Gold Tier Medical Plan"
}
```
