---
title: "Choosing a Partition Key"
domain: platform-events
topic: choosing-a-partition-key
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.927Z
estimatedTokens: 804
keywords: [Choosing, Partition, Key, event, choose, depends, whether, want, maximize, trigger’s, performance, order, processing, Best, Avoiding]
---

# Choosing a Partition Key

> Which event field you choose for the partition key depends on whether you want to
  maximize the trigger’s performance or whether the order of event processing is
  important.

# Choosing a Partition Key

Which event field you choose for the partition key depends on whether you want to maximize the trigger’s performance or whether the order of event processing is important.

## Choosing a Partition Key for Best Performance

For the best performance, and if event ordering isn’t a concern, make sure to select a partition key that contains a wide range of values, such as IDs. That way, the received events are more likely to be evenly distributed across the subscriptions based on the hash value that the system generates for the partition key field. For example, the EventUuid system field or a required custom field containing ID values, such as record IDs, provides a wide range of unique values.

If you choose an event field that doesn’t contain a wide range of values, the processing of partitions can sometimes be less performant. For example, if you choose an event field that contains names of US regions, and if there are more events in the South region, the partition for the South region has more events to process than the partitions for other regions. This processing isn’t efficient.

## Avoiding Record Contention and Locking

Depending on your implementation, more than one parallel subscription can attempt to perform a DML operation on the same record, such as a record update. In this situation, a possible result is that the system waits for one partition to finish processing the record before the second partition starts the processing. The record contention can cause latency, delays in event processing, or errors.

To avoid the contention issues, choose a partition key that ensures the placement of events that access the same records in the same partition.

## Choosing a Partition Key for In-Order Event Processing

If you want to preserve the order of events for events that have the same partition key, choose a partition key that contains hard-coded values, such as categories or regions. Events with identical partition key values are processed by the same partition in their original received order in the event bus.

For example, if the trigger is configured with two partitions and five events are received, and the first and second event contain a partition key of APAC, they’re processed in order by one partition. The next three events have the partition key of EMEA, and they’re processed in order by another partition.

#### See Also

-   [Order of Events in Parallel Subscriptions](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_order_events.htm "The order of events that get distributed to the parallel subscriptions doesn't always match the order of events in the event bus.")

-   [Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers](atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm "To speed up platform event processing in an Apex trigger, use parallel subscriptions to process events simultaneously instead of in a single stream. With parallel subscriptions, you can scale your Apex platform event triggers to handle high volumes of events. Parallel subscriptions are available for custom high-volume platform events but not for standard events or change events.")

## Related Topics

- Order of Events in Parallel Subscriptions (atlas.en-us.platform_events.meta/platform_events/platform_events_ps_order_events.htm)
- Platform Event Processing at Scale with Parallel Subscriptions for Apex Triggers (atlas.en-us.platform_events.meta/platform_events/platform_events_ps.htm)
