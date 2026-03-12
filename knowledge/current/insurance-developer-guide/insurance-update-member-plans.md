---
title: "Insurance Update Member Plans"
domain: insurance-developer-guide
topic: insurance-update-member-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.700Z
estimatedTokens: 191
keywords: [Insurance, Member, Plans, Output, representation, operation]
---

# Insurance Update Member Plans

> Output representation for the update member plans operation.

# Insurance Update Member Plans

Output representation for the update member plans operation.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Insurance Error[] | List of errors that occurred for the API request. | Small, 65.0 | 65.0 |
| failedPlans | String[] | List of plan IDs that failed to be updated. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the overall operation is successful (true) or not (false). | Small, 65.0 | 65.0 |
| memberId | String | ID of the group census member. | Small, 65.0 | 65.0 |
| updated​MemberPlans | String[] | List of IDs for the member plan records that are successfully updated. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "errors": [],
  "failedPlans": [],
  "isSuccess": true,
  "memberId": "0r6xx000000001aEAA",
  "updatedMemberPlans": [
    "0r8xx000000003jEAA"
  ]
}
```

## Related Topics

- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
