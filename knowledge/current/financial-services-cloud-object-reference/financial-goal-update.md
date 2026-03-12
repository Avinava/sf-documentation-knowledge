---
title: "Financial Goal Update"
domain: financial-services-cloud-object-reference
topic: financial-goal-update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.425Z
estimatedTokens: 327
keywords: [Financial, Goal, members, funding]
---

# Financial Goal Update

> Update a financial goal and its members and funding.

# Financial Goal Update

Update a financial goal and its members and funding.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

JSON example

In this example, carType, role, and FSC9\_\_FinancialAccount\_\_c are custom fields.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addFinancial​GoalFundings | Financial Goal Funding Input[] | Financial Accounts to be added to the Financial Goal. | Optional | 60.0 |
| addFinancial​GoalParties | Financial Goal Party Input[] | Goal members to be added to the Financial Goal. | Optional | 59.0 |
| financialGoal | Financial Goal Input | Financial Goal data. | Required for 59.0, Optional for 60.0 | 59.0 |
| removeFinancial​GoalFundings | Financial Goal Funding Input[] | Financial Accounts to be removed from the Financial Goal. | Optional | 60.0 |
| removeFinancial​GoalParties | Financial Goal Party Input[] | Goal members to be removed from the Financial Goal. | Optional | 59.0 |

Response body for PATCH

[Financial Goal Patch Output](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goal_patch_output.htm "Updated financial goal.")

## Code Examples

```
/connect/financialplanning/financialgoals/goalId
```

```
{
  "financialGoal": {
    "completionDate": "2024-06-01",
    "description": "Cars for commuting",
    "targetAmount": "$55000.00",
    "targetDate": "2024-06-01",
    "customFields": {
      "carType": "New luxury car and used car"
    }
  },
  "addFinancialGoalParties": [
    {
      "accountId": "001xx000003GYyJAAV",
      "customFields": {
        "role": "Auto purchaser daughter"
      }
    }
  ],
  "addFinancialGoalFundings": [
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

- Financial Goal Funding Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_funding_input.htm)
- Financial Goal Party Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_party_input.htm)
- Financial Goal Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_input.htm)
- Financial Goal Patch Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goal_patch_output.htm)
