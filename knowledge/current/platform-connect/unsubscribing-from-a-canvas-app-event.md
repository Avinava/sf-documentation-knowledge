---
title: "Unsubscribing from a Canvas App Event"
domain: platform-connect
topic: unsubscribing-from-a-canvas-app-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.237Z
estimatedTokens: 213
keywords: [Unsubscribing, Canvas, App, Event, code, how, call, unsubscribe, Custom, Multiple, Events]
---

# Unsubscribing from a Canvas App Event

> The following
code example shows how to call the unsubscribe method to unsubscribe from a canvas app event.

# Unsubscribing from a Canvas App Event

## Unsubscribing from a Custom Event

The following code example shows how to call the unsubscribe method to unsubscribe from a canvas app event.

```

```

## Unsubscribing from Multiple Custom Events

The following code example shows how to call the unsubscribe method to unsubscribe from multiple canvas app events. The events you subscribe to can be in different namespaces or might not have a namespace.

```

```

#### See Also

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

-   [Subscribing to a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_subscribe_code_example.htm)

-   [Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)

## Code Examples

```
// Unsubscribe from a custom event.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.unsubscribe(sr.client, {name : "mynamespace.statusChanged"});
});
```

```
// Unsubscribe from multiple events.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.unsubscribe(sr.client, ['mynamespace.statusChanged', "anothernamespace.tripCancelled"]);
});
```

## Related Topics

- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
- Subscribing to a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_subscribe_code_example.htm)
- Subscribing to Parent Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)
