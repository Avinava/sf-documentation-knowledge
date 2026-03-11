---
title: "getOrchestrationInstanceCollection(relatedRecordId,
      relatedOrchestrationId)"
domain: apex-reference
topic: getorchestrationinstancecollectionrelatedrecordid-relatedorchestrationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.462Z
keywords: [getOrchestrationInstanceCollection, relatedRecordId, relatedOrchestrationId, Get, orchestration, instances, associated, either, Salesforce, record, that’s, configured, context, interactive, steps., API, Version, Requires, Chatter, Signature]
---

# getOrchestrationInstanceCollection(relatedRecordId,
      relatedOrchestrationId)

> Get orchestration instances associated with either a Salesforce record or an
    orchestration that’s configured as context for orchestration interactive steps.

### getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId)

Get orchestration instances associated with either a Salesforce record or an orchestration that’s configured as context for orchestration interactive steps.

#### API Version

66.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrchestrationInstanceCollection getOrchestrationInstanceCollection(String relatedRecordId, String relatedOrchestrationId)

#### Parameters

relatedRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a record configured as a context record for orchestration interactive steps. You must specify either relatedRecordId or relatedOrchestrationId.

relatedOrchestrationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of an orchestration configured as context for orchestration interactive steps. You must specify either relatedRecordId or relatedOrchestrationId.

#### Return Value

Type: [ConnectApi.OrchestrationInstanceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance_collection.htm "Collection of orchestration instances.")