---
title: "Canvas in the Salesforce Mobile App"
domain: platform-connect
topic: canvas-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.366Z
estimatedTokens: 1514
keywords: [Canvas, Salesforce, Mobile, App, expose, apps, enterprise-class, gives, real-time, access, office, it’s, organized, getting, work]
---

# Canvas in the Salesforce Mobile App

> Canvas enables you to expose your canvas apps in the Salesforce
        mobile app. The Salesforce mobile app is Salesforce on the go. This enterprise-class mobile
        app gives you real-time access to the same information that you see in the office, but
        it’s organized for getting work d

# Canvas in the Salesforce Mobile App

Canvas enables you to expose your canvas apps in the Salesforce mobile app. The Salesforce mobile app is Salesforce on the go. This enterprise-class mobile app gives you real-time access to the same information that you see in the office, but it’s organized for getting work done when you’re away from your desk. Just like in the full Salesforce site, users can access publisher and Chatter feed items, including Canvas apps.

Developers can use canvas apps in the Salesforce mobile app to:

-   Expose a canvas app as an action. An icon indicates a canvas app. You can use either the default puzzle icon or upload a custom icon for the related action.
-   Post to the feed from a canvas app in Salesforce or through Connect REST API or Connect in Apex.
-   Display a canvas app inside a feed item from within the Salesforce mobile app. An icon indicates a canvas app. You can use either the default puzzle icon or provide a thumbnail URL in the feed item to display a custom icon.
-   Add a canvas app as an option in the navigation menu. An icon indicates a canvas app. You can use the default puzzle icon or provide a custom icon URL in the connected app settings of your canvas app.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

    #### Note

    Canvas apps don’t appear in the app navigation menu in Salesforce for Android. To see canvas apps in the navigation menu, log in to Salesforce mobile web.


For example, you might have a canvas app that warehouse employees use to process orders on a mobile device. You can create an action that accesses the app from the icon of the device, allowing employees to pull up a list of customer orders. After an order is processed, the app sets the order status in Salesforce and posts a feed item to the associated customer account.

Users can still access your canvas app from within Salesforce on a desktop machine. The additional functionality for mobile devices that Salesforce offers doesn’t impact or limit existing functionality.

-   **[Set Canvas App Location and Add it to the Navigation Menu](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_set_location.htm)**
    To add a canvas app to appear in the Salesforce mobile app navigation menu, you must set the location and add it to the mobile navigation.
-   **[Salesforce Mobile App Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm)**
    Keep these considerations in mind when you display a canvas app inside of the Salesforce mobile app.
-   **[Salesforce Mobile App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_app_access_considerations.htm)**
    Keep these considerations in mind when modifying a canvas app that appears in the Salesforce mobile app.
-   **[Salesforce Mobile App Custom Icons](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm)**
    Custom icons help distinguish your app in the Salesforce mobile app. If you don’t customize the icon for your app, you’ll get the default puzzle-piece icon.
-   **[Salesforce Mobile App Navigation Methods for Use with Canvas Apps](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm)**
    The Canvas framework includes methods that you can use to smoothly integrate navigation between a canvas app and the Salesforce mobile app, without needing to use Visualforce.

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")


-   [Salesforce Mobile App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_app_access_considerations.htm "Keep these considerations in mind when modifying a canvas app that appears in the Salesforce mobile app.")

-   [Salesforce Mobile App Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm "Keep these considerations in mind when you display a canvas app inside of the Salesforce mobile app.")

-   [Salesforce Mobile App Custom Icons](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm "Custom icons help distinguish your app in the Salesforce mobile app. If you don’t customize the icon for your app, you’ll get the default puzzle-piece icon.")

## Related Topics

- Set Canvas App Location and Add it to the Navigation Menu (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_set_location.htm)
- Salesforce Mobile App Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm)
- Salesforce Mobile App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_app_access_considerations.htm)
- Salesforce Mobile App Custom Icons (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm)
- Salesforce Mobile App Navigation Methods for Use with Canvas Apps (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
