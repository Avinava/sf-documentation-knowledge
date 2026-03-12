---
title: "Financial Goal Input"
domain: financial-services-cloud-object-reference
topic: financial-goal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.336Z
estimatedTokens: 546
keywords: [Financial, Goal, Input, creating, updating]
---

# Financial Goal Input

> Input for creating or updating a financial goal.

# Financial Goal Input

Input for creating or updating a financial goal.

JSON example

In this example, carType is a custom field.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actualAmount | String | The amount currently in the account associated with this goal. | Required for create, optional for update | 59.0 |
| category | String | The category of the goal. | Optional | 60.0 |
| completionDate | String | The date at which this goal reaches the targetAmount. | Required for create, optional for update | 59.0 |
| currencyIsoCode | String | Currency ISO code for the currency fields. | Optional | 60.0 |
| customFields | Map<String, Object> | Any custom fields added for a particular banking institution. | Optional | 59.0 |
| description | String | A description of this goal. | Required for create, optional for update | 59.0 |
| estimatedSuccessPercent | String | The success percentage estimated for the financial goal. | Optional | 60.0 |
| financialPlanId | String | The ID of the associated financial plan. | Optional | 60.0 |
| frequency | String | The frequency at which the money is withdrawn. Values are:MonthlyWeeklyAnnually | Optional | 60.0 |
| initialAmount | String | The starting amount in the account associated with this goal. | Required for create, not editable for update | 59.0 |
| name | String | A name for the goal. | Required for create, optional for update | 59.0 |
| priority | String | The priority of this goal. | Required for create, optional for update | 59.0 |
| startDate | String | The creation date of this goal. | Required for create, not editable for update | 59.0 |
| status | String | The status of this goal's progress. | Required for create, optional for update | 59.0 |
| targetAmount | String | The amount this goal is intended to raise. | Required for create, optional for update | 59.0 |
| targetDate | String | The date at which this goal is intended to reach the targetAmount. | Required for create, optional for update | 59.0 |
| type | String | The goal type, for example Auto or Retirement. | Required for create, optional for update | 59.0 |

## Code Examples

```
{
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
}
```
