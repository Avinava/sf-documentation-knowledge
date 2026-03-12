---
title: "Introducing Canvas"
domain: platform-connect
topic: introducing-canvas
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.426Z
estimatedTokens: 1678
keywords: [Introducing, Canvas, easily, integrate, third-party, application, Salesforce, tools, JavaScript, APIs, expose, app, take, new, applications]
---

# Introducing Canvas

> Canvas enables you to easily integrate a third-party application in
    Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to
    expose an application as a Canvas app. Then take your new or existing
    applications and make them available to your users as part of their
    Salesforce experience.

# Introducing Canvas

Canvas enables you to easily integrate a third-party application in Salesforce. Canvas is a set of tools and JavaScript APIs that you can use to expose an application as a Canvas app. Then take your new or existing applications and make them available to your users as part of their Salesforce experience.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

To prepare your Canvas apps for the new web browser restrictions on third-party cookies, see [How Third-Party Cookie Restrictions Impact Salesforce Canvas Apps](https://help.salesforce.com/s/articleView?id=002192971&type=1&language=en_US "HTML (New Window)") in Salesforce Help.

Instead of redesigning and reintegrating your external applications, you can now use these tools to integrate your technology within Canvas. Canvas includes tools that handle:

-   [Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm "When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.")—If your application requires authorization, you can implement it by using a signed request or OAuth 2.0.
-   [Context](atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)—API support that enables you to retrieve context information about the environment in which the canvas app is running.
-   [Cross-domain XHR](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm "Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the *.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.")—JavaScript support for cross-domain XML HTTP requests back to the Salesforce domain.
-   [Resizing](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)—Methods that support the ability to resize your canvas app.
-   [Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)—Events provide a JavaScript-based way to send and receive events between canvas apps. Use events to enable communication between multiple canvas apps on a single page.
-   [Canvas Apps in Aura](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")—An Aura component that lets you expose your canvas app in a custom Aura component.
-   [Canvas Apps in Visualforce](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)—A Visualforce component that lets you expose your canvas app on a Visualforce page. Canvas apps embedded in Visualforce using <apex:canvasApp> serialize parameters as part of a redirect URL during load with known limitations.
-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)—Lets you add a canvas app as a custom action and expand the publisher to include a canvas app.
-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)—Lets you expose your canvas apps as feed items.
-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)—Makes your canvas apps available in the Salesforce mobile app.

The third-party app that you want to expose as a Canvas app can be written in any language. The only requirement is that the app has a secure URL (HTTPS).

## Other Integration Options

Before diving into Canvas, consider these other options for integrating a third-party application in Salesforce.

[Web tabs](https://help.salesforce.com/articleView?id=creating_web_tabs.htm&language=en_US "HTML (New Window)")

Canvas apps present third-party applications as part of a page. Web tabs can present a full application in a large screen space.

HTML iframes in a custom component

Canvas apps provide greater functionality than developing with iframes. Iframes are sometimes easier to integrate with your application.

-   **[Canvas Scenarios](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro_scenarios.htm)**

-   **[Where Canvas Apps Appear](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_where_they_appear.htm)**
    Canvas apps can appear in various places, depending on your Canvas app settings.
-   **[Supported Browsers](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_browsers.htm)**
    Learn where Canvas is supported.
-   **[Supported Salesforce Editions](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_supported_editions.htm)**

-   **[User Permissions Required](atlas.en-us.platform_connect.meta/platform_connect/canvas_user_perms_required.htm)**
    You need certain user permissions to interact with canvas apps.
-   **[User Interface Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_ui_considerations.htm)**

-   **[Canvas App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)**

-   **[Canvas Personal Apps](atlas.en-us.platform_connect.meta/platform_connect/canvas_personal_apps_about.htm)**
    Canvas personal apps let you create connected apps that are designed specifically for end users across orgs. With a canvas personal app, you make your own app available for installation without relying on org admins for distribution.

#### See Also

-   [Quick Start](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_intro.htm "This simple quick start shows you how to get started with Canvas by using the Heroku Quick Start. The Heroku Quick Start creates a “hello world” app on Heroku in either Java or Ruby, depending on the template you select. At the same time, it creates a corresponding canvas app in Salesforce.")

-   [Quick Start—Advanced](atlas.en-us.platform_connect.meta/platform_connect/quick_start_intro.htm "This advanced quick start shows you how to get started with more of the Canvas features. It takes you step-by-step through the process of creating, packaging, uploading, installing, and running a canvas app.")

-   [Canvas Scenarios](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_intro_scenarios.htm)

-   [Canvas App Process](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_process_overview.htm)

## Related Topics

- Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)
- Context (atlas.en-us.platform_connect.meta/platform_connect/context_object.htm)
- Cross-domain XHR (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm)
- Resizing (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
- Canvas Apps in Aura (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Canvas Apps in Visualforce (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
- Canvas Apps in the Chatter
        Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
- Canvas in the Salesforce Mobile
          App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
