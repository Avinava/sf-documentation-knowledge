---
title: "Getting Started with Streaming API"
domain: api-streaming
topic: getting-started-with-streaming-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.393Z
estimatedTokens: 1278
keywords: [Getting, Started, Streaming, API, events, push, technology, subscription, mechanism, receiving, near, real, time, supports, multiple]
---

# Getting Started with Streaming API

> Streaming API enables streaming of events using push technology and provides a
    subscription mechanism for receiving events in near real time. The Streaming API subscription
    mechanism supports multiple types of events, including PushTopic events, generic events,
    platform events, and change data capture events.

# Getting Started with Streaming API

Streaming API enables streaming of events using push technology and provides a subscription mechanism for receiving events in near real time. The Streaming API subscription mechanism supports multiple types of events, including PushTopic events, generic events, platform events, and change data capture events.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

If you're writing an app for publishing and subscribing to platform events and change data capture events, we recommend you use [Pub/Sub API](https://developer.salesforce.com/docs/platform/pub-sub-api/overview) instead of Streaming API. Pub/Sub API is a newer API. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes and delivers binary event messages.

Consider these applications for Streaming API.

Applications That Poll Frequently

Applications that have constant polling action against the Salesforce infrastructure consume unnecessary API calls and processing time. They can benefit from Streaming API because it reduces the number of requests that return no data.

General Notification

Applications that require general notification of data changes in an org. By using Streaming API, these applications can reduce the number of API calls and improve performance.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

You can use Streaming API with any Salesforce org as long as you enable the API. To ensure continuity during instance refreshes and org migrations, we recommend using your org’s My Domain login URL instead of its instance in the Streaming API endpoint.

-   **[Push Technology](atlas.en-us.api_streaming.meta/api_streaming/intro_push_technology.htm)**
    Push technology, also called the publish/subscribe model, transfers information that is initiated from a server to the client. This type of communication is the opposite of pull technology in which a request for information is made from a client to the server.
-   **[Bayeux Protocol, CometD, and Long Polling](atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm)**
    Streaming API uses the Bayeux protocol and CometD for long polling.
-   **[Streaming API Terms](atlas.en-us.api_streaming.meta/api_streaming/terms.htm)**
    Learn about terms used for Streaming API.
-   **[How the Client Connects](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_client_connection.htm)**
    Streaming API uses the HTTP/1.1 request-response model and the Bayeux protocol (CometD implementation). A Bayeux client connects to Streaming API in multiple stages.
-   **[Message Reliability](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_stateless.htm)**
    For clients subscribed with API version 37.0 or later, Streaming API provides reliable message delivery by enabling you to replay past events through durable streaming. Clients subscribed with API version 36.0 or earlier might not receive all messages in some situations.
-   **[Message Durability](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_durability.htm)**
    Salesforce stores PushTopic events, generic events, and standard-volume events for 24 hours and high-volume events for 72 hours. High-volume events include platform events and change data capture events. Standard-volume events are no longer available and include only events defined before Spring ’19. With API version 37.0 and later, you can retrieve events that are within the retention window through durable streaming.
-   **[Streaming Event Features](atlas.en-us.api_streaming.meta/api_streaming/event_comparison.htm)**
    The Lightning Platform offers several types of streaming events. To determine which event meets your use case, compare the features of the various events.
-   **[Streaming API vs. Pub/Sub API](atlas.en-us.api_streaming.meta/api_streaming/pubsub_api_streaming_api_comparison.htm)**
    Pub/Sub API is a newer API that you can use to publish and subscribe to platform events and change data capture events. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes and delivers binary event messages, and supports multiple programming languages. Before Pub/Sub API was introduced, the only way to subscribe to events in an external client was with Streaming API. This table compares some features of the two subscription APIs.
-   **[Differences Between Change Events Received with Streaming API vs. Pub/Sub API](atlas.en-us.api_streaming.meta/api_streaming/cdc_event_diff_pubsub_cometd.htm)**
    The format of change events received with Streaming API differs from change events received with Pub/Sub API. Streaming API delivers the entire event message in JSON format while Pub/Sub API delivers the event payload in the Apache Avro binary format.
-   **[API End-of-Life Policy](atlas.en-us.api_streaming.meta/api_streaming/api_streaming_eol.htm)**
    Check out the policy for retiring API versions, and which Streaming API versions are supported, deprecated, or retired.

## Related Topics

- Push Technology (atlas.en-us.api_streaming.meta/api_streaming/intro_push_technology.htm)
- Bayeux Protocol, CometD, and Long Polling (atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm)
- Streaming API Terms (atlas.en-us.api_streaming.meta/api_streaming/terms.htm)
- How the Client Connects (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_client_connection.htm)
- Message Reliability (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_stateless.htm)
- Message Durability (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_durability.htm)
- Streaming Event Features (atlas.en-us.api_streaming.meta/api_streaming/event_comparison.htm)
- Streaming API vs. Pub/Sub API (atlas.en-us.api_streaming.meta/api_streaming/pubsub_api_streaming_api_comparison.htm)
- Differences Between Change Events Received with Streaming API vs. Pub/Sub API (atlas.en-us.api_streaming.meta/api_streaming/cdc_event_diff_pubsub_cometd.htm)
- API End-of-Life Policy (atlas.en-us.api_streaming.meta/api_streaming/api_streaming_eol.htm)
