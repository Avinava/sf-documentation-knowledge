---
title: "Action Plan Output"
domain: psc-api
topic: action-plan-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.635Z
estimatedTokens: 156
keywords: [Action, Plan, Output, representation, record]
---

# Action Plan Output

> Output representation of an Action Plan record.

# Action Plan Output

Output representation of an Action Plan record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionPlanId | String | ID of the created action plan. | Small, 57.0 | 57.0 |
| isSuccess | Boolean | Indicates whether the create request is successful (true) or not (false). | Small, 57.0 | 57.0 |
| message | String | Message of the request that provides information about the request execution status. | Small, 57.0 | 57.0 |
| statusCode | String | Status code of the create request. | Small, 57.0 | 57.0 |

## Code Examples

```
{
   "statusCode":"200",
   "actionPlanId":"1stTP000000000aYAA",
   "message":"Action plan created successfully",
   "isSuccess":true
}
```
