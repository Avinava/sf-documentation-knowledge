---
title: "testCanvasLifecycle(lifecycleHandler, mockRenderContext)"
domain: apex-reference
topic: testcanvaslifecyclelifecyclehandler-mockrendercontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.401Z
estimatedTokens: 658
keywords: [testCanvasLifecycle, lifecycleHandler, mockRenderContext, Calls, Canvas, test, framework, invoke, CanvasLifecycleHandler, provided, RenderContext., Usage, Example]
---

# testCanvasLifecycle(lifecycleHandler, mockRenderContext)

> Calls the Canvas test framework to invoke a
        CanvasLifecycleHandler with the provided RenderContext.

# testCanvasLifecycle(lifecycleHandler, mockRenderContext)

Calls the Canvas test framework to invoke a CanvasLifecycleHandler with the provided RenderContext.

## Signature

public static Void testCanvasLifecycle(Canvas.CanvasLifecycleHandler lifecycleHandler,Canvas.RenderContext mockRenderContext)

## Parameters

lifecycleHandler

Type: [Canvas.CanvasLifecycleHandler](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm "Implement this interface to control context information and add custom behavior during the application render phase.")

Specifies the CanvasLifecycleHandler implementation that you need to invoke.

mockRenderContext

Type: [Canvas.RenderContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm "A wrapper interface that is used to retrieve application and environment context information.")

Specifies the RenderContext information that you need to provide to the invoked CanvasLifecycleHandler. If null is provided for this parameter, the canvas framework generates and uses a default mock RenderContext.

## Return Value

Type: Void

## Usage

Use this method to invoke an implementation of [Canvas.CanvasLifecycleHandler.onRender(renderContext)](atlas.en-us.apexref.meta/apexref/apex_canvas_CanvasLifecycleHandler_onRender.htm "Invoked when a canvas app is rendered. Provides the ability to set and retrieve canvas application and environment context information during the application render phase.") with a mock [Canvas.RenderContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm "A wrapper interface that is used to retrieve application and environment context information.") that you provide.

## Example

The following example creates an Apex test class that uses maps to represent mock application and environment context data. The mock RenderContext object is then used to invoke a CanvasLifecycleHandler object. In this example, the CanvasLifecycleHandler is defined as MyCanvasListener, which is example implementation provided in [Canvas.RenderContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm "Implement this interface to control context information and add custom behavior during the application render phase.").

```

```

#### See Also

-   [*Canvas Developer Guide*: Testing Your CanvasLifecycleHandler Implementation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm "Canvas Developer Guide: Testing Your
    CanvasLifecycleHandler Implementation - HTML (New Window)")

## Code Examples

```apex
@IsTest
global class CanvasRendercontextTest {
    @IsTest
    static void testRenderContext(){
        // Set some application context data in a Map
        Map<String,String> appValues = new Map<String,String>();
        appValues.put(Canvas.Test.KEY_NAMESPACE,'alternateNamespace');
        appValues.put(Canvas.Test.KEY_VERSION,'3.0');
        
        // Set some environment context data in a MAp
        Map<String,String> envValues = new Map<String,String>();
        envValues.put(Canvas.Test.KEY_DISPLAY_LOCATION,'Chatter');
        envValues.put(Canvas.Test.KEY_LOCATION_URL,'https://MyDomainName.my.salesforce.com/_ui/core/chatter/ui/ChatterPage');
        
        // Create a mock RenderContext using the test application and environment context data Maps
        Canvas.RenderContext mock = Canvas.Test.mockRenderContext(appValues,envValues);
        
        // Set some custom params on the mock RenderContext
        mock.getEnvironmentContext().setParametersAsJSON('{"param1":1,"boolParam":true,"stringParam":"test string"}');
        
        // Create a CanvasLifecycleHandler
        MyCanvasListener handler = new MyCanvasListener();
        
        // Use the mock RenderContext to invoke the CanvasLifecycleHandler
        Canvas.Test.testCanvasLifecycle(handler,mock);
	}
}
```

## Related Topics

- Canvas.CanvasLifecycleHandler (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
- Canvas.RenderContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm)
- Canvas.CanvasLifecycleHandler.onRender(renderContext) (atlas.en-us.apexref.meta/apexref/apex_canvas_CanvasLifecycleHandler_onRender.htm)
- Canvas.RenderContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
