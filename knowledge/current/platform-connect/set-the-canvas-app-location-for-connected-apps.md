---
title: "Set the Canvas App Location for Connected Apps"
domain: platform-connect
topic: set-the-canvas-app-location-for-connected-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.608Z
estimatedTokens: 1072
keywords: [Canvas, App, Location, Connected, Apps, Specify, display, user, Salesforce, via]
---

# Set the Canvas App Location for Connected Apps

> Specify where your canvas app can display to a user in Salesforce via a connected
  app.

# Set the Canvas App Location for Connected Apps

Specify where your canvas app can display to a user in Salesforce via a connected app.

In Spring ’26, the creation of new connected apps is disabled by default. We recommend that you [use an external client app for your canvas integrations](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location_eca.htm "Specify where your canvas app can display to a user in Salesforce via an external client app.") instead. To enable connected app creation in your org, contact Salesforce Customer Support.

Before Spring ’26, when you create a canvas app via the Canvas App Previewer page, a connected app is created automatically.

1.  From Setup, search for Apps in the Quick Find box, then select **App Manager** in Lightning Experience or **Connected Apps** in Classic.
2.  In the related list, click the dropdown arrow for the app you just created and then click **Edit Settings.**
3.  In the Canvas Apps Settings section, in the Locations field, select where the canvas app can appear to the user. For this walkthrough, select **Chatter Tab**.

    -   **Chatter Feed**—The canvas app appears in the feed. If this option is selected, you must create a CanvasPost feed item and ensure that the current user has access to the canvas app.
    -   **Chatter Tab**—The canvas app appears in the app navigation list on the Chatter tab. If this option is selected, the canvas app appears there automatically.
    -   **Console**—The canvas app appears in the footer or sidebars of a Salesforce console. If this option is selected, you must choose where the canvas app appears in a console by adding it as a custom console component.
    -   **Layouts and Mobile Cards**—The canvas app can appear on a page layout or a mobile card. If this option is selected, you choose where the canvas app appears by adding it to the page layout.
    -   **Lightning Component**—The canvas app appears on your custom Lightning component [using the force:canvasApp component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.").
    -   **Mobile Nav**—The canvas app is accessible from the mobile app navigation menu.
    -   **Open CTI**—The canvas app appears in the call control tool. If this option is selected, you must specify the canvas app in your call center’s definition file for it to appear.
    -   **Publisher**—The canvas app appears in the Chatter publisher and action bar. If this option is selected, you must also create a canvas custom action and add it to the global publisher layout or to an object’s page layout.
    -   **Visualforce Page**—The canvas app can appear on a Visualforce page . If you add an <apex:canvasApp> component to expose a canvas app on a Visualforce page, be sure to select this location for the canvas app; otherwise, you’ll receive an error.

4.  Click **Save**.

    Because you selected **Chatter Tab**, your canvas app now appears in the left navigation pane on the Chatter tab in Salesforce Classic.


#### See Also

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")

-   [Create the App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_create_app.htm "Create the Heroku “hello world” app and the associated canvas app in Salesforce.")

-   [Where Canvas Apps Appear](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm "Canvas apps can appear in various places, depending on your Canvas app settings.")

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

## Related Topics

- use an external client app for your canvas integrations (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location_eca.htm)
- using the
         force:canvasApp component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Quick Start (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm)
- Create the App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_create_app.htm)
- Where Canvas Apps Appear (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm)
- Quick Start—Advanced (atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm)
