---
title: "Canvas SDK"
domain: platform-connect
topic: canvas-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.448Z
estimatedTokens: 1480
keywords: [Canvas, SDK, tools, enable, integrate, apps, Salesforce, framework, includes, authenticate, app, retrieve, data]
---

# Canvas SDK

> Canvas is a set of tools that enable you to integrate your apps
  within Salesforce. This framework includes an SDK that you can use to
  authenticate your app and retrieve data from Salesforce.

# Canvas SDK

Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

To prepare your Canvas apps for the new web browser restrictions on third-party cookies, see [How Third-Party Cookie Restrictions Impact Salesforce Canvas Apps](https://help.salesforce.com/s/articleView?id=002192971&type=1&language=en_US "HTML (New Window)") in Salesforce Help.

The Canvas SDK and code examples are available on GitHub at [https://github.com/forcedotcom/salesforcecanvasframeworksdk](https://github.com/forcedotcom/salesforcecanvasframeworksdk "HTML (New Window)").

The Canvas SDK is versioned and matches the API version in each release. The current version is 66.0. To check the version of the SDK that you have, call the version method.

-   **[Referencing the Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.htm)**

-   **[Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)**
    When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.
-   **[Getting Context in Your Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm)**

-   **[Cross-Domain XHR](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm)**
    Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the \*.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.
-   **[Alternatives to Cookies for User Tracking](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm)**
    When creating websites and applications, the HTML <iframe\> element lets you display third-party content within the current page window. As modern browsers have increased privacy for end users, the iframe structure is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage, or local storage to track users.
-   **[Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)**

-   **[Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)**

-   **[Using Streaming API in a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)**

-   **[Debugging in a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_sdk_debug_mode.htm)**

-   **[Using the <select> Tag in a Canvas App Tag in a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_select_tag.htm)**


#### See Also

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")

-   [Referencing the Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.htm)

-   [Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm "When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.")

-   [Getting Context in Your Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm)

-   [Cross-Domain XHR](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm "Canvas apps are loaded on a Salesforce page in an iFrame. The Canvas app has its own domain and can't make XML HTTP request (XHR) calls back to the *.salesforce.com domain. You can develop and deploy your own proxies as part of the SDK, however, Canvas provides a client-side proxy written in JavaScript. This proxy enables client-side XHR calls back to Salesforce.")

-   [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)

-   [Implementing Canvas App Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)

## Related Topics

- Referencing the Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_referencing_sdk.htm)
- Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)
- Getting Context in Your Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_getting_context_code_example.htm)
- Cross-Domain XHR (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_xhr_intro.htm)
- Alternatives to Cookies for User Tracking (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm)
- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Implementing Canvas App Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_events.htm)
- Using Streaming API in a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)
- Debugging in a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_sdk_debug_mode.htm)
- Using the <select> Tag in a Canvas App Tag in a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_select_tag.htm)
