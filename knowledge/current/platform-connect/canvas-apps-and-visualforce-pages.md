---
title: "Canvas Apps and Visualforce Pages"
domain: platform-connect
topic: canvas-apps-and-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.452Z
estimatedTokens: 1233
keywords: [Canvas, Apps, Visualforce, Pages, addition, standard, lets, expose, app, means, display, anywhere, Known, Limitations]
---

# Canvas Apps and Visualforce Pages

> In addition to standard canvas apps, Canvas also lets you expose a canvas app on a
      Visualforce page. This means you can display a canvas app anywhere you can display a
      Visualforce page.

# Canvas Apps and Visualforce Pages

In addition to standard canvas apps, Canvas also lets you expose a canvas app on a Visualforce page. This means you can display a canvas app anywhere you can display a Visualforce page.

Developers can use Visualforce pages to:

-   Override standard buttons, such as the New button for accounts, or the Save button for contacts
-   Override tab overview pages, such as the Accounts tab home page
-   Define custom tabs
-   Embed components in detail page layouts
-   Create dashboard components or custom help pages
-   Customize, extend, or integrate the sidebars in the Salesforce Console (custom console components)

To host a canvas app on a Visualforce page, use the <apex:canvasApp> component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The Canvas framework includes methods that you can use to circumvent the navigational limitations of the iframe that contains a canvas app, without using Visualforce pages. These methods offer a streamlined alternative for controlling navigation to or from canvas apps in the Salesforce app. For details, see [Salesforce Mobile App Navigation Methods for Use with Canvas Apps](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm "The Canvas framework includes methods that you can use to smoothly integrate navigation between a canvas app and the Salesforce mobile app, without needing to use Visualforce.").

## Known Limitations

Canvas apps embedded in Visualforce using <apex:canvasApp> serialize parameters as part of a redirect URL during load. If the combined size of parameters exceeds 8KB, this may cause the redirect to fail with a 500 Internal Server Error. This is due to a header size limit.

To avoid the header size limit issue:

-   Pass only small tokens or ID's via parameters.
-   Let your Canvas app fetch large payloads server-side.
-   Consider using signedRequest mode, which avoids redirects and uses POSTS.

-   **[Visualforce Page Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_code_example.htm)**
    You can display a canvas app on a Visualforce page in a number of ways.
-   **[Visualforce Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)**

-   **[apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)**
    Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.
-   **[Using Events between a Visualforce Page and a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)**


#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Customizing Your App Lifecycle](atlas.en-us.platform_connect.meta/platform_connect/canvas_customizing_app_lifecycle.htm "By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.")

-   [Visualforce Page Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_code_example.htm "You can display a canvas app on a Visualforce page in a number of ways.")

-   [Visualforce Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

## Related Topics

- Salesforce Mobile App Navigation Methods for Use with Canvas Apps (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm)
- Visualforce Page Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_code_example.htm)
- Visualforce Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_considerations.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
- Using Events between a Visualforce Page and a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_vf_app_resizing.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Canvas Apps in the Publisher (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)
- Canvas Apps in the Chatter Feed (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)
