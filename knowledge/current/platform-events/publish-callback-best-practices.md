---
title: "Publish Callback Best Practices"
domain: platform-events
topic: publish-callback-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:28.051Z
estimatedTokens: 795
keywords: [Publish, Callback, Best, Practices, Keep, mind, callbacks, implementing, feature, Don’t, Republish, Event, Created, SObjectType.newSObject, Events]
---

# Publish Callback Best Practices

> Keep in mind these best practices for publish callbacks when implementing this
        feature.

# Publish Callback Best Practices

Keep in mind these best practices for publish callbacks when implementing this feature.

## Don’t Republish the Same Event Object That Is Created with SObjectType.newSObject

If you create an event object with the SObjectType.newSObject(recordTypeId, loadDefaults) Apex method, we recommend that you don’t publish the same event object more than once. Because the event object is populated with an EventUuid value, if you publish it more than once, non-unique EventUuid values are tracked in the callbacks. The duplicate EventUuid values can cause unexpected results. This behavior doesn’t apply to events that you create by using the API name Event\_Name\_\_e event = new Event\_Name\_\_e().

## Publish a List of Events Instead of Individual Events with a Callback

When using a callback in an EventBus.publish call and you want to publish several events, we recommend that you create a list of events and publish the events in one EventBus.publish call. Using one EventBus.publish call for all events is more efficient than making a call for each event because it uses less Apex governor limits for the publish call. Also, the system attempts to batch callback executions for a list of events.

This example creates a list of events and then passes it through the events variable to the EventBus.publish call. This snippet results in one call to the publish method with a callback instance.

```

```

In contrast, this example shows what to avoid. It’s inefficiently making 10 calls to the publish method with a callback, each with one event. This example can result in more callback executions later than when events are batched in one publish call.

```

```

## Publish a List of Events with a Callback with a Platform Event Type

If you create events by using the API name, you can publish a list of events with a callback only if you define the list with the specific platform event type. The generic SObject type isn’t supported. For example, you can define a list of events as:

```

```

But not as:

```

```

Then you can publish the events with a callback.

```

```

## Keep the Event UUID Map Size Small for Improved Performance

To reduce the callback instance size, keep the map of event UUIDs small in the callback. A small callback instance size ensures better performance and helps avoid hitting the cumulative usage limit of all publish callbacks. Map the event UUID to a record ID that you can query to populate the remaining event fields. Alternatively, if you want to save the entire event as the map value, make sure that the event doesn’t have too many fields and the field sizes are small. For an example of how a map is used for republishing events in the onFailure method, see [Example: Publish Callback Class That Correlates Callback Results with Event Messages](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_publish_callback_example_correlate.htm).

#### See Also

-   [Apex Publish Callback Limits](atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_limits.htm "Keep in mind this limit for Apex publish callbacks.")

## Code Examples

```apex
// BEST PRACTICE
FailureCallback cb = new FailureCallback();
List<Order_Event__e> events =  new List<Order_Event__e)();

// Create events in a loop
for(Integer i = 0;i<10;i++) {
    events.add((Order_Event__e)Order_Event__e.sObjectType.newSObject(null, true));
}

// Pass the list of events to the publish call
EventBus.publish(events, cb);
```

```
// !! NOT RECOMMENDED !!
FailureCallback cb = new FailureCallback();

// Create events individually and pass each event to the publish call
for(Integer i = 0;i<10;i++) {
    EventBus.publish((Order_Event__e)Order_Event__e.sObjectType.newSObject(null, true),
                     cb);
}
```

```apex
List<Order_Event__e> events =  new List<Order_Event__e>();
```

```apex
List<SObject> events =  new List<SObject>();
```

```
events.add(new Order_Event__e());
EventBus.publish(events, myCallback);
```

## Related Topics

- Apex Publish Callback Limits (atlas.en-us.platform_events.meta/platform_events/platform_events_publish_callback_limits.htm)
