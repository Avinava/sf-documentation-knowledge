---
title: "Orchestration Stage Instance"
domain: chatterapi
topic: orchestration-stage-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.945Z
estimatedTokens: 232
keywords: [Orchestration, Stage, Instance]
---

# Orchestration Stage Instance

> Orchestration stage instance.

# Orchestration Stage Instance

Orchestration stage instance.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| completionTime | String | The duration of the stage in seconds. | Small, 63.0 | 63.0 |
| id | String | ID of the orchestration stage instance. | Small, 54.0 | 54.0 |
| label | String | Orchestration stage instance label. | Small, 54.0 | 54.0 |
| name | String | Orchestration stage instance name. | Small, 54.0 | 54.0 |
| status | String | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | Small, 54.0 | 54.0 |
| stepInstances | Orchestration Step Instance[] | Orchestration stage instance steps. | Small, 54.0 | 54.0 |

#### See Also

-   [Orchestration Instance](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance.htm "Orchestration instance.")

## Related Topics

- Orchestration Step Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_step_instance.htm)
- Orchestration Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance.htm)
