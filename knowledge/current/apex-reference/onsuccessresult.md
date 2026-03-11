---
title: "onSuccess(result)"
domain: apex-reference
topic: onsuccessresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.784Z
keywords: [onSuccess, result, system, invokes, method, final, EventBus.publish, available, publishing, platform, event, message, succeeded., Signature, Parameters, Return, Value]
---

# onSuccess(result)

> The system invokes this method when the final result of EventBus.publish is available and the publishing of the platform event message
        succeeded.

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