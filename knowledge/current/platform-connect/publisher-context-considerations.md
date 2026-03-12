---
title: "Publisher Context Considerations"
domain: platform-connect
topic: publisher-context-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.370Z
estimatedTokens: 577
keywords: [Publisher, Context, Considerations, display, canvas, app, inside, receive, signed, getContext, call, specific]
---

# Publisher Context Considerations

> When you display a canvas app inside the publisher, the
context information you receive from the signed request or from a getContext() call contains information
specific to the publisher:

# Publisher Context Considerations

When you display a canvas app inside the publisher, the context information you receive from the signed request or from a getContext() call contains information specific to the publisher:

-   Location—If the canvas app is in the publisher, then the Environment.displayLocation field contains the value Publisher.
-   Size—The Environment.Dimensions object contains information about the size of the canvas app.
    -   The canvas app height will be the height you specify in the quick action that you created.
    -   If you selected Create Actions Automatically when you created the canvas app, the canvas app height defaults to 200 pixels.
    -   The canvas app width defaults to 521 pixels, which is the same as the maximum width of a canvas app in the publisher.
    -   The maximum height of a canvas app in the publisher is 500 pixels.
    -   The maximum width of a canvas app in the publisher is 521 pixels.
    -   This code snippet shows the default size values of a canvas app in the publisher:

        ```

        ```

    -   The publisher is a fixed width of 521 pixels. For example, if you resize your canvas app to be 400 pixels, the publisher width remains 521 pixels.
    -   You can use the resize() method in the Canvas SDK to change the values of your canvas app up to the maxHeight and maxWidth.

#### See Also

-   [Create the Action Manually](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm "If you didn’t select the Create Actions Automatically field when you created the canvas app, then you’ll need to create the action manually.")

-   [Environment](atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)

-   [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Publisher Canvas App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_app_access_considerations.htm "When modifying a canvas app that appears in the publisher, keep these considerations in mind:")

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

## Code Examples

```
"dimensions":
{
    "width": "521px",
    "height": "200px",
    "maxHeight": "500px",
    "maxWidth": "521px"
}
```

## Related Topics

- Create the Action Manually (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm)
- Environment (atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm)
- Dimensions (atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)
- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Publisher Canvas App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_app_access_considerations.htm)
- Canvas Apps in the Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
