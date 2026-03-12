---
title: "Handling Orientation Changes in Your Canvas
App"
domain: platform-connect
topic: handling-orientation-changes-in-your-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.264Z
estimatedTokens: 313
keywords: [Handling, Orientation, Changes, Canvas, App, code, how, subscribe, event]
---

# Handling Orientation Changes in Your Canvas
App

> The following code example shows how to subscribe to
the orientation event.

# Handling Orientation Changes in Your Canvas App

The orientation event enables you to handle changes in orientation when your canvas app appears on a mobile device. After your canvas app subscribes to the event, the event fires whenever the parent window fires a window.orientation event. The event returns a payload that contains these values.

| Value | Description |
| --- | --- |
| clientHeight | The height of the app in pixels, specific to the device on which the canvas app renders |
| clientWidth | The width of the canvas app in pixels, specific to the device on which the canvas app renders |
| orientation | Contains one of these values.0: landscape to portrait90: portrait to landscape-90: portrait to landscape turned counterclockwise |

The following code example shows how to subscribe to the orientation event.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The orientation event isn’t supported on Windows phones.

#### See Also

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)

## Code Examples

```
// Capture the orientation event of the parent window.
Sfdc.canvas.client.subscribe(sr.client,
    {name : 'canvas.orientation', 
    onData : function (event) {
        console.log("Parent's orientation: " + event.orientation +
                    "Canvas app height: " + event.clientHeight +
                    "Canvas app width: " + event. clientWidth);
        }} );
});
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Subscribing to Parent Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)
