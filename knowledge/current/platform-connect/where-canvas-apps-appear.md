---
title: "Where Canvas Apps Appear"
domain: platform-connect
topic: where-canvas-apps-appear
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.403Z
estimatedTokens: 1099
keywords: [Canvas, Apps, Appear, various, places, depending, app, settings]
---

# Where Canvas Apps Appear

> Canvas apps can appear in various places, depending on your Canvas app
  settings.

# Where Canvas Apps Appear

Canvas apps can appear in various places, depending on your Canvas app settings.

Canvas apps can appear in a few places, either in both Salesforce Classic and Lightning Experience, or only in Salesforce Classic.

These Canvas location options are available for Salesforce Classic and Lightning Experience.

-   In the Canvas App Previewer in the org in which it was created
-   In the Chatter feed, if you code the canvas app to appear there and the current user has access to the canvas app
-   As an option in the navigation menu in the Salesforce mobile app, for any user who has been allowed access to it
-   In the Chatter publisher and Salesforce mobile app action bar, if you configure it to appear as a quick action
-   In a Visualforce page after you add it to a page and make that page available to users
-   In a page layout for a standard or custom object after you add the canvas app to the page layout. Depending on where you place the canvas app on the page layout, the canvas app can appear in the record detail page or in a mobile card.

These Canvas location options are available for Salesforce Classic only. External client apps with Canvas integrations don't support these location options.

-   On the Chatter tab, in the Chatter apps list, for any user who has been allowed access to it
-   In an Open CTI call control tool after you add it to the call center’s definition file
-   In a Salesforce Console after you add it as a custom console component
-   In a Profile page in the Chatter apps list, for any user who has been allowed access to it

Where an installed canvas app appears depends on the values you select in the Locations field of the Canvas app settings.

-   **Chatter Feed**—The canvas app appears in the feed. If this option is selected, you must create a CanvasPost feed item and ensure that the current user has access to the canvas app.
-   **Chatter Tab**—The canvas app appears in the app navigation list on the Chatter tab. If this option is selected, the canvas app appears there automatically.
-   **Console**—The canvas app appears in the footer or sidebars of a Salesforce console. If this option is selected, you must choose where the canvas app appears in a console by adding it as a custom console component.
-   **Layouts and Mobile Cards**—The canvas app can appear on a page layout or a mobile card. If this option is selected, you choose where the canvas app appears by adding it to the page layout.
-   **Lightning Component**—The canvas app appears on your custom Lightning component [using the force:canvasApp component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.").
-   **Mobile Nav**—The canvas app is accessible from the mobile app navigation menu.
-   **Open CTI**—The canvas app appears in the call control tool. If this option is selected, you must specify the canvas app in your call center’s definition file for it to appear.
-   **Publisher**—The canvas app appears in the Chatter publisher and action bar. If this option is selected, you must also create a canvas custom action and add it to the global publisher layout or to an object’s page layout.
-   **Visualforce Page**—The canvas app can appear on a Visualforce page . If you add an <apex:canvasApp> component to expose a canvas app on a Visualforce page, be sure to select this location for the canvas app; otherwise, you’ll receive an error.

#### See Also

-   [Introducing Canvas](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.")

-   [Set the Canvas App Location for Connected Apps](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location.htm "Specify where your canvas app can display to a user in Salesforce via a connected app.")

-   [Supported Browsers](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_browsers.htm "Learn where Canvas is supported.")

## Related Topics

- using the
         force:canvasApp component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Introducing Canvas (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro.htm)
- Set the Canvas App Location for Connected Apps (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_set_app_location.htm)
- Supported Browsers (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_browsers.htm)
