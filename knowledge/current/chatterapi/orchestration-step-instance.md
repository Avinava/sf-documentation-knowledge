---
title: "Orchestration Step Instance"
domain: chatterapi
topic: orchestration-step-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.952Z
estimatedTokens: 485
keywords: [Orchestration, Step, Instance]
---

# Orchestration Step Instance

> Orchestration step instance.

# Orchestration Step Instance

Orchestration step instance.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| assignedTo | String | The ID of the user, group, or queue that's assigned to a work item. | Small, 63.0 | 63.0 |
| assigneeType | String | The assignee type associated with a work item. Valid values are:GroupInvalidQueueUser | Small, 63.0 | 63.0 |
| comments | String | The string stored in an output variable with the API name of Comments from a flow called by a completed orchestration step. | Small, 63.0 | 63.0 |
| completedBy | String | The user ID of the user who completed the work item. | Small, 63.0 | 63.0 |
| completionTime | String | The duration of the step in seconds. | Small, 63.0 | 63.0 |
| description | String | The description associated with the orchestration step. | Small, 63.0 | 63.0 |
| id | String | ID of the orchestration step instance. | Small, 54.0 | 54.0 |
| label | String | Orchestration step instance label. | Small, 54.0 | 54.0 |
| name | String | Orchestration step instance name. | Small, 54.0 | 54.0 |
| status | String | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | Small, 54.0 | 54.0 |
| stepType | String | Type of orchestration step. Values are:AsynchronousBackgroundStepApprovalStepBackgroundStepInteractiveStepManagedContentRoleInteractiveStepManagedContentVariantAutoPublishBackgroundStepManagedContentVariantAutoUnpublishBackgroundStepManagedContentVariantSetLock​BackgroundStepManagedContentVariantSetReady​BackgroundStepMuleSoftStep | Small, 54.0 | 54.0 |
| workItems | Orchestration Work Item[] | Orchestration step instance work items. | Small, 54.0 | 54.0 |

#### See Also

-   [Orchestration Stage Instance](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_stage_instance.htm "Orchestration stage instance.")

## Related Topics

- Orchestration Work Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_work_item.htm)
- Orchestration Stage Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_stage_instance.htm)
