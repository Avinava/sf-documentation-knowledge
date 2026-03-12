---
title: "Financial Goal Funding Input"
domain: financial-services-cloud-object-reference
topic: financial-goal-funding-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.328Z
estimatedTokens: 125
keywords: [Financial, Goal, Funding, Input, Accounts, fund]
---

# Financial Goal Funding Input

> Input for Financial Accounts that fund the Financial Goal.

# Financial Goal Funding Input

Input for Financial Accounts that fund the Financial Goal.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount funded by the funding source. | Required | 60.0 |
| currencyIsoCode | String | Currency ISO code for the currency fields. | Optional | 60.0 |
| customFields | Map<String, Object> | Financial Goal funding custom fields. | Optional | 60.0 |

## Code Examples

```
{
  "financialGoalFundings": [
    {
      "amount": 1000,
      "currencyIsoCode": "USD",
      "customFields": {
        "FSC9__FinancialAccount__c": "a0HSG0000000AfJ2AU"
      }
    },
    {
      "amount": 2000,
      "currencyIsoCode": "USD",
      "customFields": {
        "FSC9__FinancialAccount__c": "a0HSG0000000AfJ2AV"
      }
    }
  ]
}
```
