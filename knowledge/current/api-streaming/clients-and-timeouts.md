---
title: "Clients and Timeouts"
domain: api-streaming
topic: clients-and-timeouts
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.542Z
estimatedTokens: 484
keywords: [Clients, Timeouts, Streaming, API, imposes, two, Bayeux, protocol]
---

# Clients and Timeouts

> Streaming API imposes two timeouts,
         as supported in the Bayeux protocol.

# Clients and Timeouts

Streaming API imposes two timeouts, as supported in the Bayeux protocol.

Socket timeout: 110 seconds

A client receives events (JSON-formatted HTTP responses) while it waits on a connection. If no events are generated and the client is still waiting, the connection times out after 110 seconds and the client closes the connection. Clients should reconnect before two minutes to avoid the Bayeux session timeout.

Reconnect timeout: 40 seconds

After receiving the events, a client needs to reconnect to receive the next set of events. If the reconnection doesn't happen within 40 seconds, the server expires the subscription and the connection is closed. If this happens, the client must start again and handshake, subscribe, and connect.

Each Streaming API client logs into an instance and maintains a session. When the client handshakes, connects, or subscribes, the session timeout is restarted. A client session times out if the client doesn’t reconnect to the server within 40 seconds after receiving a response (an event, subscribe result, and so on).

Note that these timeouts apply to the Streaming API client session and not the Salesforce authentication session. If the client session times out, the authentication session remains active until the organization-specific timeout policy goes into effect.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

In addition to timeouts, a client might disconnect from the channel due to network failures. For more information, see [Short Network Failures](https://docs.cometd.org/current/reference/#_short_network_failures "HTML (New Window)") and [Long Network Failures or Server Failures](https://docs.cometd.org/current/reference/#_long_network_failures_or_server_failures "HTML (New Window)") in the [CometD Reference Documentation](https://docs.cometd.org/current/reference/ "HTML (New Window)").
