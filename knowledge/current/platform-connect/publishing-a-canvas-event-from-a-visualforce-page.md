---
title: "Publishing a Canvas Event from a Visualforce Page"
domain: platform-connect
topic: publishing-a-canvas-event-from-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.335Z
estimatedTokens: 424
keywords: [Publishing, Canvas, Event, Visualforce, code, how, call, publish, myevent, Any, app, subscribes, receive]
---

# Publishing a Canvas Event from a Visualforce Page

> The following code example shows how to call the publish method to publish the myevent event from a Visualforce page. Any canvas app that subscribes
                to this event will receive the event.

# Publishing a Canvas Event from a Visualforce Page

The following code example shows how to call the publish method to publish the myevent event from a Visualforce page. Any canvas app that subscribes to this event will receive the event.

```

```

The following code example shows how to call the publish method to publish an event to a specified canvas app from the Visualforce page.

If an event is published to specific canvas apps, even if other canvas apps on a Visualforce page are subscribed to it, only the canvas apps specified will receive that event. Using this code example, if the Visualforce page contained canvas apps app1, app2, and app3, and they all subscribed to myevent, only app1 would receive the event.

```

```

In the target parameter, you can specify multiple canvas apps by passing in an array of canvas apps: target : \[{canvas : 'app1'}, {canvas: 'app2'}\].

#### See Also

-   [Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)

-   [Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)

-   [Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)

-   [Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

## Code Examples

```
// Target all canvas apps.
    Sfdc.canvas.controller.publish({name : 'mynamespace.myevent',
                                    payload : {}});
```

```
// Target a specific canvas app
    // where "app1" is the canvasId specified in the canvas component.
    // For example: <apex:canvasApp canvasId="app1">
    Sfdc.canvas.controller.publish({name : 'mynamespace.myevent',
                                    payload : {}, 
                                    target : {canvas : 'app1'}});
```

## Related Topics

- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- Resizing a Canvas App in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)
- Subscribing to Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)
- Unsubscribing from Events in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
