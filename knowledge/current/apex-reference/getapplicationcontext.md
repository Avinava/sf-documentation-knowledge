---
title: "getApplicationContext()"
domain: apex-reference
topic: getapplicationcontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.375Z
estimatedTokens: 230
keywords: [getApplicationContext, Retrieves, application, context, information., Usage, Example]
---

# getApplicationContext()

> Retrieves the application context information.

# getApplicationContext()

Retrieves the application context information.

## Signature

public Canvas.ApplicationContext getApplicationContext()

## Return Value

Type: [Canvas.ApplicationContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_ApplicationContext.htm "Use this interface to retrieve application context information, such as the application version or URL.")

## Usage

Use this method to get the application context information for your canvas app.

## Example

The following example implementation of the [CanvasLifecycleHandler](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm "Implement this interface to control context information and add custom behavior during the application render phase.") onRender() method uses the provided RenderContext to retrieve the application context information and then checks the namespace, version, and app URL.

```

```

## Code Examples

```apex
public void onRender(Canvas.RenderContext renderContext){
    Canvas.ApplicationContext app = renderContext.getApplicationContext();
    if (!'MyNamespace'.equals(app.getNamespace())){
        // This application is installed, add code as needed
        ...
    }

    // Check the application version
    Double currentVersion = Double.valueOf(app.getVersion());

    if (currentVersion <= 5){
        // Add version specific code as needed
        ...
        // Tell the canvas application to operate in deprecated mode
        app.setCanvasUrlPath('/canvas?deprecated=true');
    }
}
```

## Related Topics

- Canvas.ApplicationContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_ApplicationContext.htm)
- CanvasLifecycleHandler (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
