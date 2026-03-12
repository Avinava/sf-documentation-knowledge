---
title: "Replay Generic Streaming Events with  Durable Generic Streaming"
domain: api-streaming
topic: replay-generic-streaming-events-with-durable-generic-streaming
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.376Z
estimatedTokens: 433
keywords: [Replay, Generic, Streaming, Events, Durable, client, receive, subscribes, channel, long, Salesforce, session, active, sent, subscribed]
---

# Replay Generic Streaming Events with  Durable Generic Streaming

> A client can receive generic streaming events after it subscribes to a channel and as
    long as the Salesforce session is active. Events sent before a client subscribes to a channel or
    after a subscribed client disconnects from the Salesforce session are missed. However, a client
    can fetch the missed events within the 24-hour retention window by using Durable Generic
    Streaming.

# Replay Generic Streaming Events with Durable Generic Streaming

A client can receive generic streaming events after it subscribes to a channel and as long as the Salesforce session is active. Events sent before a client subscribes to a channel or after a subscribed client disconnects from the Salesforce session are missed. However, a client can fetch the missed events within the 24-hour retention window by using Durable Generic Streaming.

For more information about durable events, see [Message Durability](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_durability.htm "Salesforce stores PushTopic events, generic events, and standard-volume events for 24 hours and high-volume events for 72 hours. High-volume events include platform events and change data capture events. Standard-volume events are no longer available and include only events defined before Spring ’19. With API version 37.0 and later, you can retrieve events that are within the retention window through durable streaming.").

## Code Sample

See theses code samples about replaying generic streaming events.

-   [Generic Streaming Quick Start](atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_quick_start.htm)
-   [Example: Subscribe to and Replay Events Using a Visualforce Page](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm "The Visualforce sample app shows you how to subscribe to durable streaming events for PushTopic and generic events. The app contains two interactive Visualforce pages: one for PushTopic events and one for generic events. You can generate test events and view them on each page. You specify which events are retrieved and displayed by setting replay options.")

## Related Topics

- Message Durability (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_durability.htm)
- Generic Streaming Quick Start (atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_quick_start.htm)
- Example: Subscribe to and Replay Events Using a Visualforce Page (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm)
