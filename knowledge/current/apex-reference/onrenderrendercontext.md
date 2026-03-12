---
title: "onRender(renderContext)"
domain: apex-reference
topic: onrenderrendercontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.999Z
estimatedTokens: 360
keywords: [onRender, renderContext, Invoked, canvas, app, rendered, ability, retrieve, application, environment, context, render, phase, Usage]
---

# onRender(renderContext)

> Invoked when a canvas app is rendered. Provides the ability to set and retrieve
        canvas application and environment context information during the application render
        phase.

# onRender(renderContext)

Invoked when a canvas app is rendered. Provides the ability to set and retrieve canvas application and environment context information during the application render phase.

## Signature

public void onRender(Canvas.RenderContext renderContext)

## Parameters

renderContext

Type: [Canvas.RenderContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm "A wrapper interface that is used to retrieve application and environment context information.")

## Return Value

Type: Void

## Usage

If implemented, this method is called whenever the canvas app is rendered. The implementation can set and retrieve context information by using the provided Canvas.RenderContext.

This method is called whenever signed request or context information is retrieved by the client. See the [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/ "HTML (New Window)") for more information on signed request authentication.

## Example

This example implementation prints ‘Canvas lifecycle called.’ to the debug log when the canvas app is rendered.

```

```

#### See Also

-   [*Canvas Developer Guide*: Controlling App Behavior](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_controlling_app_behavior.htm "Canvas Developer Guide: Controlling App
    Behavior - HTML (New Window)")

## Related Topics

- Canvas.RenderContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm)
