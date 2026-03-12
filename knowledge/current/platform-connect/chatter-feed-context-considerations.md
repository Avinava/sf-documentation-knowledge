---
title: "Chatter Feed Context Considerations"
domain: platform-connect
topic: chatter-feed-context-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.354Z
estimatedTokens: 521
keywords: [Chatter, Feed, Context, Considerations, display, canvas, app, inside, item, receive, signed, getContext, call, specific]
---

# Chatter Feed Context Considerations

> When you display a canvas app inside of a feed item, the
context information you receive from the signed request or from a getContext() call contains information
specific to the feed:

# Chatter Feed Context Considerations

When you display a canvas app inside of a feed item, the context information you receive from the signed request or from a getContext() call contains information specific to the feed:

-   Location—If the canvas app is in the feed, then the Environment.displayLocation field contains the value ChatterFeed.
-   Parameters—When you create a feed item that contains a canvas app, you can specify a JSON string as the parameters value. When the canvas app receives the context, the parameters in the feed item will be contained in the Environment.Parameters object.
-   Size—The Environment.Dimensions object contains information about the size of the canvas app.
    -   The canvas app height defaults to 100 pixels.
    -   The canvas app width defaults to 420 pixels, which is the same as the maximum width of a canvas app in the feed.
    -   The maximum height of a canvas app in the feed is 400 pixels.
    -   The maximum width of a canvas app in the feed is 420 pixels.
    -   This code snippet shows the default size values of a canvas app in the feed:

        ```

        ```

    -   The feed is a fixed width of 420 pixels. For example, if you resize your canvas app to be 200 pixels, the feed width remains 420 pixels.
    -   You can use the resize() method in the Canvas SDK to change the values of your canvas app up to the maxHeight and maxWidth.

#### See Also

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

-   [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Chatter Feed Canvas App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_app_access_considerations.htm "When modifying a canvas app that appears in the feed, keep these considerations in mind:")

## Code Examples

```
"dimensions":
{
    "width": "420px",
    "height": "100px",
    "maxHeight": "400px",
    "maxWidth": "420px"
}
```

## Related Topics

- Canvas Apps in the Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- Dimensions (atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)
- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Chatter Feed Canvas App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_app_access_considerations.htm)
