---
title: "Subscribing to Platform Events"
domain: platform-events
topic: subscribing-to-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.088Z
estimatedTokens: 1445
keywords: [Subscribing, Platform, Events, Receive, processes, flows, Apex, triggers, Pub, Sub, API, CometD, clients]
---

# Subscribing to Platform Events

> Receive platform events in processes, flows, Apex triggers, Pub/Sub
      API, or CometD clients.

# Subscribing to Platform Events

Receive platform events in processes, flows, Apex triggers, Pub/Sub API, or CometD clients.

-   **[Set Up Debug Logs for Event Subscriptions](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm)**
    Debug logs for platform event triggers, event processes, and resumed flow interviews are created by Automated Process and are separate from their corresponding Apex code logs. For a platform event trigger with an overridden running user, debug logs are created by the specified user. The debug logs aren’t available in the Developer Console’s Log tab.
-   **[Subscribe to Platform Event Messages with Flows](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_flow.htm)**
    Launch flows or resume running instances of flows, called interviews, when platform event messages are received. Subscribed flows and interviews can receive event messages published through Apex, APIs, flows, and other processes. Flows and interviews provide an autosubscription mechanism.
-   **[Subscribe to Platform Event Messages with Processes](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_process.htm)**
    Processes built in Process Builder can subscribe to platform events and receive event messages published through Apex, APIs, flows, and other processes. Processes provide an autosubscription mechanism.
-   **[Subscribe to Platform Event Notifications with Apex Triggers](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex.htm)**
    Use Apex triggers to subscribe to events. You can receive event notifications in triggers regardless of how they were published—through Apex or APIs. Triggers provide an autosubscription mechanism. No need to explicitly create and listen to a channel in Apex.
-   **[Subscribe to Platform Event Notifications in a Lightning Component](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_lc.htm)**
    Subscribe to platform events with the empApi component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and listening to event messages.
-   **[Subscribe to Platform Event Notifications with Pub/Sub API](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm)**
    Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.
-   **[Subscribe to Platform Event Notifications with CometD](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_cometd.htm)**
    Use CometD to subscribe to platform events in an external client.
-   **[Group Platform Events into One Stream with a Custom Channel](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_custom_channels.htm)**
    With a custom channel, you can receive a stream of event messages corresponding to one or more custom platform events, or Real-Time Event Monitoring events. For example, if you’ve defined platform events corresponding to orders for different regions, one client can subscribe to all those events and process them. Custom channels are supported in Pub/Sub API clients, CometD clients, and event relays only. You can also add filters to custom channels. By using only one client to subscribe to all events and using filters, your subscriptions are optimized.
-   **[Filter Your Stream of Platform Events with Custom Channels](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_section.htm)**
    Receive only the event messages that match a predefined filter on a custom channel. Create a channel, and configure it with a filter expression. Subscribers to the channel, including Pub/Sub API clients, Streaming API (CometD) clients, and event relays, receive a filtered stream of events. With fewer events delivered to subscribers, event processing is optimized. Also, subscribers make more efficient use of the event delivery allocation.
-   **[Obtain a Platform Event’s Subscribers](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers.htm)**
    View a list of all triggers or processes that are subscribed to a platform event by using the Salesforce user interface or the API.
-   **[Identify and Match Event Messages with the EventUuid Field](atlas.en-us.platform_events.meta/platform_events/platform_events_event_uuid.htm)**
    Delivered platform event messages include the EventUuid field, which identifies an event message. Use this field to match published and received event messages by comparing the universally unique identifiers (UUIDs) of the received events with the UUIDs returned in the SaveResult of publish calls. This way, you can find any event messages that aren’t delivered and republish them.

#### See Also

-   [Decoupled Publishing and Subscription](atlas.en-us.platform_events.meta/platform_events/platform_events_considerations_decoupled_processes.htm "When the publish behavior of a platform event is set to Publish Immediately, it’s published outside of a Lightning Platform database transaction. As a result, the publishing and subscription processes are decoupled—the subscription process can’t assume that an action made by the publishing transaction is committed before an event message is received. Familiarize yourself with some scenarios that can occur from the decoupled behavior.")

## Related Topics

- Set Up Debug Logs for Event Subscriptions (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_debug.htm)
- Subscribe to Platform Event Messages with Flows (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_flow.htm)
- Subscribe to Platform Event Messages with Processes (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_process.htm)
- Subscribe to Platform Event Notifications with Apex Triggers (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_apex.htm)
- Subscribe to Platform Event Notifications in a Lightning Component (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_lc.htm)
- Subscribe to Platform Event Notifications with Pub/Sub API (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm)
- Subscribe to Platform Event Notifications with CometD (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_cometd.htm)
- Group Platform Events into One Stream with a Custom Channel (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_custom_channels.htm)
- Filter Your Stream of Platform Events with Custom Channels (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_section.htm)
- Obtain a Platform Event’s Subscribers (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers.htm)
