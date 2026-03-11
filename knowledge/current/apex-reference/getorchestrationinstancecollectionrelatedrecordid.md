---
title: "getOrchestrationInstanceCollection(relatedRecordId)"
domain: apex-reference
topic: getorchestrationinstancecollectionrelatedrecordid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.462Z
keywords: [getOrchestrationInstanceCollection, relatedRecordId, Get, orchestration, instances, associated, Salesforce, record, that’s, configured, context, interactive, steps., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getOrchestrationInstanceCollection(relatedRecordId)

> Get orchestration instances associated with a Salesforce record that’s
      configured as a context record for orchestration interactive steps.

### getOrchestrationInstanceCollection(relatedRecordId)

Get orchestration instances associated with a Salesforce record that’s configured as a context record for orchestration interactive steps.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrchestrationInstanceCollection getOrchestrationInstanceCollection(String relatedRecordId)

#### Parameters

relatedRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a record configured as a context record for orchestration interactive steps.

#### Return Value

Type: [ConnectApi.OrchestrationInstanceCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance_collection.htm "Collection of orchestration instances.")