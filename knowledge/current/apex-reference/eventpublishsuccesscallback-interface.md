---
title: "EventPublishSuccessCallback Interface"
domain: apex-reference
topic: eventpublishsuccesscallback-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.125Z
estimatedTokens: 654
namespace: EventBus
keywords: [EventPublishSuccessCallback, Implement, track, platform, event, messages, were, published, successfully, onSuccess, final, result, asynchronous, publish, operation]
---

# EventPublishSuccessCallback Interface

> Implement this interface to track platform event messages that were published
        successfully. The onSuccess() method in this interface is
        called when the final result of the asynchronous publish operation becomes
        available.

**Namespace:** `EventBus`

# EventPublishSuccessCallback Interface

Implement this interface to track platform event messages that were published successfully. The onSuccess() method in this interface is called when the final result of the asynchronous publish operation becomes available.

## Namespace

[EventBus](atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm "The EventBus namespace provides classes and methods for platform events and Change Data Capture events.")

## Usage

For more information, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.

-   **[EventPublishSuccessCallback Methods](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_eventbus_EventPublishSuccessCallback_methods)**

-   **[EventPublishSuccessCallback Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_interface_eventbus_EventPublishSuccessCallback_Example)**


## EventPublishSuccessCallback Methods

The following are methods for EventPublishSuccessCallback.

-   **[onSuccess(result)](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_eventbus_EventPublishSuccessCallback_onSuccess)**
    The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message succeeded.

### onSuccess(result)

The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message succeeded.

#### Signature

public void onSuccess(eventbus.SuccessResult result)

#### Parameters

result

Type: [EventBus.SuccessResult](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm#apex_interface_eventbus_SuccessResult "Contains the result of an Apex publish callback when the event publishing succeeded. This interface is used as a parameter in the onSuccess method of the EventPublishSuccessCallback interface.")

The final result of EventBus.publish.

#### Return Value

Type: void

## EventPublishSuccessCallback Example Implementation

For an example implementation and a test class, see [Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callbacks.htm) in the Platform Events Developer Guide.

## Related Topics

- EventBus (atlas.en-us.apexref.meta/apexref/apex_namespace_eventbus.htm)
- EventPublishSuccessCallback Methods (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm)
- EventPublishSuccessCallback Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm)
- onSuccess(result) (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm)
- EventBus.SuccessResult (atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm)
