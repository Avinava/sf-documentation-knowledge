---
title: "Chatter Feed Canvas App Access Considerations"
domain: platform-connect
topic: chatter-feed-canvas-app-access-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.351Z
estimatedTokens: 485
keywords: [Chatter, Feed, Canvas, App, Access, Considerations, modifying, appears, keep, mind]
---

# Chatter Feed Canvas App Access Considerations

> When modifying a canvas app that appears in the feed, keep
these considerations in mind:

# Chatter Feed Canvas App Access Considerations

When modifying a canvas app that appears in the feed, keep these considerations in mind:

-   If the canvas app is deleted and that app is in feed items, those feed items will remain. If a user accesses one of those feed items, they’ll receive an error that the canvas app doesn’t exist.
-   If you remove a user’s access to a canvas app and that app is in feed items, those feed items will remain. If a user accesses one of those feed items, they’ll receive an error that they don’t have permissions to access the canvas app.
-   When creating a canvas app feed item either through a publisher action or through Connect REST API or Connect in Apex, Salesforce checks to see if the canvas app exists and if the user has permissions to it.
    -   If the canvas app doesn’t exist, the feed item can’t be created and an error is returned.
    -   If the canvas app exists, but the user attempting to create the feed item doesn’t have access to the canvas app, the feed item is created. However, the user won’t be able to view the feed item and an error is returned.
-   If the canvas app attempts to perform an action for which the user doesn’t have permissions, then that action will fail and the canvas app will receive an error. For example, if the app tries to create a Merchandise record but the user doesn’t have create permission on Merchandise, then the app will receive an error. The canvas app should then relay the error to the user.

#### See Also

-   [Chatter Feed Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_context_considerations.htm "When you display a canvas app inside of a feed item, the context information you receive from the signed request or from a getContext() call contains information specific to the feed:")

-   [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)

## Related Topics

- Chatter Feed Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_context_considerations.htm)
- CanvasRequest (atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)
