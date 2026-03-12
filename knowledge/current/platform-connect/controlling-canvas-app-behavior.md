---
title: "Controlling Canvas App Behavior"
domain: platform-connect
topic: controlling-canvas-app-behavior
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.409Z
estimatedTokens: 565
keywords: [Controlling, Canvas, App, Behavior, modify, signed, provide, Apex, implements, Canvas.CanvasLifecycleHandler.onRender, associate, onRender, implementation, control, custom]
---

# Controlling Canvas App Behavior

> To modify the default behavior of the signed request, you need to provide an Apex
        class that implements Canvas.CanvasLifecycleHandler.onRender() and associate this class with your
        canvas app. In your onRender() implementation, you
        can control app behavior with custom code.

# Controlling Canvas App Behavior

To modify the default behavior of the signed request, you need to provide an Apex class that implements Canvas.CanvasLifecycleHandler.onRender() and associate this class with your canvas app. In your onRender() implementation, you can control app behavior with custom code.

Salesforce calls your implementation of onRender() just before your app is rendered. Current context information is passed to this method in the Canvas.RenderContext parameter.

In your onRender() implementation, you can retrieve the following context information.

-   Application context data, such as the canvas app name, URL, version, and namespace.
-   Environment context data, such as the display location and sublocation, object field names, and custom parameters.

You can set the following context information.

-   The portion of the canvas app URL after the app domain.
-   The list of object fields for which Salesforce will return [Record](atlas.en-us.platform_connect.meta/platform_connect/record_object.htm) context data if the canvas app appears on an object page. One way a canvas app can appear on an object page is if the canvas app appears on a Visualforce page through the use of the <apex:canvasApp\> component and that Visualforce page is associated with an object.
-   The custom parameters that are passed to the canvas app.

You can also use Canvas.CanvasRenderException to present an error message to the user in the Salesforce by throwing a Canvas.CanvasRenderException.

Here’s an example onRender() implementation that:

-   Checks the app version information and, if the version is unsupported, throws a CanvasRenderException.
-   Overrides the current canvas app URL, appending ‘/alternatePath’ to the domain portion of the original URL.
-   Sets the list of object fields to include Name, BillingAddress, and YearStarted, anticipating that the canvas app will appear on the Account page.
-   Overrides the set of custom parameters by adding a new ‘newCustomParam’ parameter. Note that the current set of parameters is first retrieved and cached locally. The new parameter is added to the cached list to ensure that you don’t lose the current set of custom parameters when you call setParametersAsJSON().

```

```

## Code Examples

```apex
public void onRender(Canvas.RenderContext renderContext) {

    // Get the Application and Environment context from the RenderContext
    Canvas.ApplicationContext app = renderContext.getApplicationContext();
    Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

    // Check the application version
    Double currentVersion = Double.valueOf(app.getVersion());
    if (currentVersion <= 5){
        // Versions lower than 5 are no longer supported in this example
        throw new Canvas.CanvasRenderException('Error: Versions earlier than 5 are no longer supported.');
    }

    // Override app URL, replacing portion after domain with '/alternatePath'
    app.setCanvasUrlPath('/alternatePath');

    // Add Name, BillingAddress and YearStarted to fields 
    // (assumes we'll run from a component on the Account detail page)
    Set<String> fields = new Set<String>{'Name','BillingAddress','YearStarted'};
    env.addEntityFields(fields);

    // Add a new custom param to the set of custom params
    // First, get the current custom params
    Map<String, Object> previousParams = 
        (Map<String, Object>) JSON.deserializeUntyped(env.getParametersAsJSON());
    // Add a 'newCustomParam' to our Map
    previousParams.put('newCustomParam','newValue');
    // Now, replace the parameters
    env.setParametersAsJSON(JSON.serialize(previousParams));
}
```

## Related Topics

- Record (atlas.en-us.platform_connect.meta/platform_connect/record_object.htm)
