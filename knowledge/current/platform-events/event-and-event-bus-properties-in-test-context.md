---
title: "Event and Event Bus Properties in Test Context"
domain: platform-events
topic: event-and-event-bus-properties-in-test-context
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.159Z
estimatedTokens: 707
keywords: [Event, Bus, Test, Context, messages, different, State, events, subscribers, reset, isn’t, persisted, Limits, Testing]
---

# Event and Event Bus Properties in Test Context

> In test context, event messages and the event bus have different properties. State
  information of events and subscribers is reset and isn’t persisted.

# Event and Event Bus Properties in Test Context

In test context, event messages and the event bus have different properties. State information of events and subscribers is reset and isn’t persisted.

## Test Events and the Test Event Bus

When an Apex test publishes an event message, it’s published to a test event bus that is separate from the Salesforce event bus. In an Apex test, state information of events and subscribers is reset, as follows.

-   The event replay ID value is reset to 0 and starts from 1 for the first test event message.
-   Event state information in EventBusSubscriber is reset. The last processed replay ID (EventBusSubscriber.Position) and the last published replay ID (EventBusSubscriber.Tip) are reset to 0.
-   When test events are published and processed in subscribers, event state information is updated.
-   Subscriber status is reset to Running (EventBusSubscriber.Status).
-   You can query EventBusSubscriber to get event state. For example, the following SOQL query gets some information about all trigger subscribers to the Order\_Event\_\_e event.

    ```

    ```


After an Apex test finishes executing, state information of events and subscribers reverts to the non-test values.

## Test Events and Limits

Event allocations don’t apply to test events, which have their own publishing limit of 500 event messages in a test method. If the number of event messages published from an Apex test context exceeds the limit, an error is returned with the LIMIT\_EXCEEDED status code. The error is in the SaveResult that the EventBus.publish Apex method returns.

## Testing Event Subscribers

Use an Apex test to test publishing and subscribing to a platform event. When you publish an event message in an Apex test, event subscribers are notified and start execution, including:

-   Apex triggers
-   Processes (when using an Apex test class saved with API version 43.0 or later)
-   Flows (when using in an Apex test class saved with API version 43.0 or later)

Apex tests don't cause CometD-based or Pub/Sub API subscribers to run.

#### See Also

-   [Event-Driven Software Architecture](atlas.en-us.platform_events.meta/platform_events/platform_events_intro_architecture.htm "An event-driven (or message-driven) software architecture consists of event producers, event consumers, and channels. The architecture is suitable for large distributed systems because it decouples event producers from event consumers, thereby simplifying the communication model in connected systems.")

-   [*Object Reference for the Salesforce Platform*: EventBusSubscriber](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventbussubscriber.htm "Object Reference for the Salesforce Platform: EventBusSubscriber - HTML (New Window)")

## Code Examples

```
SELECT Name, Position, Retries, LastError 
FROM EventBusSubscriber 
WHERE Topic='Order_Event__e' AND Type='ApexTrigger'
```

## Related Topics

- Event-Driven Software Architecture (atlas.en-us.platform_events.meta/platform_events/platform_events_intro_architecture.htm)
