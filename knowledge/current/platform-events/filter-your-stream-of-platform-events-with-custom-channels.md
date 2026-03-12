---
title: "Filter Your Stream of Platform Events with Custom Channels"
domain: platform-events
topic: filter-your-stream-of-platform-events-with-custom-channels
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.819Z
estimatedTokens: 895
keywords: [Filter, Stream, Platform, Events, Custom, Channels, Receive, event, messages, match, predefined, channel, configure, expression, Subscribers]
---

# Filter Your Stream of Platform Events with Custom Channels

> Receive only the event messages that match a predefined filter on a custom channel.
    Create a channel, and configure it with a filter expression. Subscribers to the channel,
    including Pub/Sub API clients, Streaming API (CometD) clients, and event relays, receive a
    filtered stream of events. With fewer events delivered to subscribers, event processing is
    optimized. Also, subscribers make more efficient use of the event delivery
    allocation.

# Filter Your Stream of Platform Events with Custom Channels

Receive only the event messages that match a predefined filter on a custom channel. Create a channel, and configure it with a filter expression. Subscribers to the channel, including Pub/Sub API clients, Streaming API (CometD) clients, and event relays, receive a filtered stream of events. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

-   This feature is supported for high-volume custom platform events that you define. It isn’t supported for legacy standard-volume custom platform events or standard platform events, such as real-time event monitoring events.
-   This feature is supported in Pub/Sub API and Streaming API (CometD) subscribers but not in other types of subscribers, such as Apex triggers, flows, and processes.
-   If you use Government Cloud and your org was created before January 14, 2022, contact Salesforce to enable this feature. Government Cloud orgs created on or after January 14, 2022 have this feature enabled. This feature is available in all other clouds.

-   **[Platform Event Filters](atlas.en-us.platform_events.meta/platform_events/platform_events_filters.htm)**
    Using Tooling API or Metadata API, an administrator with the Customize Application permission can configure a complex filter expression that contains multiple fields.
-   **[Filter Expressions in Channel Members](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_add.htm)**
    Add a filter expression in a channel member that’s associated with a custom channel. The channel member associates a custom platform event with the channel and specifies the filter expression. The channel holds the filtered stream of event messages that match the filter expression for the specified custom platform event.
-   **[Subscribe to the Channel and Receive the Filtered Event Stream](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_subscribe.htm)**
    After configuring the filter, subscribe to the channel and receive the event messages that match the filter expression. Only Pub/Sub API and CometD clients support stream filtering. Because Apex triggers, flows, and processes don’t support custom channels, you can’t use them to subscribe to filtered event streams.
-   **[Get Custom Channels and Channel Members](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_list_channels.htm)**
    You can find which channels and channel members are set up in your Salesforce org by performing SOQL queries through Tooling API.

#### See Also

-   [Subscribe to Platform Event Notifications with CometD](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_cometd.htm "Use CometD to subscribe to platform events in an external client.")

-   [Subscribe to Platform Event Notifications with Pub/Sub API](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm "Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.")

## Related Topics

- Platform Event Filters (atlas.en-us.platform_events.meta/platform_events/platform_events_filters.htm)
- Filter Expressions in Channel Members (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_add.htm)
- Subscribe to the Channel and Receive the Filtered Event Stream (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_subscribe.htm)
- Get Custom Channels and Channel Members (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_list_channels.htm)
- Subscribe to Platform Event Notifications with CometD (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_cometd.htm)
- Subscribe to Platform Event Notifications with Pub/Sub API (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm)
