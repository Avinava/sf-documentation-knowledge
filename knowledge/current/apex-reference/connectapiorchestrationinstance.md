---
title: "ConnectApi.OrchestrationInstance"
domain: apex-reference
topic: connectapiorchestrationinstance
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.911Z
keywords: [ConnectApi.OrchestrationInstance, See]
---

# ConnectApi.OrchestrationInstance

# ConnectApi.OrchestrationInstance

Orchestration instance.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| flowDefinition​DeveloperName | String | Developer name of the flow definition. | 54.0 |
| flowDefinitionId | String | ID of the flow definition. | 54.0 |
| flowDefinitionName | String | Name of the flow definition. | 54.0 |
| id | String | ID of the orchestration instance. | 54.0 |
| interviewId | String | ID of the interview to resume. | 54.0 |
| stageInstances | List<ConnectApi.​OrchestrationStage​Instance> | Orchestration stage instances. | 54.0 |
| status | ConnectApi.​Orchestration​Status | Status of the orchestration instance. Values are:CanceledCompletedDiscontinuedErrorInProgressNotStartedSuspended | 54.0 |

#### See Also

-   [ConnectApi.OrchestrationInstanceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance_collection.htm "Collection of orchestration instances.")
    
-   [getOrchestrationInstanceCollection(relatedRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_1 "Get orchestration instances associated with a Salesforce record that’s configured as a context record for orchestration interactive steps.")
    
-   [getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_2 "Get orchestration instances associated with either a Salesforce record or an orchestration that’s configured as context for orchestration interactive steps.")