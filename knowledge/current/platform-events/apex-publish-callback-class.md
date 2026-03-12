---
title: "Apex Publish Callback Class"
domain: platform-events
topic: apex-publish-callback-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.027Z
estimatedTokens: 1225
keywords: [Apex, Publish, Callback, result, asynchronous, operation, completes, final, ready, system, implement, two, interfaces, EventBus.EventPublishFailureCallback, failed]
---

# Apex Publish Callback Class

> An Apex publish callback contains the result of an asynchronous publish operation in
    Apex. After the publish operation completes and the final result is ready, the system returns a
    callback. You can implement one of these two interfaces: EventBus.EventPublishFailureCallback for failed publishes and EventBus.EventPublishSuccessCallback for successful
    publishes.

# Apex Publish Callback Class

An Apex publish callback contains the result of an asynchronous publish operation in Apex. After the publish operation completes and the final result is ready, the system returns a callback. You can implement one of these two interfaces: EventBus.EventPublishFailureCallback for failed publishes and EventBus.EventPublishSuccessCallback for successful publishes.

## Track Event Publish Failures

To track the final failed result of asynchronous publish operations, implement the EventBus.EventPublishFailureCallback interface in an Apex class. In your implementation, you can decide what action to take for publish failures. For example, you can log the failures or you can attempt to republish the events.

public class FailureCallback implements EventBus.EventPublishFailureCallback { public void onFailure(EventBus.FailureResult result) { // Your implementation // Get event UUIDs from the result List<String> eventUuids = result.getEventUuids(); // ... } }

If the asynchronous publish operation fails, the onFailure method is invoked. In the implemented onFailure method, you can write logic to act in response to the final result of the publishing operation. The onFailure method takes a parameter that contains the result of the publish operation: EventBus.FailureResult result. The result contains the EventUuid field values for each failed event but doesn’t contain the data for the event. Use the getEventUuids method to get the universally unique identifiers (UUIDs) of the events. Each event UUID is a UUID that identifies an event message.

## Track Event Publish Successes

To track the final successful result of asynchronous publish operations, implement the EventBus.EventPublishSuccessCallback interface in an Apex class. Because most publish calls typically succeed, processing successful event publishes likely isn’t a concern. Also, a large volume of events can be published successfully, so be mindful about the performance and Apex limit impacts when processing the results.

public class SuccessCallback implements EventBus.EventPublishSuccessCallback { public void onSuccess(EventBus.SuccessResult result) { // Your implementation // Get event UUIDs from the result List<String> eventUuids = result.getEventUuids(); // … } }

If the asynchronous publish operation succeeds, the onSuccess method is invoked. In the implemented onSuccess method, you can write logic to act in response to the final result of the publishing operation. The onSuccess method takes a parameter that contains the result of the publish operation: EventBus.SuccessResult result. The result contains the EventUuid field values for each successfully published event but doesn’t contain the data for the event. Use the getEventUuids method to get the UUIDs of the events. Each event UUID is a UUID that identifies an event message.

## Track Event Publish Failures and Successes in One Callback

Alternatively, you can process failed and successful publish results in one Apex class. Implement the EventBus.EventPublishFailureCallback and EventBus.EventPublishSuccessCallback interfaces in the same Apex class. The interface includes the onFailure and onSuccess methods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Implement both failure and success callbacks only if you have valid use cases for processing both. Because most publish calls typically succeed, processing successful event publishes likely isn’t a concern. Also, a large volume of events can be published successfully, so be mindful about the performance and Apex limit impacts when processing the results in the onSuccess method.

public class FailureAndSuccessCallback implements EventBus.EventPublishFailureCallback, EventBus.EventPublishSuccessCallback { public void onFailure(EventBus.FailureResult result) { // Your implementation // Get event UUIDs from the result List<String> eventUuids = result.getEventUuids(); // … } public void onSuccess(EventBus.SuccessResult result) { // Your implementation // Get event UUIDs from the result List<String> eventUuids = result.getEventUuids(); // … } }

#### See Also

-   [Identify and Match Event Messages with the EventUuid Field](atlas.en-us.platform_events.meta/platform_events/platform_events_event_uuid.htm "Delivered platform event messages include the EventUuid field, which identifies an event message. Use this field to match published and received event messages by comparing the universally unique identifiers (UUIDs) of the received events with the UUIDs returned in the SaveResult of publish calls. This way, you can find any event messages that aren’t delivered and republish them.")

-   [*Apex Reference Guide*: System.Quiddity Enum: PLATFORM\_EVENT\_PUBLISH\_CALLBACK](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_System_Quiddity.htm)

## Related Topics

- Identify and Match Event Messages with the EventUuid Field (atlas.en-us.platform_events.meta/platform_events/platform_events_event_uuid.htm)
