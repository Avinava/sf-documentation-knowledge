---
title: "Create the Action Manually"
domain: platform-connect
topic: create-the-action-manually
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.375Z
estimatedTokens: 475
keywords: [Action, Manually, didn’t, select, Actions, Automatically, created, canvas, app, you’ll]
---

# Create the Action Manually

> If you didn’t select the Create Actions
Automatically field when you created the canvas app, then
you’ll need to create the action manually.

# Create the Action Manually

If you didn’t select the Create Actions Automatically field when you created the canvas app, then you’ll need to create the action manually.

1.  From Setup, enter Actions in the Quick Find box, then select **Global Actions**
2.  Click **New Action**.
3.  In the Action Type field, select Custom Canvas.
4.  In the Canvas App field, select the canvas app that you want to appear as an action.

    Only canvas apps that have a location of Publisher will appear in this field.

5.  In the Height field, enter the height of the canvas app in pixels.

    This is the initial height of the canvas app when it appears in the publisher. You can use the Canvas SDK resize() method to change the height up to a maximum of 500 pixels.

6.  In the Label field, enter a value.

    This value appears as the quick action title in the user interface.

7.  In the Name field, enter a unique value with no spaces.
8.  Optionally, in the Icon field, you can upload an icon by clicking **Change Icon**. You must upload the icon as a static resource before you can change it here.
9.  Click **Save**.

For the canvas app to appear as a quick action, you must add the action to the global layout. See “Customizing Global Publisher Layouts” in the Salesforce Help.

#### See Also

-   [Set Canvas App Location and Create the Action](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_set_location.htm "To add a canvas app to the publisher or action bar, you must set the location and create the action when you create the canvas app.")

-   [Publisher Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm "When you display a canvas app inside the publisher, the context information you receive from the signed request or from a getContext() call contains information specific to the publisher:")

## Related Topics

- Set Canvas App Location and Create the Action (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_set_location.htm)
- Publisher Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm)
