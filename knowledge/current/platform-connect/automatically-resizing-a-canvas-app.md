---
title: "Automatically Resizing a Canvas App"
domain: platform-connect
topic: automatically-resizing-a-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.228Z
estimatedTokens: 204
keywords: [Automatically, Resizing, Canvas, App, code, examples, show, how, call, autogrow, resize, content, change, size, you’re]
---

# Automatically Resizing a Canvas App

> The following code examples show how to call the autogrow method to resize a canvas app. Use this method when your
                content will change size, but you’re not sure when.

# Automatically Resizing a Canvas App

The following code examples show how to call the autogrow method to resize a canvas app. Use this method when your content will change size, but you’re not sure when.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

In Mozilla® Firefox® and Microsoft® Internet Explorer®, the autogrow method might not resize the frame if the content size is reduced. In this case, you can use the resize method to specify the exact size that you want to change the frame to.

```

```

#### See Also

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Explicitly Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resize_code_example.htm)

## Code Examples

```
// Turn on auto grow with default settings.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.autogrow(sr.client);
});

// Turn on auto grow with polling interval of 100ms (milliseconds).
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.autogrow(sr.client, true, 100);
});

// Turn off auto grow.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    Sfdc.canvas.client.autogrow(sr.client, false);
});
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Explicitly Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resize_code_example.htm)
