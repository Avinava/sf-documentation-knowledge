---
title: "Creating a Canvas App Event"
domain: platform-connect
topic: creating-a-canvas-app-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.230Z
estimatedTokens: 126
keywords: [Creating, Canvas, App, Event, code, how, call, publish, you’re, prefaced, namespace.eventName]
---

# Creating a Canvas App Event

> The following code example shows how to call the publish method to create a canvas app
event. If you’re using a namespace, the event name must be
prefaced by the namespace. For example, namespace.eventName.

# Creating a Canvas App Event

The following code example shows how to call the publish method to create a canvas app event. If you’re using a namespace, the event name must be prefaced by the namespace. For example, namespace.eventName.

```

```

#### See Also

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

-   [Creating a Canvas App Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_publish_code_example.htm)

## Code Examples

```
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.publish(sr.client,
        {name : "mynamespace.statusChanged", payload : {status : 'Completed'}});
});
```

## Related Topics

- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
- Creating a Canvas App Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_event_publish_code_example.htm)
