---
title: "Using Events between a Visualforce Page and a Canvas
    App"
domain: platform-connect
topic: using-events-between-a-visualforce-page-and-a-canvas-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.493Z
estimatedTokens: 1107
keywords: [Events, Visualforce, Canvas, App, Lightning, Platform, smoothly, integrate, navigation, Salesforce, mobile, reside, JavaScript, library, framework]
---

# Using Events between a Visualforce Page and a Canvas
    App

> You can use Lightning Platform methods to smoothly integrate navigation between a canvas
        app and the Salesforce mobile app, without using Visualforce. The methods are events that
        reside in the JavaScript library within the Canvas framework. When you call one of the
        navigation

# Using Events between a Visualforce Page and a Canvas App

Canvas provides methods that you can use to publish and subscribe to events between your canvas app and the parent Visualforce page. This process includes publishing events from your Visualforce page, listening for events on your Visualforce page, unsubscribing from events on your Visualforce page, and resizing the Visualforce page that contains the canvas app. This process for resizing a canvas app differs from the process where the canvas app resizes itself, which is described in [Resizing a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm). Full reference documentation for these methods can be found in the [SDK](https://github.com/forcedotcom/salesforcecanvasframeworksdk "HTML (New Window)") and [here](http://htmlpreview.github.io/?https://github.com/forcedotcom/SalesforceCanvasJavascriptSDK/blob/master/docs/index.html "HTML (New Window)").

-   publish—Publishes an event from the Visualforce page that the canvas app can subscribe to. See [Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm).
-   resize—Used by a Visualforce page to resize a canvas app iFrame. See [Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm).
-   subscribe—Used by a Visualforce page to subscribe to events that the canvas app might publish. See [Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm).
-   unsubscribe—Used by a Visualforce page to unsubscribe to parent events that the canvas app might publish. See [Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm).

The [Controller.js](atlas.en-us.platform_connect.meta/platform_connect/controller_object.htm#controller_object) object is needed for the Visualforce page to use these methods. Your script in the Visualforce page might look something like this:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

You can use Lightning Platform methods to smoothly integrate navigation between a canvas app and the Salesforce mobile app, without using Visualforce. The methods are events that reside in the JavaScript library within the Canvas framework. When you call one of the navigation methods from your canvas code, you send an event into Salesforce that reads the payload and directs the user to the specified destination. For more information, see [Salesforce Mobile App Navigation Methods for Use with Canvas Apps](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm "The Canvas framework includes methods that you can use to smoothly integrate navigation between a canvas app and the Salesforce mobile app, without needing to use Visualforce.").

-   **[Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)**

-   **[Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)**

-   **[Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)**

-   **[Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)**


#### See Also

-   [Publishing a Canvas Event from a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)

-   [Resizing a Canvas App in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)

-   [Subscribing to Events](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)

-   [Unsubscribing from Events in a Visualforce Page](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)

-   [apex:canvasApp Component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm "Use this component to display a canvas app on a Visualforce page. The table below lists the component attributes.")

## Code Examples

```
<script type="text/javascript"src="https://yourDomain.my.salesforce.com/canvas/sdk/js/30.0/controller.js">
```

## Related Topics

- Resizing a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_resizing.htm)
- Publishing a Canvas Event from a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_publish_code_example.htm)
- Resizing a Canvas App in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_resize_code_example.htm)
- Subscribing to Events (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_subscribe_code_example.htm)
- Unsubscribing from Events in a Visualforce Page (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_unsubscribe_code_example.htm)
- Controller.js (atlas.en-us.platform_connect.meta/platform_connect/controller_object.htm)
- Salesforce Mobile App Navigation Methods for Use with Canvas Apps (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_navigation_methods.htm)
- apex:canvasApp Component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_vf_component_ref.htm)
