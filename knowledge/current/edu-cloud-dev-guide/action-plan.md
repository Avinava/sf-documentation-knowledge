---
title: "Action Plan"
domain: edu-cloud-dev-guide
topic: action-plan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:24.954Z
estimatedTokens: 254
keywords: [Action, Plan, Output, representation, individual, hold, result, items]
---

# Action Plan

> Output representation of the action plan information related to individual hold result
    items.

# Action Plan

Output representation of the action plan information related to individual hold result items.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| allowOverride | Boolean | Indicates whether overrides are allowed for the object (true) or not (false). | Big, 64.0 | 64.0 |
| endDate | String | End date of the task or project. | Big, 64.0 | 64.0 |
| id | String | Unique ID for the object. | Big, 64.0 | 64.0 |
| name | String | Name associated with the object. | Big, 64.0 | 64.0 |
| numberOf​OverdueTasks | Integer | Number of tasks that are overdue. | Big, 64.0 | 64.0 |
| numberOfTasks | Integer | Total number of tasks associated with the object. | Big, 64.0 | 64.0 |
| startDate | String | Start date of the task or project. | Big, 64.0 | 64.0 |
| status | String | Current status of the object.Valid values are:ActiveInactive | Big, 64.0 | 64.0 |
| tasks | Task[] | Task(s) associated with the action plan. | Big, 64.0 | 64.0 |

## Related Topics

- Task (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_tas.htm)
