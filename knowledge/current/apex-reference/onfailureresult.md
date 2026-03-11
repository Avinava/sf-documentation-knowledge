---
title: "onFailure(result)"
domain: apex-reference
topic: onfailureresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.781Z
keywords: [onFailure, result, system, invokes, method, final, EventBus.publish, available, publishing, platform, event, message, failed., Signature, Parameters, Return, Value]
---

# onFailure(result)

> The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message
        failed.

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