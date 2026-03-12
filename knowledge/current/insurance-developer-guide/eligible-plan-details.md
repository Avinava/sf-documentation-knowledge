---
title: "Eligible Plan Details"
domain: insurance-developer-guide
topic: eligible-plan-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.441Z
estimatedTokens: 121
keywords: [Eligible, Plan, Output, representation, plans]
---

# Eligible Plan Details

> Output representation for the details of the eligible plans.

# Eligible Plan Details

Output representation for the details of the eligible plans.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| messages | Insurance Message[] | List of informational or error messages related to the eligibility check. | Small, 66.0 | 66.0 |
| plans | Insurance Group Plans[] | List of contract group plans that the member is eligible for. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "messages": [],
  "plans": [{
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
            "isOptional": true,
            "productCategory": "Medical",
            "planName": "plan123"
          }
        ]
      }]
}
```

## Related Topics

- Insurance Message (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_message_output.htm)
- Insurance Group Plans (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_group_plan_output.htm)
