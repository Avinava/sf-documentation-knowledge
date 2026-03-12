---
title: "Financial Goal Create Input"
domain: financial-services-cloud-object-reference
topic: financial-goal-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.326Z
estimatedTokens: 177
keywords: [Financial, Goal, Input, creating, members, funding]
---

# Financial Goal Create Input

> Input for creating a single financial goal with goal members and funding.

# Financial Goal Create Input

Input for creating a single financial goal with goal members and funding.

JSON example

In this example, carType, role, and FSC9\_\_FinancialAccount\_\_c are custom fields.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| financialGoal | Financial Goal Input | Financial Goal data. | At least one required | 59.0 |
| financial​GoalFundings | Financial Goal Funding Input[] | Financial Accounts that fund the Financial Goal. | Optional | 60.0 |
| financial​GoalParties | Financial Goal Party Input[] | Goal members to be included in the Financial Goal. | At least one per goal required | 59.0 |

## Code Examples

```
{
  "financialGoal": {
    "actualAmount": "$1000.00",
    "completionDate": "2024-05-01",
    "initialAmount": "$500.00",
    "description": "Car for commuting",
    "priority": "P1",
    "startDate": "2023-05-01",
    "status": "InProgress",
    "targetAmount": "$50000.00",
    "targetDate": "2024-05-01",
    "name": "Goal1",
    "type": "Auto",
    "customFields": {
      "carType": "New luxury car"
    }
  },
  "financialGoalParties": [
    {
      "accountId": "001xx000003GYyJAAW",
      "customFields": {
        "role": "Auto purchaser"
      }
    },
    {
      "accountId": "001xx000005dJCxYAM",
      "customFields": {
        "role": "Auto purchaser partner"
      }
    }
  ],
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

## Related Topics

- Financial Goal Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_input.htm)
- Financial Goal Funding Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_funding_input.htm)
- Financial Goal Party Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_party_input.htm)
