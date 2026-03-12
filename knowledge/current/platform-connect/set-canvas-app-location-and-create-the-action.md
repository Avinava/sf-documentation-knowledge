---
title: "Set Canvas App Location and Create the Action"
domain: platform-connect
topic: set-canvas-app-location-and-create-the-action
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.377Z
estimatedTokens: 544
keywords: [Canvas, App, Location, Action, add, publisher, bar]
---

# Set Canvas App Location and Create the Action

> To add a canvas app to the publisher or action bar, you must set the location and
    create the action when you create the canvas app.

# Set Canvas App Location and Create the Action

To add a canvas app to the publisher or action bar, you must set the location and create the action when you create the canvas app.

1.  In Salesforce, from Setup, enter Apps in the Quick Find box, then select **App Manager**.
2.  In the Connected Apps related list, click **New**. Fill out the basic fields for your canvas app. See [Use a Connected App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm "Creating the canvas app as a connected app is no longer recommended. Use external client apps for all new Canvas integrations.").
3.  In the Canvas App settings, select **Canvas** and in the Locations field, select Publisher. You must select this location for your canvas app to appear in both the publisher in the full Salesforce site and in the action bar in the Salesforce mobile app.
4.  Select the Create Actions Automatically field. This creates a quick action for the canvas app.
5.  To hide the publisher header, which contains the "What are you working on?" text, select Hide Publisher Header. This hides the header in both the full Salesforce site and in the Salesforce mobile app.
6.  To hide the publisher **Share** button from users in both the full Salesforce site and in the Salesforce mobile app, select Hide Publisher Share Button. This checkbox is enabled only if Hide Publisher Header is selected.

For the canvas app to appear as an action, you must add the action to the global publisher layout. See “Customizing Global Publisher Layouts” in the Salesforce Help.

#### See Also

-   [Where Canvas Apps Appear](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm "Canvas apps can appear in various places, depending on your Canvas app settings.")

-   [Create the Action Manually](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm "If you didn’t select the Create Actions Automatically field when you created the canvas app, then you’ll need to create the action manually.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

## Related Topics

- Use a Connected App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app.htm)
- Where Canvas Apps Appear (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm)
- Create the Action Manually (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
