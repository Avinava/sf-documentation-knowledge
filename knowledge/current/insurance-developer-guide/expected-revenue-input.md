---
title: "Expected Revenue Input"
domain: insurance-developer-guide
topic: expected-revenue-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:39.727Z
estimatedTokens: 162
keywords: [Expected, Revenue, Input, representation, calculate, brokerage]
---

# Expected Revenue Input

> Input representation of the request to calculate expected brokerage revenue.

# Expected Revenue Input

Input representation of the request to calculate expected brokerage revenue.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expressionSetName | String | Name of expression set to be used for expected revenue calculation. If unspecified, a value from the InsPolicyManagementConfig setup object is taken. | Optional | 63.0 |
| ratePlanCommissions | List | List of rate plan commissions to be used for expected revenue calculation. This is a valid input only when businessSObjectType is InsuranceRatePlan. | Optional | 63.0 |

## Code Examples

```
{
  "expressionSetName": "expressionSetName",
  "ratePlanCommissions": [
    {
      "Name": "RPC-1",
      "Type": "GradedPercent",
      "amountStartRange": 0,
      "amountEndRange": 1000
    },
    {
      "Name": "RPC-1",
      "Type": "GradedPercent",
      "amountStartRange": 1001,
      "amountEndRange": 100000
    }
  ]
}
```
