---
title: "mockRenderContext(applicationContextTestValues, environmentContextTestValues)"
domain: apex-reference
topic: mockrendercontextapplicationcontexttestvalues-environmentcontexttestvalues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.052Z
estimatedTokens: 841
keywords: [mockRenderContext, applicationContextTestValues, environmentContextTestValues, Creates, test, Canvas.RenderContext, provided, application, environment, context, Usage]
---

# mockRenderContext(applicationContextTestValues, environmentContextTestValues)

> Creates and returns a test Canvas.RenderContext based on the provided application and
  environment context parameters.

# mockRenderContext(applicationContextTestValues, environmentContextTestValues)

Creates and returns a test Canvas.RenderContext based on the provided application and environment context parameters.

## Signature

public static Canvas.RenderContext mockRenderContext(Map<String,String\> applicationContextTestValues, Map<String,String\> environmentContextTestValues)

## Parameters

applicationContextTestValues

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),String>

Specifies a map of key-value pairs that provide mock application context data. Use [constants](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_constants.htm "The Test class provides constants that are used as keys when you set mock application and environment context data.") that are provided by Canvas.Test as keys. If null is provided for this parameter, the canvas framework generates some default mock application context values.

environmentContextTestValues

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),String>

Specifies a map of key-value pairs that provide mock environment context data. Use [constants](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_constants.htm "The Test class provides constants that are used as keys when you set mock application and environment context data.") provided by Canvas.Test as keys. If null is provided for this parameter, the canvas framework generates some default mock environment context values.

## Return Value

Type: [Canvas.RenderContext](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm "A wrapper interface that is used to retrieve application and environment context information.")

## Usage

Use this method to create a mock Canvas.RenderContext. Use the returned RenderContext in calls to [Canvas.Test.testCanvasLifecycle(lifecycleHandler, mockRenderContext)](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_testCanvasLifecycle.htm "Calls the Canvas test framework to invoke a CanvasLifecycleHandler with the provided RenderContext.") for testing Canvas.CanvasLifecycleHandler implementations.

## Example

The following example creates maps to represent mock application and environment context data and generates a test Canvas.RenderContext. This test RenderContext can be used in a call to [Canvas.Test.testCanvasLifecycle(lifecycleHandler, mockRenderContext)](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_testCanvasLifecycle.htm "Calls the Canvas test framework to invoke a CanvasLifecycleHandler with the provided RenderContext.").

```

```

#### See Also

-   [*Canvas Developer Guide*: Testing Your CanvasLifecycleHandler Implementation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm "Canvas Developer Guide: Testing Your
    CanvasLifecycleHandler Implementation - HTML (New Window)")

## Code Examples

```apex
Map<String,String> appValues = new Map<String,String>();
appValues.put(Canvas.Test.KEY_NAMESPACE,'alternateNamespace');
appValues.put(Canvas.Test.KEY_VERSION,'3.0');

Map<String,String> envValues = new Map<String,String>();
envValues.put(Canvas.Test.KEY_DISPLAY_LOCATION,'Chatter');
envValues.put(Canvas.Test.KEY_LOCATION_URL,'https://MyDomainName.my.salesforce.com/_ui/core/chatter/ui/ChatterPage');

Canvas.RenderContext mock = Canvas.Test.mockRenderContext(appValues,envValues);
```

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- constants (atlas.en-us.apexref.meta/apexref/apex_canvas_Test_constants.htm)
- Canvas.RenderContext (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm)
- Canvas.Test.testCanvasLifecycle(lifecycleHandler, mockRenderContext) (atlas.en-us.apexref.meta/apexref/apex_canvas_Test_testCanvasLifecycle.htm)
