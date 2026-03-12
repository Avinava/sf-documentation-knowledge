---
title: "Financial Goal List Create Input"
domain: financial-services-cloud-object-reference
topic: financial-goal-list-create-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.339Z
estimatedTokens: 103
keywords: [Financial, Goal, Input, creating, multiple, goals, members]
---

# Financial Goal List Create Input

> Input for creating multiple financial goals with goal members.

# Financial Goal List Create Input

Input for creating multiple financial goals with goal members.

JSON example

In this example, carType and role are custom fields.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| financialGoals | Financial Goal Create Input[] | List of goals and goal members to be created. | Required | 59.0 |

## Code Examples

```
{
  "financialGoals": [
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
      ]
    }
  ]
}
```

## Related Topics

- Financial Goal Create Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_financial_goal_create_input.htm)
