---
title: "getOrchestrationInstance(instanceId)"
domain: apex-reference
topic: getorchestrationinstanceinstanceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.462Z
keywords: [getOrchestrationInstance, instanceId, Get, orchestration, instance, associated, ID., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrchestrationInstance(instanceId)

> Get an orchestration instance associated with an orchestration
      instance ID.

### getOrchestrationInstance(instanceId)

Get an orchestration instance associated with an orchestration instance ID.

#### API Version

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrchestrationInstance getOrchestrationInstance(String instanceId)

#### Parameters

instanceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of orchestration instance to get details for.

#### Return Value

Type: [ConnectApi.OrchestrationInstance](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance.htm "Orchestration instance.")