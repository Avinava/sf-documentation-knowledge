---
title: "Message Reliability"
domain: api-streaming
topic: message-reliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.540Z
estimatedTokens: 523
keywords: [Message, Reliability, clients, subscribed, API, version, 37.0, later, Streaming, reliable, delivery, enabling, replay, past, events]
---

# Message Reliability

> For clients subscribed with API version 37.0 or later, Streaming API provides reliable
  message delivery by enabling you to replay past events through durable streaming. Clients
  subscribed with API version 36.0 or earlier might not receive all messages in some
  situations.

# Message Reliability

For clients subscribed with API version 37.0 or later, Streaming API provides reliable message delivery by enabling you to replay past events through durable streaming. Clients subscribed with API version 36.0 or earlier might not receive all messages in some situations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

When using the Streaming API endpoint, note these important considerations.

-   Durable streaming is supported when clients subscribe at the Streaming API endpoint using API version 37.0 or later. The PushTopic or platform event version affects only the fields available in the event message, but doesn’t affect the client subscription version.
-   To ensure continuity during instance refreshes and org migrations, we recommend using your org’s My Domain login URL in the Streaming API endpoint.

In API version 37.0 and later, Streaming API stores events for 24 hours, enabling you to replay past events. With durable streaming, messages aren’t lost when a client is disconnected or isn’t subscribed. When the client subscribes again, it can fetch past events that are within the 24-hour retention period. The ability to replay past events provides reliable message delivery.

In API version 36.0 and earlier, Streaming API doesn’t maintain client state nor keeps track of what’s delivered. The client might not receive messages for several reasons, including:

-   When a client first subscribes or reconnects, it might not receive messages that were processed while it wasn’t subscribed to the channel.
-   When a client disconnects and starts a new handshake, it could be working with a different application server, so it receives only new messages from that point on.
-   Some events are dropped when the system is being heavily used.
-   If an application server is stopped, all messages being processed but not yet sent are lost. Clients connected to that application server are disconnected. To receive notifications, the client must reconnect and subscribe to the topic channel.
