---
title: "Subscribing to Events"
domain: platform-connect
topic: subscribing-to-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.339Z
estimatedTokens: 225
keywords: [Subscribing, Events, code, how, call, subscribe, Visualforce, published, canvas, app]
---

# Subscribing to Events

> The following code example shows how to call the subscribe method within a Visualforce page to subscribe to specified events published from a canvas app.

# Subscribing to Events

The following code example shows how to call the subscribe method within a Visualforce page to subscribe to specified events published from a canvas app.

```

```

#### See Also

-   [Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)

-   [Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)

-   [Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)

-   [Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

## Code Examples

```
// Subscribe to a single event.
Sfdc.canvas.controller.subscribe({name : 'mynamespace.myevent0', 
                                  onData : function (e) {}});

// Subscribe to multiple events in a single call.
Sfdc.canvas.controller.subscribe([
    {name : 'mynamespace.myevent1', onData : function(e) {}},
    {name : 'mynamespace.myevent2', onData : function(e) {}}
]);
```

## Related Topics

- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- Publishing a Canvas Event from a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)
- Resizing a Canvas App in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)
- Unsubscribing from Events in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)
- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
