---
title: "Subscribing to a Canvas App Event"
domain: platform-connect
topic: subscribing-to-a-canvas-app-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.233Z
estimatedTokens: 369
keywords: [Subscribing, Canvas, App, Event, code, how, call, subscribe, Custom, Multiple, Events]
---

# Subscribing to a Canvas App Event

> The following
code example shows how to call the subscribe method to subscribe to a canvas app event.

# Subscribing to a Canvas App Event

## Subscribing to a Custom Event

The following code example shows how to call the subscribe method to subscribe to a canvas app event.

```

```

## Subscribing to Multiple Custom Events

The following code example shows how to call the subscribe method to subscribe to multiple canvas app events. The events you subscribe to can be in different namespaces or might not have a namespace. When a canvas app subscribes to an event, it creates an association between an event (in the other canvas app) and a function (in the subscribing canvas app).

```

```

Using the travel and expense and approval canvas app examples, your approvals canvas app has two functions: handler1 and handler2. That canvas app then subscribes to two events in the travel and expense canvas app: mynamespace.statusChanged and mynamespace.tripCancelled. When the mynamespace.statusChanged event is received by the approvals app, function handler1 is called. When the anothernamespace.tripCancelled event is received by the approvals app, function handler2 is called.

#### See Also

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

-   [Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)

-   [Unsubscribing from a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_unsubscribe_code_example.htm)

## Code Examples

```
// Subscribe to a custom event.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.subscribe(sr.client,
        {name : 'mynamespace.statusChanged', onData : function (event) {
            console.log("Subscribed to custom event ", event);
        }}
    );
});
```

```
// Subscribe to multiple events.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.subscribe(sr.client, [
        {name : 'mynamespace.statusChanged', onData : handler1},
        {name : 'anothernamespace.tripCancelled', onData : handler2},
    ]);
});
```

## Related Topics

- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
- Subscribing to Parent Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)
- Unsubscribing from a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_unsubscribe_code_example.htm)
