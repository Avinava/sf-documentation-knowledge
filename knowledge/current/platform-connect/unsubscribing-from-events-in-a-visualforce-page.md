---
title: "Unsubscribing from Events in a Visualforce Page"
domain: platform-connect
topic: unsubscribing-from-events-in-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.341Z
estimatedTokens: 189
keywords: [Unsubscribing, Events, Visualforce, code, how, call, unsubscribe, two]
---

# Unsubscribing from Events in a Visualforce Page

> The following code example shows how to call the unsubscribe method within a Visualforce page to unsubscribe from two events.

# Unsubscribing from Events in a Visualforce Page

The following code example shows how to call the unsubscribe method within a Visualforce page to unsubscribe from two events.

```

```

#### See Also

-   [Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)

-   [Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)

-   [Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)

-   [Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)

## Code Examples

```
Sfdc.canvas.controller.unsubscribe(['mynamespace.myevent2', 'mynamespace.myevent2']);
```

## Related Topics

- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- Publishing a Canvas Event from a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)
- Resizing a Canvas App in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)
- Subscribing to Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)
