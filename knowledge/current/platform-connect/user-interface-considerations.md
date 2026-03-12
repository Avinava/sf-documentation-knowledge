---
title: "User Interface Considerations"
domain: platform-connect
topic: user-interface-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.306Z
estimatedTokens: 867
keywords: [User, Considerations, plan, canvas, app, Salesforce, mobile, take, account, device, screen, sizes, Size, Logo, Image]
---

# User Interface Considerations

> If you plan to use your canvas app in the Salesforce mobile
     app, take into account mobile device screen sizes. For more information, see Canvas in the Salesforce Mobile App.

# User Interface Considerations

## Canvas Size

The frame size for canvas apps varies depending on the location where the app appears. When using the SDK, these values are returned in the [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm) object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

If you plan to use your canvas app in the Salesforce mobile app, take into account mobile device screen sizes. For more information, see [Canvas in the Salesforce Mobile App.](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

| Location | Description |
| --- | --- |
| Chatter tab | The default dimensions are 800 pixels (wide) by 900 pixels (high). The maximum dimensions are 1,000 pixels (wide) by 2,000 pixels (high). |
| Chatter feed | The default dimensions are 420 pixels (wide) by 100 pixels (high). The maximum dimensions are 420 pixels (wide) by 400 pixels (high). |
| Open CTI | The default and maximum dimensions are determined by the way you set up the custom console component. |
| Publisher | The way you set up the canvas publisher action determines the default height. The default width is 522 pixels. The maximum dimensions are 522 pixels (wide) by 500 pixels (high). |
| Salesforce Console | The default and maximum dimensions are determined by the way you set up the custom console component. |
| Visualforce page | The default dimensions are 800 pixels (wide) by 900 pixels (high). A developer can change these dimensions by modifying the attributes on the apex:canvasApp Component. |

## Logo Image

The logo image associated with a canvas app is displayed when someone installs your canvas app or during OAuth authentication when the user is prompted to allow the app to run. We recommend that you use an image of size 256 pixels (high) by 256 pixels (wide).

## Icon Image

The icon image associated with a canvas app is displayed in these locations.

-   To the left of the link to your canvas app on the Chatter tab, in the Chatter apps list
-   To the left of the link to your canvas app in the Canvas App Previewer
-   In the Salesforce navigation menu

We recommend that you use an image of size 60 pixels (wide) by 60 pixels (high) so that the icon appears correctly in both mobile and the Salesforce site. If you have no plans to display your icon in the Salesforce mobile app, you can use a smaller icon size of 16 pixels (wide) by 16 pixels (high).

## Thumbnail Image

The thumbnail image associated with a canvas app feed item is displayed when someone accesses your canvas app in the feed. If specified, this image appears next to the feed item title and description.

We recommend that you use an image of size 120 pixels (wide) by 120 pixels (high) or smaller.

#### See Also

-   [Introducing Canvas](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.")

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Canvas App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)

## Related Topics

- Dimensions (atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)
- Canvas in the Salesforce Mobile App. (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
- Introducing Canvas (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm)
- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Canvas App Process (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)
