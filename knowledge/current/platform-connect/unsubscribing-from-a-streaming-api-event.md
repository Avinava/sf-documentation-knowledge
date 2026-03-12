---
title: "Unsubscribing from a Streaming API Event"
domain: platform-connect
topic: unsubscribing-from-a-streaming-api-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.300Z
estimatedTokens: 118
keywords: [Unsubscribing, Streaming, API, Event, code, how, call, unsubscribe, canvas, app]
---

# Unsubscribing from a Streaming API Event

> This code example shows how to call the unsubscribe method so that a canvas app
can unsubscribe from a Streaming API event.

# Unsubscribing from a Streaming API Event

This code example shows how to call the unsubscribe method so that a canvas app can unsubscribe from a Streaming API event.

```

```

#### See Also

-   [Using the Streaming API Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_event_code_example.htm)

-   [Subscribing to a Streaming API Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_subscribe_code_example.htm)

## Code Examples

```
//Unsubscribe from Streaming API events.
//The PushTopic to unsubscribe from must be passed in.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.unsubscribe(sr.client, {name : 'sfdc.streamingapi',
        params:{topic:"/topic/InvoiceStatements"}});
});
```

## Related Topics

- Using the Streaming API Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_event_code_example.htm)
- Subscribing to a Streaming API Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_subscribe_code_example.htm)
