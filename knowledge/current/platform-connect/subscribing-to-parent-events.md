---
title: "Subscribing to Parent Events"
domain: platform-connect
topic: subscribing-to-parent-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.302Z
estimatedTokens: 94
keywords: [Subscribing, Parent, Events, code, how, call, subscribe, canvas, app, handles, onscroll, event, fires, user, scrolls]
---

# Subscribing to Parent Events

> The following code example shows how to call the subscribe method so that a canvas app
can subscribe to parent events. This example handles the onscroll event that fires when the user
scrolls in the parent window.

# Subscribing to Parent Events

The following code example shows how to call the subscribe method so that a canvas app can subscribe to parent events. This example handles the onscroll event that fires when the user scrolls in the parent window.

```

```

#### See Also

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

## Code Examples

```
//Subscribe to the parent window onscroll event.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    // Capture the onScrolling event of the parent window
    Sfdc.canvas.client.subscribe(sr.client,
        {name : 'canvas.scroll', onData : function (event) {
            console.log("Parent's contentHeight; " + event.heights.contentHeight);
            console.log("Parent's pageHeight; " + event.heights.pageHeight);
            console.log("Parent's scrollTop; " + event.heights.scrollTop);
            console.log("Parent's contentWidth; " + event.widths.contentWidth);
            console.log("Parent's pageWidth; " + event.widths.pageWidth);
            console.log("Parent's scrollLeft; " + event.widths.scrollLeft);
        }}
    );
});
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
