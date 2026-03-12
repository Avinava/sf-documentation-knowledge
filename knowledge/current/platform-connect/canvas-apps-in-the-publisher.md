---
title: "Canvas Apps in the Publisher"
domain: platform-connect
topic: canvas-apps-in-the-publisher
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.362Z
estimatedTokens: 1179
keywords: [Canvas, Apps, Publisher, expose, quick, actions, users, access, common, organization, expand, include, app, leverage, custom]
---

# Canvas Apps in the Publisher

> Canvas
                enables you to expose your canvas apps as quick actions. The publisher allows users
                access to the most common actions in your organization. You can expand the publisher
                to include a canvas app so that users can leverage the common custom actions

# Canvas Apps in the Publisher

Canvas enables you to expose your canvas apps as quick actions. The publisher allows users access to the most common actions in your organization. You can expand the publisher to include a canvas app so that users can leverage the common custom actions of a canvas app. These actions can then integrate with the feed and create a feed post specific to the action that was performed.

Developers can use canvas apps in the publisher to:

-   Add content from a Web application into the Chatter publisher.
-   Create a custom action that exposes a canvas app.
-   Integrate your canvas app directly into the publisher life cycle: post from your canvas app into the Chatter feed, use the Share button functionality, and designate where to post your message.

For example, you might have a canvas app that your users use to log their hours worked. You can create a quick action that allows a user to open that canvas app in the publisher so they can quickly submit a time record, all right from within the publisher.

Users can still access the canvas app in the standard way for full functionality; but the canvas app in the publisher provides quick access to the most common functions of your app. A user can select the quick action and create a Chatter feed item that can be a text post, a link post, or even a canvas post.

-   **[Set Canvas App Location and Create the Action](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_set_location.htm)**
    To add a canvas app to the publisher or action bar, you must set the location and create the action when you create the canvas app.
-   **[Create the Action Manually](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm)**
    If you didn’t select the Create Actions Automatically field when you created the canvas app, then you’ll need to create the action manually.
-   **[Canvas SDK Publisher Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_sdk_publisher_events.htm)**
    When you expose a canvas app in the publisher, you can use well-defined events to enable communication between the canvas app and the publisher.
-   **[Publisher Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm)**
    When you display a canvas app inside the publisher, the context information you receive from the signed request or from a getContext() call contains information specific to the publisher:
-   **[Publisher Canvas App Access Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_app_access_considerations.htm)**
    When modifying a canvas app that appears in the publisher, keep these considerations in mind:

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")

-   [Set Canvas App Location and Create the Action](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_set_location.htm "To add a canvas app to the publisher or action bar, you must set the location and create the action when you create the canvas app.")

## Related Topics

- Set Canvas App Location and Create the Action (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_set_location.htm)
- Create the Action Manually (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_create_action.htm)
- Canvas SDK Publisher Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_sdk_publisher_events.htm)
- Publisher Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_context_considerations.htm)
- Publisher Canvas App Access Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_publisher_app_access_considerations.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Canvas Apps and Visualforce Pages (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Canvas Apps in the Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
