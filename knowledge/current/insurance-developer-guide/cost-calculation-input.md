---
title: "Cost Calculation Input"
domain: insurance-developer-guide
topic: cost-calculation-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:39.701Z
estimatedTokens: 191
keywords: [Cost, Calculation, Input, representation, calculate, brokerage]
---

# Cost Calculation Input

> Input representation of the request to calculate brokerage cost.

# Cost Calculation Input

Input representation of the request to calculate brokerage cost.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Course of action for processing RatePlanLineItems. Valid values:rollup: Calculates premium and roll ups it to Insurance Policy level.calculate: Calculates premium and returns it in the output. | Optional | 63.0 |
| expressionSet​Name | String | Name of the expression set for cost calculation. If not specified, the value from the InsPolicyManagementConfig setup object is taken. | Optional | 63.0 |
| ratePlan​LineItems | List<Map<String, Object>> | List of insurance rate plan line items. | Optional | 63.0 |

## Code Examples

```
{
 "action": "rollup",
 "expressionSetName": "expressionSetName",
 "ratePlanLineItems": [
  {
   "id": "xxxxxx",
   "rate": 100,
   "enrollmentCount": 1000,
   "custom_field_1": "xxxxxx"
  },
  {
   "id": "yyyyy",
   "rate": 50,
   "enrollmentCount": 200,
   "custom_field_1": "xxxxxx"
  }
 ]
}
```
