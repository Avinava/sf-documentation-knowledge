---
title: "Resizing a Canvas App in a Visualforce Page"
domain: platform-connect
topic: resizing-a-canvas-app-in-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.337Z
estimatedTokens: 232
keywords: [Resizing, Canvas, App, Visualforce, code, how, call, resize, explicitly, height, width, specific]
---

# Resizing a Canvas App in a Visualforce Page

> The following code example shows how to call the resize method to explicitly set the height
and width on a specific canvas app within a Visualforce page.

# Resizing a Canvas App in a Visualforce Page

The following code example shows how to call the resize method to explicitly set the height and width on a specific canvas app within a Visualforce page.

```

```

The following code example shows how to call the resize method to set the height on all canvas apps within a Visualforce page.

```

```

#### See Also

-   [Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)

-   [Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)

-   [Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)

-   [Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)

## Code Examples

```
// Set the height and width explicitly and target a canvas app
    // Where 'mycanvas0' is the canvasId on the canvas component 
    // <apex:canvasApp canvasId="mycanvas0"/>
    var target = {canvas : "mycanvas0"};
    Sfdc.canvas.controller.resize( {height : "1000px", width : "900px"}, target);
```

```
//Set only the height on all canvas apps
    Sfdc.canvas.controller.resize( {height : "1000px"});
```

## Related Topics

- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- Publishing a Canvas Event from a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)
- Subscribing to Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)
- Unsubscribing from Events in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)
