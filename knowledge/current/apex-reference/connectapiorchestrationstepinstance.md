---
title: "ConnectApi.OrchestrationStepInstance"
domain: apex-reference
topic: connectapiorchestrationstepinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:27.558Z
estimatedTokens: 456
keywords: [ConnectApi.OrchestrationStepInstance, Orchestration, step, instance]
---

# ConnectApi.OrchestrationStepInstance

> Orchestration step instance.

# ConnectApi.OrchestrationStepInstance

Orchestration step instance.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| assignedTo | String | The ID of the user, group, or queue that's assigned to a work item. | 63.0 |
| assigneeType | String | The assignee type associated with a work item. Valid values are:GroupInvalidQueueUser | 63.0 |
| comments | String | The string stored in an output variable with the API name of Comments from a flow called by a completed orchestration step. | 63.0 |
| completedBy | String | The user ID of the user who completed the work item. | 63.0 |
| completionTime | String | The duration of the step in seconds. | 63.0 |
| description | String | The description associated with the orchestration step. | 63.0 |
| id | String | ID of the orchestration step instance. | 54.0 |
| label | String | Orchestration step instance label. | 54.0 |
| name | String | Orchestration step instance name. | 54.0 |
| status | ConnectApi.​Orchestration​Status | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | 54.0 |
| stepType | ConnectApi.​Orchestration​StepType | Type of orchestration step. Values are:AsynchronousBackgroundStepApprovalStepBackgroundStepInteractiveStepManagedContentRoleInteractiveStepManagedContentVariantAutoPublishBackgroundStepManagedContentVariantAutoUnpublishBackgroundStepManagedContentVariantSetLock​BackgroundStepManagedContentVariantSetReady​BackgroundStepMuleSoftStep | 54.0 |
| workItems | List<ConnectApi.​Orchestration​WorkItem> | Orchestration step instance work items. | 54.0 |

#### See Also

-   [ConnectApi.OrchestrationStageInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_stage_instance.htm "Orchestration stage instance.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Orchestration​Status (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​Orchestration​StepType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​Orchestration​WorkItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_work_item.htm)
- ConnectApi.OrchestrationStageInstance (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_stage_instance.htm)
