---
title: "Salesforce Mobile App Context Considerations"
domain: platform-connect
topic: salesforce-mobile-app-context-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.383Z
estimatedTokens: 665
keywords: [Salesforce, Mobile, App, Context, Considerations, Keep, mind, display, canvas, inside]
---

# Salesforce Mobile App Context Considerations

> Keep these considerations in mind when you display a canvas app inside of the Salesforce
  mobile app.

# Salesforce Mobile App Context Considerations

Keep these considerations in mind when you display a canvas app inside of the Salesforce mobile app.

When you display a canvas app inside of the feed or publisher, the canvas context you receive (either from the Signed Request or from the getContext call) contains information specific to the Salesforce mobile app publisher.

-   You can verify you’re on either the feed or publisher by looking at the displayLocation value in the environment section. For publisher, displayLocation is set to Publisher. For the feed, displayLocation is set to ChatterFeed.
-   When creating a Canvas feed item, you can specify a JSON string as the parameter’s value. When the context is sent, any value in the parameter’s field on the feed item is sent in the parameters of the environment section of the context.
-   As with any canvas app, the context contains information about the app’s dimensions. Since Salesforce is designed for mobile, the sizes we provide for it are different than the ones we provide for the full Salesforce sites.
-   To create a single-finger touch scrolling experience:
    -   Ensure that the outermost div elements contain the following properties.
        -   min-height: 250px;
        -   overflow: scroll;
        -   width: 100%;
        -   \-webkit-overflow-scrolling: touch;
        -   \-webkit-transform: translated(0%,0px,0px);
    -   Set the height attribute to the clientHeight value delivered in the signed request. For example:

        ```

        ```

    -   The clientHeight value can be very small, particularly in a phone’s landscape mode, and users might not be able to see any content. Use min-height set to the desired height in pixels to ensure a good user experience.
    -   In the navigation menu, the default puzzle icon size is 60 pixels by 60 pixels.

#### See Also

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Salesforce Mobile App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_app_access_considerations.htm "Keep these considerations in mind when modifying a canvas app that appears in the Salesforce mobile app.")

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Salesforce Mobile App Custom Icons](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm "Custom icons help distinguish your app in the Salesforce mobile app. If you don’t customize the icon for your app, you’ll get the default puzzle-piece icon.")

## Code Examples

```
// Where sr is a parsed signed request object.
var h = parseInt(sr.context.environment.dimensions.clientHeight, 10);
Sfdc.canvas.byId('divElementId').style.height = h;
```

## Related Topics

- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- Salesforce Mobile App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_app_access_considerations.htm)
- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Salesforce Mobile App Custom Icons (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm)
