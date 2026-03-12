---
title: "Insurance Plan Details"
domain: insurance-developer-guide
topic: insurance-plan-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.641Z
estimatedTokens: 266
keywords: [Insurance, Plan, Output, representation, contract, group, plans]
---

# Insurance Plan Details

> Output representation for contract group plans.

# Insurance Plan Details

Output representation for contract group plans.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Object Map[] | Attributes for the plan. | Small, 65.0 | 65.0 |
| coverages | Insurance Plan Details[] | Coverages for the contract group plan. | Small, 65.0 | 65.0 |
| isOptional | Boolean | Indicates if the plan is optional for the group census member (true) or not (false). | Small, 65.0 | 65.0 |
| isPrimary​Subscribed | Boolean | Indicates if the primary group census member is subscribed to the plan (true) or not (false). | Small, 65.0 | 65.0 |
| isSubscribed | Boolean | Indicates if the group census member is subscribed to the plan (true) or not (false). | Small, 65.0 | 65.0 |
| planDescription | String | Description of the contract group plan. | Small, 65.0 | 65.0 |
| planId | String | ID of the contract group plan. | Small, 65.0 | 65.0 |
| planName | String | Name of the contract group plan. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "attributes": [],
  "coverages": [],
  "isOptional": false,
  "isPrimarySubscribed": true,
  "isSubscribed": true,
  "planDescription": "Gold medical coverage",
  "planId": "0gpp00000004C9wAAE",
  "planName": "Gold Plan"
}
```

## Related Topics

- Object Map (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_object_map_output.htm)
