---
title: "FailureResult Interface"
domain: apex-reference
topic: failureresult-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.129Z
estimatedTokens: 356
namespace: EventBus
keywords: [FailureResult, result, Apex, publish, callback, event, publishing, failed, onFailure, EventPublishFailureCallback, getEventUuids]
---

# FailureResult Interface

> Contains the result of an Apex publish callback when the event publishing failed.
        This interface is used as a parameter in the onFailure
        method of the EventPublishFailureCallback
        interface.

**Namespace:** `EventBus`

# FailureResult Interface

Contains the result of an Apex publish callback when the event publishing failed. This interface is used as a parameter in the onFailure method of the EventPublishFailureCallback interface.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

-   **[FailureResult Methods](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm#apex_eventbus_FailureResult_methods)**


## FailureResult Methods

The following are methods for FailureResult.

-   **[getEventUuids()](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm#apex_eventbus_FailureResult_getEventUuids)**
    Returns a list of EventUuid field values of each platform event that is included in EventBus.EventPublishFailureCallback.

### getEventUuids()

Returns a list of EventUuid field values of each platform event that is included in EventBus.EventPublishFailureCallback.

#### Signature

public List<String> getEventUuids()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- FailureResult Methods (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm)
- getEventUuids() (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
