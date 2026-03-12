---
title: "Streaming API vs. Pub/Sub API"
domain: api-streaming
topic: streaming-api-vs-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.436Z
estimatedTokens: 412
keywords: [Streaming, API, Pub, Sub, newer, publish, subscribe, platform, events, change, data, capture, gRPC, HTTP, efficiently]
---

# Streaming API vs. Pub/Sub API

> Pub/Sub API is a newer API that you can use to publish and subscribe to platform events
  and change data capture events. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes
  and delivers binary event messages, and supports multiple programming languages. Before Pub/Sub
  API was introduced, the only way to subscribe to events in an external client was with Streaming
  API. This table compares some features of the two subscription APIs.

# Streaming API vs. Pub/Sub API

Pub/Sub API is a newer API that you can use to publish and subscribe to platform events and change data capture events. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes and delivers binary event messages, and supports multiple programming languages. Before Pub/Sub API was introduced, the only way to subscribe to events in an external client was with Streaming API. This table compares some features of the two subscription APIs.

|  | Streaming API | Pub/Sub API |
| --- | --- | --- |
| Event encoding | JSON | Binary (Apache Avro) |
| Protocol | CometD, an implementation of the Bayeux protocol. | gRPC and protocol buffers |
| Subscription model | Push-based—The server delivers events as they become available in the event bus. | Pull-based—The client requests the number of events to receive as they become available in the event bus. |
| Subscription flow control | The client doesn’t control the number of events delivered from the server. | The client specifies how many events to receive for a Subscribe call based on event processing speed. |
| Publish status | Not supported with Streaming API. When using data APIs to publish events, the event queueing result is returned. When system resources are available, queued events are published. The final result isn’t returned to the client. | The final publishing result returned indicates that the event was successfully published or that the publish failed. |

#### See Also

-   [*Pub/Sub API Developer Guide*](https://developer.salesforce.com/docs/platform/pub-sub-api/overview "
    Pub/Sub API Developer Guide
    - HTML (New Window)")
