---
title: "Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks"
domain: platform-events
topic: get-the-result-of-asynchronous-platform-event-publishing-with-apex-publish-callb
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.067Z
estimatedTokens: 1334
keywords: [Result, Asynchronous, Platform, Event, Publishing, Apex, Publish, Callbacks, final, EventBus.publish, call, callback, implement, intermediate, queueing]
---

# Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks

> Get the final result of an EventBus.publish call through an Apex publish callback that
  you implement. Without the callback, you can get only the intermediate queueing result in
    Database.SaveResult of an EventBus.publish call, not the final result.

# Get the Result of Asynchronous Platform Event Publishing with Apex Publish Callbacks

Get the final result of an EventBus.publish call through an Apex publish callback that you implement. Without the callback, you can get only the intermediate queueing result in Database.SaveResult of an EventBus.publish call, not the final result.

Event publishing is asynchronous, and the immediate result returned in SaveResult is the result of queuing the publish operation in Salesforce. Sometimes immediate errors are returned, for example, due to a missing required field in the event message. If no immediate errors are returned and when resources become available, the system carries out the queued publish call, and the final result is sent in an Apex publish callback.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

Apex publish callbacks are available for high-volume platform events. Legacy standard-volume events aren’t supported.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

To walk through the steps of creating and using Apex publish callbacks, see "Get Asynchronous Publish Results with Apex Publish Callbacks" in the [Platform Events Debugging](https://trailhead.salesforce.com/content/learn/modules/platform-events-debugging) Trailhead module.

-   **[Apex Publish Callback Class](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_class.htm)**
    An Apex publish callback contains the result of an asynchronous publish operation in Apex. After the publish operation completes and the final result is ready, the system returns a callback. You can implement one of these two interfaces: EventBus.EventPublishFailureCallback for failed publishes and EventBus.EventPublishSuccessCallback for successful publishes.
-   **[Callback Running User and Debug Logs](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm)**
    A publish callback runs under the Automated Process user. As a result, all records that are created in a callback have their system user fields, such as CreatedById and OwnerId, set to Automated Process.
-   **[Create an Event with an EventUuid Field](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_event_uuid.htm)**
    The EventUuid field uniquely identifies an event message and is used to match the events returned in the callback result with the events in the publish call. To have the system generate an EventUuid field value in each event object, use the SObjectType.newSObject(recordTypeId, loadDefaults) Apex method to create the event object.
-   **[Invoke the Publish Callback](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_invoke.htm)**
    To have the system invoke the callback when the final publish result is available, pass in an instance of the callback class as the second parameter in the EventBus.publish call.
-   **[Publish Callback Best Practices](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_practices.htm)**
    Keep in mind these best practices for publish callbacks when implementing this feature.
-   **[Example: Publish Callback Class That Creates Follow-Up Tasks for Failed Publishes](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_failure.htm)**
    This publish callback class creates a task when event publishing fails in the onFailure method. The inserted task includes the number of failed events and the event UUIDs.
-   **[Example: Publish Events with a Callback Instance](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_publish.htm)**
    To invoke the callback, perform an EventBus.publish call by passing it an instance of the FailureCallback class. You can publish one event or a batch of events with the callback.
-   **[Example: Publish Callback Class That Creates Follow-Up Tasks for Failed and Successful Publishes](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_success.htm)**
    This publish callback class is a modification of the previous example—it also implements the EventBus.EventPublishSuccessCallback interface and processes both success and failure cases. It creates a task when event publishing fails or succeeds. The inserted task includes the number of failed events and the event UUIDs.
-   **[Example: Publish Callback Class That Correlates Callback Results with Event Messages](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_correlate.htm)**
    This example callback class implementation shows how to retry publishing failed events. It’s based on a trigger on the Order object.
-   **[Test Apex Publish Callbacks](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_test.htm)**
    To test your Apex publish callback class, add an Apex test class. You must provide Apex tests before you can package or deploy an Apex class to production and meet code coverage requirements.
-   **[Apex Publish Callback Limits](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_limits.htm)**
    Keep in mind this limit for Apex publish callbacks.

## Related Topics

- Apex Publish Callback Class (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_class.htm)
- Callback Running User and Debug Logs (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_user.htm)
- Create an Event with an EventUuid Field (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_event_uuid.htm)
- Invoke the Publish Callback (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_invoke.htm)
- Publish Callback Best Practices (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_practices.htm)
- Example: Publish Callback Class That Creates Follow-Up Tasks for Failed Publishes (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_failure.htm)
- Example: Publish Events with a Callback Instance (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_publish.htm)
- Example: Publish Callback Class That Creates Follow-Up Tasks for Failed and Successful Publishes (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_success.htm)
- Example: Publish Callback Class That Correlates Callback Results with Event Messages (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_example_correlate.htm)
- Test Apex Publish Callbacks (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_test.htm)
