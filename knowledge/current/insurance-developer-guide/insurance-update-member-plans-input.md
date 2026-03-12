---
title: "Insurance Update Member Plans Input"
domain: insurance-developer-guide
topic: insurance-update-member-plans-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.908Z
estimatedTokens: 117
keywords: [Insurance, Member, Plans, Input, representation, updating, associated, census]
---

# Insurance Update Member Plans Input

> Input representation for updating the plans that are associated with a census
    member.

# Insurance Update Member Plans Input

Input representation for updating the plans that are associated with a census member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | Group Census Member Plan Input[] | List of plans to add to the member. | Optional | 65.0 |
| deletedPlans | String[] | List of group census member plan IDs to delete. | Optional | 65.0 |

## Code Examples

```
{
  "addedPlans": {
    "values": [
      {
        "contractGroupPlanId": "0rgSG0000000e8jYAA"
      },
      {
        "contractGroupPlanId": "0rgSG0000000eALYAY"
      }
    ]
  },
  "deletedPlans": {
    "values": [
      "0rgSG0000000eALYAY",
      "0rgSG0000000e8jYAA"
    ]
  }
}
```

## Related Topics

- Group Census Member Plan Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_group_census_member_plan_input.htm)
