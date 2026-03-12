---
title: "Financial Goals Create Result"
domain: financial-services-cloud-object-reference
topic: financial-goals-create-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.585Z
estimatedTokens: 191
keywords: [Financial, Goals, Result, Created, goal, members]
---

# Financial Goals Create Result

> Created financial goals and goal members.

# Financial Goals Create Result

Created financial goals and goal members.

If creation is successful:

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| financialGoalId | String | ID of the financial goal. | Small, 59.0 | 59.0 |
| financial​GoalParties | String[] | List of member IDs. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Value is true.. | Small, 59.0 | 59.0 |

If creation is unsuccessful:

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the financial goal wasn't created successfully. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Value is false. | Small, 59.0 | 59.0 |
