---
title: "Customizing Your App Lifecycle"
domain: platform-connect
topic: customizing-your-app-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.417Z
estimatedTokens: 1378
keywords: [Customizing, App, Lifecycle, providing, custom, Apex, control, context, that’s, sent, canvas, add, behavior, rendered]
---

# Customizing Your App Lifecycle

> By providing a custom Apex class, you can control the context
   information that’s sent to your canvas app and add custom behavior when your app is
   rendered.

# Customizing Your App Lifecycle

By providing a custom Apex class, you can control the context information that’s sent to your canvas app and add custom behavior when your app is rendered.

Salesforce provides several Apex interfaces and classes in the Canvas namespace that provide additional control over the canvas app lifecycle. You can use the Canvas namespace and the CanvasLifecycleHandler interface to:

-   Control what sections of the CanvasRequest Context data get sent to your app. You can, for example, require that Salesforce never send the [Organization](atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm) information in the CanvasRequest data. Excluding sections of context data improve performance by reducing the amount of data that’s sent in the request and remove the need to process the organization data in your app.
-   Retrieve application context data when the app is rendered and alter the behavior of your app accordingly. You can obtain the application version and, depending on the version, change how the app runs.
-   Modify some of the context data, such as the canvas app URL, custom parameters, or the list of object fields that are returned in the [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm) data when the app is rendered.
-   Present a well-formed error message to the user in the Salesforce UI if something goes wrong.

Salesforce also provides a Test class in the Canvas namespace that you can use to create test context data and verify the behavior of your lifecycle handler without having to run your app.

Reference documentation for the Apex Canvas namespace is provided in the [Apex Code Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_chapter.htm "HTML (New Window)").

-   **[Creating a CanvasLifecycleHandler](atlas.en-us.platform_connect.meta/platform_connect/canvas_creating_a_new_canvaslifecyclehandler.htm)**
    You can control your app lifecycle by providing an implementation of the Canvas.CanvasLifecycleHandler Apex interface that Salesforce can use.
-   **[Associating Your CanvasLifecycleHandler with Your App](atlas.en-us.platform_connect.meta/platform_connect/canvas_associating_handler_with_app.htm)**
    After you’ve created an Apex implementation class for CanvasLifecycleHandler, you need to associate it with your canvas app by adding the class name to your canvas app configuration settings.
-   **[Filtering CanvasRequest Context Data](atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm)**
    To filter out parts of the CanvasRequest Context data that gets sent to your canvas app, you need to provide an implementation of Canvas.CanvasLifecycleHandler.excludeContextTypes().
-   **[Controlling Canvas App Behavior](atlas.en-us.platform_connect.meta/platform_connect/canvas_controlling_app_behavior.htm)**
    To modify the default behavior of the signed request, you need to provide an Apex class that implements Canvas.CanvasLifecycleHandler.onRender() and associate this class with your canvas app. In your onRender() implementation, you can control app behavior with custom code.
-   **[Presenting User Error Messages](atlas.en-us.platform_connect.meta/platform_connect/canvas_presenting_user_error_messages.htm)**
    You can use Canvas.CanvasRenderException to display error messages to the user.
-   **[Testing Your CanvasLifecycleHandler Implementation](atlas.en-us.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm)**
    You can use the Canvas.Test class to test your Canvas.CanvasLifecycleHandler.onRender() implementation without having to run your canvas app.
-   **[Distributing Your CanvasLifecycleHandler Class](atlas.en-us.platform_connect.meta/platform_connect/canvas_distributing_your_canvaslifecyclehandler.htm)**
    If you package and distribute your canvas app, make sure to include your CanvasLifecycleHandler class in your package.

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Canvas Apps and Visualforce Pages](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_vf_intro.htm)

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Canvas Apps in the Publisher](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_publisher.htm)

-   [Canvas Apps in the Chatter Feed](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_chatter_feed.htm)

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

## Related Topics

- Organization (atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm)
- Record (atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)
- Creating a CanvasLifecycleHandler (atlas.en-us.platform_connect.meta/platform_connect/canvas_creating_a_new_canvaslifecyclehandler.htm)
- Associating Your CanvasLifecycleHandler with Your App (atlas.en-us.platform_connect.meta/platform_connect/canvas_associating_handler_with_app.htm)
- Filtering CanvasRequest Context Data (atlas.en-us.platform_connect.meta/platform_connect/canvas_filtering_context_data.htm)
- Controlling Canvas App Behavior (atlas.en-us.platform_connect.meta/platform_connect/canvas_controlling_app_behavior.htm)
- Presenting User Error Messages (atlas.en-us.platform_connect.meta/platform_connect/canvas_presenting_user_error_messages.htm)
- Testing Your CanvasLifecycleHandler Implementation (atlas.en-us.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm)
- Distributing Your CanvasLifecycleHandler Class (atlas.en-us.platform_connect.meta/platform_connect/canvas_distributing_your_canvaslifecyclehandler.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
