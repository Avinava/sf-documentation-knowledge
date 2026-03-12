---
title: "Bayeux Protocol, CometD, and Long Polling"
domain: api-streaming
topic: bayeux-protocol-cometd-and-long-polling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.161Z
estimatedTokens: 438
keywords: [Bayeux, Protocol, CometD, Long, Polling, Streaming, API, uses]
---

# Bayeux Protocol, CometD, and Long Polling

> Streaming API uses the Bayeux protocol and CometD for long polling.

# Bayeux Protocol, CometD, and Long Polling

Streaming API uses the Bayeux protocol and CometD for long polling.

-   Bayeux is a protocol for transporting asynchronous messages, primarily over HTTP.
-   CometD is a scalable HTTP-based event routing bus that uses an AJAX push technology pattern known as Comet. It implements the Bayeux protocol.
-   Long polling, also called Comet programming, allows emulation of an information push from a server to a client. Similar to a normal poll, the client connects and requests information from the server. However, instead of sending an empty response if information isn't available, the server holds the request and waits until information is available (an event occurs). The server then sends a complete response to the client. The client then immediately re-requests information. The client continually maintains a connection to the server, so it’s always waiting to receive a response. In the case of server timeouts, the client connects again and starts over.

If you’re not familiar with long polling, Bayeux, or CometD, review the [CometD documentation](https://docs.cometd.org/ "HTML (New Window)").

Streaming API supports the following CometD methods:

| Method | Description |
| --- | --- |
| connect | The client connects to the server. |
| disconnect | The client disconnects from the server. |
| handshake | The client performs a handshake with the server and establishes a long polling connection. |
| subscribe | The client subscribes to a channel defined by a PushTopic. After the client subscribes, it can receive messages from that channel. You must successfully call the handshake method before you can subscribe to a channel. |
| unsubscribe | The client unsubscribes from a channel. |
