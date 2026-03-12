---
title: "Getting Context in Your Canvas App"
domain: platform-connect
topic: getting-context-in-your-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.246Z
estimatedTokens: 565
keywords: [Getting, Context, Canvas, App, authenticate, signed, CanvasRequest, part, POST, URL, you’re, authenticating, OAuth, want, call]
---

# Getting Context in Your Canvas App

> When you authenticate your canvas app using signed request, you get the CanvasRequest object (which contains the Context object) as part
            of the POST to the canvas app URL. If you’re authenticating using OAuth, or you
            want to make a call to get context information, you can do 

# Getting Context in Your Canvas App

When you authenticate your canvas app using signed request, you get the [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm) object (which contains the Context object) as part of the POST to the canvas app URL. If you’re authenticating using OAuth, or you want to make a call to get context information, you can do so by making a JavaScript call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

Getting context data from the Canvas SDK is the most reliable way to identify users. Browsers may not send your canvas app cookies or other identifying data. See [Alternatives to Cookies for User Tracking](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm "When creating websites and applications, the HTML <iframe> element lets you display third-party content within the current page window. As modern browsers have increased privacy for end users, the iframe structure is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage, or local storage to track users.").

The following code sample is an example of a JavaScript call to get context. This code creates a link with the text “Get Context” which then calls the Sfdc.canvas.client.ctx function.

```

```

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)

-   [Filtering CanvasRequest Context Data](atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm "To filter out parts of the CanvasRequest Context data that gets sent to your canvas app, you need to provide an implementation of Canvas.CanvasLifecycleHandler.excludeContextTypes().")

## Code Examples

```
<script>
    function callback(msg) {
       if (msg.status !== 200) {
          alert("Error: " + msg.status);
          return;
       }
       alert("Payload: ", msg.payload);
    }
                
    var ctxlink = Sfdc.canvas.byId("ctxlink");
    var client = Sfdc.canvas.oauth.client();
    ctxlink.onclick=function() {
       Sfdc.canvas.client.ctx(callback, client)};
    }
</script>

<a id="ctxlink" href="#">Get Context</a>
```

## Related Topics

- CanvasRequest (atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)
- Alternatives to Cookies for User Tracking (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
- Filtering CanvasRequest Context Data (atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm)
