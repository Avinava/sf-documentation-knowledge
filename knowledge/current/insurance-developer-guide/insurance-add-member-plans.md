---
title: "Insurance Add Member Plans"
domain: insurance-developer-guide
topic: insurance-add-member-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.520Z
estimatedTokens: 162
keywords: [Insurance, Add, Member, Plans, Output, representation, operation]
---

# Insurance Add Member Plans

> Output representation for the add member plans operation.

# Insurance Add Member Plans

Output representation for the add member plans operation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | List of errors that occurred during the API operation. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the API executed successfully (true) or not (false). | Small, 65.0 | 65.0 |
| memberId | String | ID of the group census member. | Small, 65.0 | 65.0 |
| memberPlans | String[] | List of IDs for the member plans that are successfully added. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "isSuccess": true,
  "memberId": "0r6xx000000001aEAA",
  "memberPlans": [
    "0r8xx000000004kEAA",
    "0r8xx000000005lEAA"
  ]
}
```

## Related Topics

- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
