---
title: "Order of Events in Parallel Subscriptions"
domain: platform-events
topic: order-of-events-in-parallel-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.940Z
estimatedTokens: 329
keywords: [Order, Events, Parallel, Subscriptions, distributed, doesn't, always, match, event, bus]
---

# Order of Events in Parallel Subscriptions

> The order of events that get distributed to the parallel subscriptions doesn't always
    match the order of events in the event bus.

# Order of Events in Parallel Subscriptions

The order of events that get distributed to the parallel subscriptions doesn't always match the order of events in the event bus.

Events are distributed based on the hash value of the partition key. If the partition key values are unique for consecutive events, such as an order ID or the EventUuid field values, the hash values are likely to be unique, although that’s not guaranteed. In this case, the events are probably sent to different partitions for processing and processed out of order.

If the partition key values are identical for consecutive events, like a region value of EMEA, the hash values are identical. The events are sent to the same partition for processing and are processed in order. The hash logic for the partition key is case-sensitive, so the computed hash values for EMEA and emea are different. If the partition key value is null, the empty string is used as the basis of the hash value and events are processed by only one partition.

#### See Also

-   [Choosing a Partition Key](atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm "Which event field you choose for the partition key depends on whether you want to maximize the trigger’s performance or whether the order of event processing is important.")

## Related Topics

- Choosing a Partition Key (atlas.en-us.platform_events.meta/platform_events/platform_events_ps_choose_key.htm)
