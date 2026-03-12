---
title: "Getting the Size of a Canvas App"
domain: platform-connect
topic: getting-the-size-of-a-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.289Z
estimatedTokens: 125
keywords: [Getting, Size, Canvas, App, code, how, call, console.log, function, outputs, frame, sizes, change, resize]
---

# Getting the Size of a Canvas App

> The following code example shows how to call the size method to get the size of the canvas
app. The console.log function
outputs the frame sizes so you can see the sizes change as you resize
the canvas app.

# Getting the Size of a Canvas App

The following code example shows how to call the size method to get the size of the canvas app. The console.log function outputs the frame sizes so you can see the sizes change as you resize the canvas app.

```

```

#### See Also

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)

## Code Examples

```
// Get the canvas app sizes in the sizes object.
var sizes = Sfdc.canvas.client.size();

console.log("contentHeight; " + sizes.heights.contentHeight);
console.log("pageHeight; " + sizes.heights.pageHeight);
console.log("scrollTop; " + sizes.heights.scrollTop);
console.log("contentWidth; " + sizes.widths.contentWidth);
console.log("pageWidth; " + sizes.widths.pageWidth);
console.log("scrollLeft; " + sizes.widths.scrollLeft);

// Resize the canvas app.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.autogrow(sr.client);
});
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Subscribing to Parent Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)
