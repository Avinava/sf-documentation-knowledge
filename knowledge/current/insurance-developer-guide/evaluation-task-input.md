---
title: "Evaluation Task Input"
domain: insurance-developer-guide
topic: evaluation-task-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.723Z
estimatedTokens: 125
keywords: [Evaluation, Task, Input, representation]
---

# Evaluation Task Input

> Input representation details of the evaluation task.

# Evaluation Task Input

Input representation details of the evaluation task.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| flowApiName | String | API name of the associated flow when the task type is AutoTask.. | Required | 63.0 |
| name | String | Name of the evaluation task. | Required | 63.0 |
| type | String | Type of the evaluation task. Possible values are:AutoTaskManual | Required | 63.0 |

## Code Examples

```
"tasks": [
       {
       "name": "Vehicle ineligible",
       "type": "AutoTask",
       "flowApiName": "Mail Notification - Vehicle ineligible",
       }
       ]
```
