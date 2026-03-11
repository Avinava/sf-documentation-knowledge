---
title: "getEnvironmentContext()"
domain: apex-reference
topic: getenvironmentcontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.135Z
keywords: [getEnvironmentContext, Signature, Return, Value, Usage, Example]
---

# getEnvironmentContext()

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