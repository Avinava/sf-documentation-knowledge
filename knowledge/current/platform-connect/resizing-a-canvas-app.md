---
title: "Resizing a Canvas App"
domain: platform-connect
topic: resizing-a-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.277Z
estimatedTokens: 611
keywords: [Resizing, Canvas, App, resize, functions, work, declare, DOCTYPE, top, any, HTML, pages, associated, <!DOCTYPE, html>]
---

# Resizing a Canvas App

> For resize functions to work with your canvas app, you must declare a
    DOCTYPE at the top of any HTML pages that are associated with the app. For example: <!DOCTYPE html>.

# Resizing a Canvas App

Canvas provides methods for resizing a canvas app. Full reference documentation for these methods can be found in the [SDK](https://github.com/forcedotcom/salesforcecanvasframeworksdk "HTML (New Window)") and [here](http://htmlpreview.github.io/?https://github.com/forcedotcom/SalesforceCanvasJavascriptSDK/blob/master/docs/index.html "HTML (New Window)").

-   autogrow—Starts or stops a timer that checks the content size of the canvas iFrame and adjusts the frame. See [Automatically Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_autogrow_code_example.htm).
-   resize—Informs the parent window to resize the canvas iFrame. See [Explicitly Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resize_code_example.htm).
-   size—Returns the current size of the canvas iFrame. See [Getting the Size of a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_size_code_example.htm).
-   subscribe—Subscribes to parent events. Currently, canvas.scroll (of the parent) is the only supported parent event in the canvas namespace. See [Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm).

#### Attention

For resize functions to work with your canvas app, you must declare a DOCTYPE at the top of any HTML pages that are associated with the app. For example: <!DOCTYPE html>.

-   **[Automatically Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_autogrow_code_example.htm)**

-   **[Explicitly Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resize_code_example.htm)**

-   **[Getting the Size of a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_size_code_example.htm)**

-   **[Subscribing to Parent Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)**

-   **[Handling Orientation Changes in Your Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_orientation_code_example.htm)**


#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

## Related Topics

- Automatically Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_autogrow_code_example.htm)
- Explicitly Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resize_code_example.htm)
- Getting the Size of a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_size_code_example.htm)
- Subscribing to Parent Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_subscribe_code_example.htm)
- Handling Orientation Changes in Your Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_orientation_code_example.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
