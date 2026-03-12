---
title: "Insurance Plans Eligibility Create Context Input"
domain: insurance-developer-guide
topic: insurance-plans-eligibility-create-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.854Z
estimatedTokens: 100
keywords: [Insurance, Plans, Eligibility, Context, Input, representation, checking, plan, creating, new]
---

# Insurance Plans Eligibility Create Context Input

> Input representation for checking plan eligibility by creating a new context.

# Insurance Plans Eligibility Create Context Input

Input representation for checking plan eligibility by creating a new context.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| plans | Insurance Group Plan Input[] | List of contract group plans for initial eligibility validation. | Required | 66.0 |

## Code Examples

```
{
  "plans": [
    {
      "planId": "0gpp00000004C9wAAE",
      "coverages": []
    }
  ]
}
```

## Related Topics

- Insurance Group Plan Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_group_plan_input.htm)
