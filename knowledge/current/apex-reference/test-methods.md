---
title: "Test Methods"
domain: apex-reference
topic: test-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.140Z
keywords: [Test, Methods]
---

# Test Methods

# Test Methods

The Test class provides methods for creating test contexts and invoking your CanvasLifecycleHandler with mock data.

The following are methods for Test. All are static methods.

-   **[mockRenderContext(applicationContextTestValues, environmentContextTestValues)](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_mockRenderContext.htm)**  
    Creates and returns a test Canvas.RenderContext based on the provided application and environment context parameters.
-   **[testCanvasLifecycle(lifecycleHandler, mockRenderContext)](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_testCanvasLifecycle.htm)**  
    Calls the Canvas test framework to invoke a CanvasLifecycleHandler with the provided RenderContext.