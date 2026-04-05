---
title: "Test Class"
domain: apex-reference
topic: test-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-05T00:23:43.567Z
estimatedTokens: 376
namespace: Canvas
keywords: [Test, automated, testing, Canvas, classes, Usage]
---

# Test Class

> Contains methods for automated testing of your Canvas classes.

**Namespace:** `Canvas`

# Test Class

Contains methods for automated testing of your Canvas classes.

## Namespace

[Canvas](atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm "The Canvas namespace provides an interface and classes for canvas apps in Salesforce.")

## Usage

Use this class to test your implementation of [Canvas.CanvasLifecycleHandler](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm "Implement this interface to control context information and add custom behavior during the application render phase.") with mock test data. You can create a test Canvas.RenderContext with mock application and environment context data and use this data to verify that your CanvasLifecycleHandler is being invoked correctly.

-   **[Test Constants](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_constants.htm)**
    The Test class provides constants that are used as keys when you set mock application and environment context data.
-   **[Test Methods](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_methods.htm)**
    The Test class provides methods for creating test contexts and invoking your CanvasLifecycleHandler with mock data.

#### See Also

-   [*Canvas Developer Guide*: Testing Your CanvasLifecycleHandler Implementation](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_testing_your_canvaslifecyclehandler.htm "Canvas Developer Guide: Testing Your
    CanvasLifecycleHandler Implementation - HTML (New Window)")

## Related Topics

- Canvas (atlas.en-us.apexref.meta/apexref/apex_namespace_Canvas.htm)
- Canvas.CanvasLifecycleHandler (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
- Test Constants (atlas.en-us.apexref.meta/apexref/apex_canvas_Test_constants.htm)
- Test Methods (atlas.en-us.apexref.meta/apexref/apex_canvas_Test_methods.htm)
