---
title: "Orchestration Instance"
domain: chatterapi
topic: orchestration-instance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.939Z
estimatedTokens: 307
keywords: [Orchestration, Instance]
---

# Orchestration Instance

> Orchestration instance.

# Orchestration Instance

Orchestration instance.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| flowDefinition​DeveloperName | String | Developer name of the flow definition. | Small, 54.0 | 54.0 |
| flowDefinitionId | String | ID of the flow definition. | Small, 54.0 | 54.0 |
| flowDefinitionName | String | Name of the flow definition. | Small, 54.0 | 54.0 |
| id | String | ID of the orchestration instance. | Small, 54.0 | 54.0 |
| interviewId | String | ID of the interview to resume. | Small, 54.0 | 54.0 |
| stageInstances | Orchestration Stage Instance[] | Orchestration stage instances. | Small, 54.0 | 54.0 |
| status | String | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | Small, 54.0 | 54.0 |

#### See Also

-   [Orchestration Instance Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance_collection.htm "Collection of orchestration instances.")

-   [Orchestration Instance Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_interaction_orchestration_instance_detail.htm "Get orchestration instance details.")

## Related Topics

- Orchestration Stage Instance (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_stage_instance.htm)
- Orchestration Instance Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_flow_orchestration_instance_collection.htm)
- Orchestration Instance Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_interaction_orchestration_instance_detail.htm)
