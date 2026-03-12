---
title: "getEnvironmentContext()"
domain: apex-reference
topic: getenvironmentcontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.379Z
estimatedTokens: 233
keywords: [getEnvironmentContext, Retrieves, environment, context, information., Usage, Example]
---

# getEnvironmentContext()

> Retrieves the environment context information.

# getEnvironmentContext()

Retrieves the environment context information.

## Signature

public Canvas.EnvironmentContext getEnvironmentContext()

## Return Value

Type: [Canvas.EnvironmentContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_EnvironmentContext.htm "Use this interface to retrieve environment context information, such as the app display location or the configuration parameters.")

## Usage

Use this method to get the environment context information for your canvas app.

## Example

The following example implementation of the [CanvasLifecycleHandler](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm "Implement this interface to control context information and add custom behavior during the application render phase.") onRender() method uses the provided RenderContext to retrieve the environment context information and then modifies the custom parameters.

```

```

## Code Examples

```apex
public void onRender(Canvas.RenderContext renderContext) {
   Canvas.EnvironmentContext env = 
        renderContext.getEnvironmentContext();
        
    // Retrieve the custom params
    Map<String, Object> previousParams = (Map<String, Object>)
          JSON.deserializeUntyped(env.getParametersAsJSON());

    previousParams.put('param1',1);
    previousParams.put('param2',3.14159);

    ...

    // Now, add in some opportunity record IDs
    Opportunity[] o = [select id, name from opportunity];
    previousParams.put('opportunities',o);

    // Now, replace the parameters
    env.setParametersAsJSON(JSON.serialize(previousParams));
}
```

## Related Topics

- Canvas.EnvironmentContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_EnvironmentContext.htm)
- CanvasLifecycleHandler (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
