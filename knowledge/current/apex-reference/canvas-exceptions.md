---
title: "Canvas Exceptions"
domain: apex-reference
topic: canvas-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.744Z
estimatedTokens: 352
namespace: Canvas
keywords: [Canvas, Exceptions, exception, classes]
---

# Canvas Exceptions

> The Canvas namespace contains exception
        classes.

**Namespace:** `Canvas`

# Canvas Exceptions

The Canvas namespace contains exception classes.

All exception classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.").

The Canvas namespace contains this exception:

| Exception | Description |
| --- | --- |
| Canvas.CanvasRenderException | Use this class in your implementation of Canvas.CanvasLifecycleHandler.onRender(renderContext). To show an error to the user in your onRender() implementation, throw a Canvas.CanvasRenderException, and the canvas framework will render the error message to the user.  This exception will be managed only within the onRender() method. |

## Example

The following example implementation of onRender() catches a CanvasException that was thrown because a canvas URL was set with a string that exceeded the maximum length. A CanvasRenderException is created and thrown to display the error to the user.

```

```

See the [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/ "HTML (New Window)") for additional examples that use CanvasRenderException.

## Code Examples

```apex
public class MyCanvasListener 
implements Canvas.CanvasLifecycleHandler {
    
    public void onRender(Canvas.RenderContext renderContext) {
        Canvas.ApplicationContext app = renderContext.getApplicationContext();

        // Code to generate a URL string that is too long

        // ...

        // Try to set the canvas app URL using the invalid URL string
        try {
            app.setCanvasUrlPath(aUrlPathThatIsTooLong);
        } catch (CanvasException e) {
            // Display error to user by throwing a new CanvasRenderException
            throw new Canvas.CanvasRenderException(e.getMessage());
        }
    }
}
```

## Related Topics

- Exception Class and Built-In
                    Exceptions (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)
- Canvas.CanvasLifecycleHandler.onRender(renderContext) (atlas.en-us.apexref.meta/apexref/apex_canvas_CanvasLifecycleHandler_onRender.htm)
