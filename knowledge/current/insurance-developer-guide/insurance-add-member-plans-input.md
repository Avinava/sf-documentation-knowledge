---
title: "Insurance Add Member Plans Input"
domain: insurance-developer-guide
topic: insurance-add-member-plans-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.781Z
estimatedTokens: 89
keywords: [Insurance, Add, Member, Plans, Input, representation, adding, census]
---

# Insurance Add Member Plans Input

> Input representation for adding plans to a census member.

# Insurance Add Member Plans Input

Input representation for adding plans to a census member.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| groupCensusMemberPlans | Group Census Member Plan Input[] | List of plans to add to the member. | Required | 65.0 |

## Code Examples

```
{
  "groupCensusMemberPlans": {
    "values": [
      {
        "contractGroupPlanId": "0rgSG0000000e8jYAA"
      },
      {
        "contractGroupPlanId": "0rgSG0000000eALYAY"
      }
    ]
  }
}
```

## Related Topics

- Group Census Member Plan Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_group_census_member_plan_input.htm)
