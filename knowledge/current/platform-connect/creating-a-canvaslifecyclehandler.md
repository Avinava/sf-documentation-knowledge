---
title: "Creating a CanvasLifecycleHandler"
domain: platform-connect
topic: creating-a-canvaslifecyclehandler
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.412Z
estimatedTokens: 431
keywords: [Creating, CanvasLifecycleHandler, control, app, lifecycle, providing, implementation, Canvas.CanvasLifecycleHandler, Apex, Salesforce]
---

# Creating a CanvasLifecycleHandler

> You can control your app lifecycle by providing an implementation of the
        Canvas.CanvasLifecycleHandler Apex interface that Salesforce can use.

# Creating a CanvasLifecycleHandler

You can control your app lifecycle by providing an implementation of the Canvas.CanvasLifecycleHandler Apex interface that Salesforce can use.

The Apex Canvas.CanvasLifecycleHandler interface provides methods and callbacks for customizing app lifecycle behavior. Salesforce will use your implementation at runtime to let you run custom code. Use the following steps to create an implementation of the Canvas.CanvasLifecycleHandler interface.

1.  From Setup, enter Apex Classes in the Quick Find box, then select **Apex Classes**.
2.  Click **New** to create a Apex class.
3.  Create an Apex class that implements the Canvas.CanvasLifecycleHandler interface. You must implement the excludeContextTypes() and onRender() methods. Here’s a template example:

    ```

    ```

4.  After you’ve finished adding your code, save the Apex class.
5.  Optionally test your implementation by using the Canvas.Test class.
6.  To let Salesforce know which implementation to use for your app, associate your Apex class with your app.

#### See Also

-   [Testing Your CanvasLifecycleHandler Implementation](atlas.en-us.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm "You can use the Canvas.Test class to test your Canvas.CanvasLifecycleHandler.onRender() implementation without having to run your canvas app.")

-   [Associating Your CanvasLifecycleHandler with Your App](atlas.en-us.platform_connect.meta/platform_connect/canvas_associating_handler_with_app.htm "After you’ve created an Apex implementation class for CanvasLifecycleHandler, you need to associate it with your canvas app by adding the class name to your canvas app configuration settings.")

## Code Examples

```apex
public class MyCanvasLifecycleHandler 
implements Canvas.CanvasLifecycleHandler {

    public Set<Canvas.ContextTypeEnum> excludeContextTypes(){
        Set<Canvas.ContextTypeEnum> excluded = new Set<Canvas.ContextTypeEnum>();

        // Code goes here to add items to excluded list
        // that should be excluded from Context data

        return excluded;
    }

    public void onRender(Canvas.RenderContext renderContext) {

        // Code goes here to customize behavior when the app is rendered

    }
}
```

## Related Topics

- Testing Your CanvasLifecycleHandler Implementation (atlas.en-us.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm)
- Associating Your CanvasLifecycleHandler with Your App (atlas.en-us.platform_connect.meta/platform_connect/canvas_associating_handler_with_app.htm)
