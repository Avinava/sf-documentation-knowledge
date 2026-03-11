---
title: "ConnectApi.OrchestrationStageInstance"
domain: apex-reference
topic: connectapiorchestrationstageinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.917Z
keywords: [ConnectApi.OrchestrationStageInstance, See]
---

# ConnectApi.OrchestrationStageInstance

# ConnectApi.OrchestrationStageInstance

Orchestration stage instance.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| completionTime | String | The duration of the stage in seconds. | 63.0 |
| id | String | ID of the orchestration stage instance. | 54.0 |
| label | String | Orchestration stage instance label. | 54.0 |
| name | String | Orchestration stage instance name. | 54.0 |
| status | ConnectApi.​Orchestration​Status | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | 54.0 |
| stepInstances | List<ConnectApi.​OrchestrationStep​Instance> | Orchestration stage instance steps. | 54.0 |

#### See Also

-   [ConnectApi.OrchestrationInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance.htm "Orchestration instance.")