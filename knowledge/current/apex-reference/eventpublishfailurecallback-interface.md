---
title: "EventPublishFailureCallback Interface"
domain: apex-reference
topic: eventpublishfailurecallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.121Z
estimatedTokens: 650
namespace: EventBus
keywords: [EventPublishFailureCallback, Implement, track, platform, event, messages, failed, publish, onFailure, final, result, asynchronous, operation, becomes, Usage]
---

# EventPublishFailureCallback Interface

> Implement this interface to track platform event messages that failed to publish. The
      onFailure() method in this interface is called when the
    final result of the asynchronous publish operation becomes available.

**Namespace:** `EventBus`

# EventPublishFailureCallback Interface

Implement this interface to track platform event messages that failed to publish. The onFailure() method in this interface is called when the final result of the asynchronous publish operation becomes available.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

## Usage

For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.

-   **[EventPublishFailureCallback Methods](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_eventbus_EventPublishFailureCallback_methods)**

-   **[EventPublishFailureCallback Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_interface_eventbus_EventPublishFailureCallback_Example)**


## EventPublishFailureCallback Methods

The following are methods for EventPublishFailureCallback.

-   **[onFailure(result)](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_eventbus_EventPublishFailureCallback_onFailure)**
    The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message failed.

### onFailure(result)

The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message failed.

#### Signature

public void onFailure(eventbus.FailureResult result)

#### Parameters

result

Type: [EventBus.FailureResult](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm#apex_interface_eventbus_FailureResult "Contains the result of an Apex publish callback when the event publishing failed. This interface is used as a parameter in the onFailure method of the EventPublishFailureCallback interface.")

The final result of EventBus.publish.

#### Return Value

Type: void

## EventPublishFailureCallback Example Implementation

For an example implementation and a test class, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- EventPublishFailureCallback Methods (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm)
- EventPublishFailureCallback Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm)
- onFailure(result) (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm)
- EventBus.FailureResult (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm)
