---
title: "SuccessResult Interface"
domain: apex-reference
topic: successresult-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.133Z
estimatedTokens: 359
namespace: EventBus
keywords: [SuccessResult, result, Apex, publish, callback, event, publishing, succeeded, onSuccess, EventPublishSuccessCallback, getEventUuids]
---

# SuccessResult Interface

> Contains the result of an Apex publish callback when the event publishing succeeded.
        This interface is used as a parameter in the onSuccess
        method of the EventPublishSuccessCallback
        interface.

**Namespace:** `EventBus`

# SuccessResult Interface

Contains the result of an Apex publish callback when the event publishing succeeded. This interface is used as a parameter in the onSuccess method of the EventPublishSuccessCallback interface.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

-   **[SuccessResult Methods](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm#apex_eventbus_SuccessResult_methods)**


## SuccessResult Methods

The following are methods for SuccessResult.

-   **[getEventUuids()](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm#apex_eventbus_SuccessResult_getEventUuids)**
    Returns a list of EventUuid field values of each platform event that is included in the EventBus.EventPublishSuccessCallback.

### getEventUuids()

Returns a list of EventUuid field values of each platform event that is included in the EventBus.EventPublishSuccessCallback.

#### Signature

public List<String> getEventUuids()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- SuccessResult Methods (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm)
- getEventUuids() (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
