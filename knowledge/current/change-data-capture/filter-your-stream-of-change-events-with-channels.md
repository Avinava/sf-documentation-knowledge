---
title: "Filter Your Stream of Change Events with Channels"
domain: change-data-capture
topic: filter-your-stream-of-change-events-with-channels
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.595Z
estimatedTokens: 765
keywords: [Filter, Stream, Change, Events, Channels, Receive, event, messages, match, predefined, channel, subscribers, fewer, delivered, processing]
---

# Filter Your Stream of Change Events with Channels

> Receive only the change event messages that match a predefined filter on a channel in
    subscribers. With fewer events delivered to subscribers, event processing is optimized. Also,
    subscribers make more efficient use of the event delivery allocation. This feature supports
    Pub/Sub API, CometD (Streaming API), and event relays but not Apex triggers.

# Filter Your Stream of Change Events with Channels

Receive only the change event messages that match a predefined filter on a channel in subscribers. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation. This feature supports Pub/Sub API, CometD (Streaming API), and event relays but not Apex triggers.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=change_data_capture)

#### Note

If you use Government Cloud and your org was created before January 14, 2022, contact Salesforce to enable this feature. Government Cloud orgs created on or after January 14, 2022 have this feature enabled. This feature is available in all other clouds.

-   **[Change Event Filters](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filters.htm)**
    Filter a stream of change events by adding a filter expression on a channel member. A filter expression can contain Salesforce entity fields and event header fields, which are part of ChangeEventHeader. A change data capture channel can have one or more channel members, and each channel member can have its own filter.
-   **[Filter Expressions in Channel Members](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_add.htm)**
    Add a filter expression in a channel member that’s associated with a custom or the standard ChangeEvents channel. We recommend that you use a custom channel so that the filtered stream is isolated from the standard event stream and subscribers expect the stream to be filtered. The channel holds the filtered stream of events that match the filter expression for the specified change event.
-   **[Subscribe to the Channel and Receive the Filtered Event Stream](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_subscribe.htm)**
    After configuring the filter, subscribe to the channel, and receive the event messages that match the filter expression. The channel to subscribe to is /data/ChannelName\_\_chn. Only Pub/Sub API and CometD clients support stream filtering. Because Apex triggers don’t support channels, you can’t use them to subscribe to filtered event streams.
-   **[Get Custom Channels and Channel Members](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_list_channels.htm)**
    You can find which channels and channel members are set up in your Salesforce org by performing SOQL queries through Tooling API.

#### See Also

-   [Subscribe with Pub/Sub API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_pubsub_api.htm "Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.")

## Related Topics

- Change Event Filters (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filters.htm)
- Filter Expressions in Channel Members (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_add.htm)
- Subscribe to the Channel and Receive the Filtered Event Stream (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_subscribe.htm)
- Get Custom Channels and Channel Members (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_list_channels.htm)
- Subscribe with Pub/Sub API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_pubsub_api.htm)
