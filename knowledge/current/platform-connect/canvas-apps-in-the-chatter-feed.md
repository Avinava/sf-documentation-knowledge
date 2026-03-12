---
title: "Canvas Apps in the Chatter Feed"
domain: platform-connect
topic: canvas-apps-in-the-chatter-feed
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.358Z
estimatedTokens: 1092
keywords: [Canvas, Apps, Chatter, Feed, expose, items, gives, users, what’s, happening, inside, Salesforce, records, groups, they’re]
---

# Canvas Apps in the Chatter Feed

> Canvas enables you to expose your canvas apps as feed items. The feed
                gives users information about what’s happening inside of Salesforce and
                information about records and groups they’re following.

# Canvas Apps in the Chatter Feed

Canvas enables you to expose your canvas apps as feed items. The feed gives users information about what’s happening inside of Salesforce and information about records and groups they’re following.

Developers can use canvas apps in the feed to:

-   Post to the Chatter feed from a canvas app in the publisher or through Connect REST API or Connect in Apex.
-   Display a canvas app inside a Chatter feed item.

When you create a canvas app Chatter feed item, it contains a thumbnail image, a link title, and a description. In Salesforce Classic, when the user clicks on the link or the description, the canvas app opens up in the feed. If the user clicks the link again, the content is collapsed, giving users a seamless experience for working in their feed. In Lightning Experience, when the user clicks on the link or the description, the user is redirected to a dedicated canvas app page.

For example, you might have a canvas app that allows a user to log their hours worked. You can now programmatically create a feed item that displays a canvas app which shows the user their currently logged hours.

In addition, the feed item could display actions depending on the current user. So the canvas app could then post a feed item to the user’s manager, and the manager could approve or deny the hours logged. Since the content is served from the canvas app, the developer has full control over the behavior.

-   **[Chatter Feed Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_context_considerations.htm)**
    When you display a canvas app inside of a feed item, the context information you receive from the signed request or from a getContext() call contains information specific to the feed:
-   **[Chatter Feed Canvas App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_app_access_considerations.htm)**
    When modifying a canvas app that appears in the feed, keep these considerations in mind:

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")

-   [Publisher Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm "When you display a canvas app inside the publisher, the context information you receive from the signed request or from a getContext() call contains information specific to the publisher:")


-   [Chatter Feed Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_context_considerations.htm "When you display a canvas app inside of a feed item, the context information you receive from the signed request or from a getContext() call contains information specific to the feed:")

## Related Topics

- Chatter Feed Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_context_considerations.htm)
- Chatter Feed Canvas App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_chatter_feed_app_access_considerations.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- Customizing Your App Lifecycle (atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm)
- Publisher Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm)
