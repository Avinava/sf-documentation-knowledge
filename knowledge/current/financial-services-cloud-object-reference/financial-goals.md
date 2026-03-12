---
title: "Financial Goals"
domain: financial-services-cloud-object-reference
topic: financial-goals
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.433Z
estimatedTokens: 192
keywords: [Financial, Goals, goal, members, funding]
---

# Financial Goals

> Create financial goals, goal members, and goal funding.

# Financial Goals

Create financial goals, goal members, and goal funding.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

In this example, carType and role are custom fields.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| financialGoals | Financial Goal Create Input[] | List of goals and goal members to be created. | Required | 59.0 |

Response body for POST

[Financial Goals Create Output](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goals_create_output.htm "Container for created financial goals and goal members.")

## Code Examples

```
/connect/financialplanning/financialgoals
```

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
- Financial Goals Create Output (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_responses_financial_goals_create_output.htm)
