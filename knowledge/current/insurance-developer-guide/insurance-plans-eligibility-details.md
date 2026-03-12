---
title: "Insurance Plans Eligibility Details"
domain: insurance-developer-guide
topic: insurance-plans-eligibility-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.648Z
estimatedTokens: 190
keywords: [Insurance, Plans, Eligibility, Output, representation, plan, check]
---

# Insurance Plans Eligibility Details

> Output representation of the plan eligibility check for an.

# Insurance Plans Eligibility Details

Output representation of the plan eligibility check for an.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that's used for the eligibility check. | Small, 66.0 | 66.0 |
| errors | Insurance Error[] | List of errors that occurred during the eligibility check. | Small, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | Small, 66.0 | 66.0 |
| memberId | String | ID of the group census member. | Small, 66.0 | 66.0 |
| planEligibility​Details | Eligible Plan Details | Details of the eligible plans. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "contextId": "42ce00ea6a44dcc0d308ba1ea7c4c9bb455bd14bb0405ff03dca1b5371c42cda",
  "isSuccess": true,
  "errors": [],
  "memberId": "0r6RM0000000h1pYAA",
  "planEligibilityDetails": {
    "plans": [
      {
        "planId": "plan123",
        "isOptional": false,
        "productCategory": "Medical",
        "planName": "plan123",
        "attributes": [],
        "coverages": [
          {
            "planId": "coverageA",
            "isOptional": false,
            "productCategory": "Medical",
            "planName": "plan123"
          },
          {
            "planId": "coverageB",
            "isOptional": false,
            "productCategory": "Medical",
            "planName": "plan123"
          }
        ]
      }
    ]
  }
}
```

## Related Topics

- Insurance Error (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Eligible Plan Details (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_eligible_plan_details_output.htm)
