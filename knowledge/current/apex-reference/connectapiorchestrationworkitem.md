---
title: "ConnectApi.OrchestrationWorkItem"
domain: apex-reference
topic: connectapiorchestrationworkitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:27.563Z
estimatedTokens: 367
keywords: [ConnectApi.OrchestrationWorkItem, Orchestration, work, item]
---

# ConnectApi.OrchestrationWorkItem

> Orchestration work item.

# ConnectApi.OrchestrationWorkItem

Orchestration work item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| assigneeId | String | ID of the assignee for the orchestration work item. | 54.0 |
| createdDate | Datetime | Date when the orchestration work item was created. | 61.0 |
| description | String | Description of the orchestration work item. | 54.0 |
| flowType | String | Flow type of the orchestration that created the orchestration work item. | 62.0 |
| id | String | ID of the orchestration work item. | 54.0 |
| label | String | Label key for the orchestration work item. | 54.0 |
| lastModifiedDate | Datetime | Date when the work item was last modified. | 61.0 |
| relatedRecordId | String | ID of the record the orchestration work item is related to. | 54.0 |
| screenFlow​DeveloperName | String | Developer name of the screen flow to start when assignees work on the orchestration work item. | 54.0 |
| screenFlowId | String | ID of the screen flow to start when assignees work on the orchestration work item. | 54.0 |
| screenFlowInputs | String | Input parameters for the screen flow. | 54.0 |
| status | ConnectApi.​OrchestrationWork​ItemStatus | Status of the orchestration work item. Values are:AssignedCompleted | 54.0 |

#### See Also

-   [ConnectApi.OrchestrationStepInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_step_instance.htm "Orchestration step instance.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.​OrchestrationWork​ItemStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.OrchestrationStepInstance (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_step_instance.htm)
