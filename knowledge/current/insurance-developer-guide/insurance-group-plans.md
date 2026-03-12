---
title: "Insurance Group Plans"
domain: insurance-developer-guide
topic: insurance-group-plans
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.593Z
estimatedTokens: 205
keywords: [Insurance, Group, Plans, Output, representation, plan]
---

# Insurance Group Plans

> Output representation of an insurance group plan.

# Insurance Group Plans

Output representation of an insurance group plan.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Insurance Object Map[] | List of attributes that are associated with the contract group plan. | Small, 66.0 | 66.0 |
| coverages | Insurance Group Plans[] | List of coverages that are associated with this plan. | Small, 66.0 | 66.0 |
| isOptional | Boolean | Indicates whether the plan is optional (true) or not (false). | Small, 66.0 | 66.0 |
| planId | String | ID of the contract group plan. | Small, 66.0 | 66.0 |
| planName | String | Name of the contract group plan. | Small, 66.0 | 66.0 |
| productCategory | String | Category of the contract group plan. | Small, 66.0 | 66.0 |

## Code Examples

```
{
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
```

## Related Topics

- Insurance Object Map (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_object_map_output.htm)
