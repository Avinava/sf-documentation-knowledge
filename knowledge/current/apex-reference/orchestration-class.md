---
title: "Orchestration Class"
domain: apex-reference
topic: orchestration-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.264Z
estimatedTokens: 1096
namespace: ConnectApi
keywords: [Orchestration, instance, associated, getOrchestrationInstance, instanceId, API, Version, Requires, Chatter, getOrchestrationInstanceCollection, relatedRecordId, relatedOrchestrationId]
---

# Orchestration Class

> Get an orchestration instance associated with an orchestration
      instance ID.

**Namespace:** `ConnectApi`

# Orchestration Class

Get orchestration instances.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Orchestration Methods

These methods are for Orchestration. All methods are static.

-   **[getOrchestrationInstance(instanceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstance_1)**
    Get an orchestration instance associated with an orchestration instance ID.
-   **[getOrchestrationInstanceCollection(relatedRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_1)**
    Get orchestration instances associated with a Salesforce record that’s configured as a context record for orchestration interactive steps.
-   **[getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm#apex_ConnectAPI_Orchestration_getOrchestrationInstanceCollection_2)**
    Get orchestration instances associated with either a Salesforce record or an orchestration that’s configured as context for orchestration interactive steps.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getOrchestrationInstance(instanceId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm)
- getOrchestrationInstanceCollection(relatedRecordId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm)
- getOrchestrationInstanceCollection(relatedRecordId, relatedOrchestrationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Orchestration_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.OrchestrationInstance (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance.htm)
- ConnectApi.OrchestrationInstanceCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_flow_orchestration_instance_collection.htm)
