---
title: "Subscribe to Change Events"
domain: change-data-capture
topic: subscribe-to-change-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.736Z
estimatedTokens: 1318
keywords: [Subscribe, Change, Events, subscribing, including, subscription, channels, permissions]
---

# Subscribe to Change Events

> Learn about subscribing to change events including subscription channels, subscription
    methods, and required permissions.

# Subscribe to Change Events

Learn about subscribing to change events including subscription channels, subscription methods, and required permissions.

-   **[Change Event Storage and Delivery](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_delivery.htm)**
    Change events are stored temporarily and subscribers can retrieve them during the retention window. The order of events delivered is based on the order of the corresponding committed transactions. Users with the proper permissions can receive events on a channel.
-   **[Subscription Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm)**
    A subscription channel is a stream of change events that correspond to one or more entities. You can subscribe to a channel to receive change event notifications for record create, update, delete, and undelete operations. Change Data Capture provides predefined standard channels and you can create your own custom channels. Use the subscription channel that corresponds to the change events you want to receive. The channel name is case-sensitive.
-   **[Compose Streams of Change Data Capture Notifications with Custom Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)**
    Create a custom channel if you have multiple subscribers and each subscriber receives change events from a different set of entities. Also, use a custom channel with event enrichment to isolate sending enriched fields in change events on a specific channel. Custom channels group and isolate change events for each subscriber so subscribers receive only the types of events they need.
-   **[Example Diagrams for Channels and Channel Members](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm)**
    Discover the relationship between channels and channel members with the Entity Relationship Diagram (ERD). Also, understand the benefits of using custom channels through the example diagrams.
-   **[Transaction-Based Replication Steps](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)**
    To maintain an accurate replica of your Salesforce org’s data in another system, subscribe using a transaction-based approach.
-   **[Subscribe with Pub/Sub API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_pubsub_api.htm)**
    Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.
-   **[Get Compound Fields in Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_compound_fields.htm)**
    Compound fields, such as lead or contact Name, Address, and Geolocation fields, are represented as nested field structures in the event message. In record updates, the changedFields header field lists each updated component field using this format: CompoundField.ComponentField. The updated component field is included in the event message in a nested field structure.
-   **[Enrich Change Events with Extra Fields](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm)**
    Change event messages include values for new and changed fields, but sometimes unchanged field values are needed for processing or replicating data. For example, use enrichment when your app needs an external ID field for matching records in an external system. Or always include a field that provides important information about the changed record. You can select any field whose type is supported.
-   **[Filter Your Stream of Change Events with Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_section.htm)**
    Receive only the change event messages that match a predefined filter on a channel in subscribers. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation. This feature supports Pub/Sub API, CometD (Streaming API), and event relays but not Apex triggers.
-   **[Subscribe with Apex Triggers](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_apex_triggers.htm)**
    With Apex triggers, you can capture and process change events on the Lightning Platform. Change event triggers run asynchronously after the database transaction is completed. Perform resource-intensive business logic asynchronously in the change event trigger, and implement transaction-based logic in the Apex object trigger. By decoupling the processing of changes, change event triggers can help reduce transaction processing time.

#### See Also

-   [General Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_general_considerations.htm)

-   [*Streaming API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/intro_stream.htm "Streaming API Developer Guide - HTML (New Window)")

## Related Topics

- Change Event Storage and Delivery (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_delivery.htm)
- Subscription Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm)
- Compose Streams of Change Data Capture Notifications with Custom Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_custom_channel.htm)
- Example Diagrams for Channels and Channel Members (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_channel_examples.htm)
- Transaction-Based Replication Steps (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_replication_steps.htm)
- Subscribe with Pub/Sub API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_pubsub_api.htm)
- Get Compound Fields in Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_compound_fields.htm)
- Enrich Change Events with Extra Fields (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_enrich_intro.htm)
- Filter Your Stream of Change Events with Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_section.htm)
- Subscribe with Apex Triggers (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_apex_triggers.htm)
