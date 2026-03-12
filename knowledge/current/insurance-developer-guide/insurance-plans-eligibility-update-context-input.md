---
title: "Insurance Plans Eligibility Update Context Input"
domain: insurance-developer-guide
topic: insurance-plans-eligibility-update-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.852Z
estimatedTokens: 158
keywords: [Insurance, Plans, Eligibility, Context, Input, representation, checking, plan, updating]
---

# Insurance Plans Eligibility Update Context Input

> Input representation for checking plan eligibility by updating an existing
  context.

# Insurance Plans Eligibility Update Context Input

Input representation for checking plan eligibility by updating an existing context.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | Insurance Group Plan Input[] | List of contract group plans to add to the member's enrollment for eligibility checking. | Optional | 66.0 |
| contextId | String | ID of the context. | Required | 66.0 |
| deletedPlans | Insurance Group Plan Input[] | List of contract group plans to remove from the member's enrollment. | Optional | 66.0 |

## Code Examples

```
{
  "contextId": "42ce00ea6a44dcc0d308ba1ea7c4c9bb455bd14bb0405ff03dca1b5371c42cda",
  "addedPlans": [
    {
      "planId": "0gpp00000004C9wAAE",
      "coverages": [
        {
          "planId": "0rgxx0000000001AAA"
        }
      ]
    }
  ],
  "deletedPlans": []
}
```

## Related Topics

- Insurance Group Plan Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_group_plan_input.htm)
