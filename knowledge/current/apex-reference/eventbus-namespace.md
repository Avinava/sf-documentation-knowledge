---
title: "EventBus Namespace"
domain: apex-reference
topic: eventbus-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.168Z
keywords: [EventBus, Namespace, See]
---

# EventBus Namespace

# EventBus Namespace

The EventBus namespace provides classes and methods for platform events and Change Data Capture events.

The following are the classes in the EventBus namespace.

-   **[ChangeEventHeader Class](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_ChangeEventHeader.htm#apex_class_eventbus_ChangeEventHeader)**  
    Contains header fields of Change Data Capture events.
-   **[EventPublishFailureCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishFailureCallback.htm#apex_interface_eventbus_EventPublishFailureCallback)**  
    Implement this interface to track platform event messages that failed to publish. The onFailure() method in this interface is called when the final result of the asynchronous publish operation becomes available.
-   **[EventPublishSuccessCallback Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_EventPublishSuccessCallback.htm#apex_interface_eventbus_EventPublishSuccessCallback)**  
    Implement this interface to track platform event messages that were published successfully. The onSuccess() method in this interface is called when the final result of the asynchronous publish operation becomes available.
-   **[FailureResult Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_FailureResult.htm#apex_interface_eventbus_FailureResult)**  
    Contains the result of an Apex publish callback when the event publishing failed. This interface is used as a parameter in the onFailure method of the EventPublishFailureCallback interface.
-   **[SuccessResult Interface](atlas.en-us.apexref.meta/apexref/apex_interface_eventbus_SuccessResult.htm#apex_interface_eventbus_SuccessResult)**  
    Contains the result of an Apex publish callback when the event publishing succeeded. This interface is used as a parameter in the onSuccess method of the EventPublishSuccessCallback interface.
-   **[TestBroker Class](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TestBroker.htm#apex_class_eventbus_TestBroker)**  
    Contains methods that simulate the successful delivery or failed publishing of platform event or change event messages in an Apex test.
-   **[TriggerContext Class](atlas.en-us.apexref.meta/apexref/apex_class_eventbus_TriggerContext.htm#apex_class_eventbus_TriggerContext)**  
    Provides information about the platform event or change event trigger that’s currently executing, such as how many times the trigger was retried due to the EventBus.RetryableException. Also, provides a method to resume trigger executions.

#### See Also

-   [*Platform Events Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm "Platform Events Developer Guide - HTML (New Window)")