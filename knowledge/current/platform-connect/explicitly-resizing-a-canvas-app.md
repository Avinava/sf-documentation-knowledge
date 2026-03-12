---
title: "Explicitly Resizing a Canvas App"
domain: platform-connect
topic: explicitly-resizing-a-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.273Z
estimatedTokens: 177
keywords: [Explicitly, Resizing, Canvas, App, code, how, call, resize, don’t, specify, height, width, parent, window, attempts]
---

# Explicitly Resizing a Canvas App

> The following code example shows how to call the resize method to resize a canvas app.
If you don’t specify the height and width parameters, the parent
window attempts to determine the height of the canvas app based on
its content and then set the iFrame width and height accordingly.

# Explicitly Resizing a Canvas App

The following code example shows how to call the resize method to resize a canvas app. If you don’t specify the height and width parameters, the parent window attempts to determine the height of the canvas app based on its content and then set the iFrame width and height accordingly.

```

```

#### See Also

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Automatically Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_autogrow_code_example.htm)

-   [Getting the Size of a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_size_code_example.htm)

## Code Examples

```
// Automatically determine the size.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.resize(sr.client);
});

// Set the height and width explicitly.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.resize(sr.client, {height : "1000px", width : "900px"});
});

// Set only the height.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.resize(sr.client, {height : "1000px"});
});
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Automatically Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_autogrow_code_example.htm)
- Getting the Size of a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_size_code_example.htm)
