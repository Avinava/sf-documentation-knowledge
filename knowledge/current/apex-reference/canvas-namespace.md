---
title: "Canvas Namespace"
domain: apex-reference
topic: canvas-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.523Z
estimatedTokens: 480
namespace: Canvas
keywords: [Canvas, provides, classes, canvas, apps, Salesforce.]
---

# Canvas Namespace

> The Canvas namespace
provides an interface and classes for canvas apps in Salesforce.

**Namespace:** `Canvas`

# Canvas Namespace

The Canvas namespace provides an interface and classes for canvas apps in Salesforce.

The following are the interfaces and classes in the Canvas namespace.

-   **[ApplicationContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_ApplicationContext.htm)**
    Use this interface to retrieve application context information, such as the application version or URL.
-   **[CanvasLifecycleHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)**
    Implement this interface to control context information and add custom behavior during the application render phase.
-   **[ContextTypeEnum Enum](atlas.en-us.apexref.meta/apexref/apex_enum_canvas_ContextTypeEnum.htm)**
    Describes context data that can be excluded from canvas app context data. You specify which context types to exclude in the excludeContextTypes() method in your CanvasLifecycleHandler implementation.
-   **[EnvironmentContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_EnvironmentContext.htm)**
    Use this interface to retrieve environment context information, such as the app display location or the configuration parameters.
-   **[RenderContext Interface](atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm)**
    A wrapper interface that is used to retrieve application and environment context information.
-   **[Test Class](atlas.en-us.apexref.meta/apexref/apex_class_canvas_Test.htm)**
    Contains methods for automated testing of your Canvas classes.
-   **[Canvas Exceptions](atlas.en-us.apexref.meta/apexref/apex_exceptions_canvas.htm)**
    The Canvas namespace contains exception classes.

#### See Also

-   [Canvas Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_connect.meta/platform_connect/canvas_framework_intro.htm "Canvas Developer Guide - HTML (New Window)")

## Related Topics

- ApplicationContext Interface (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_ApplicationContext.htm)
- CanvasLifecycleHandler Interface (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_CanvasLifecycleHandler.htm)
- ContextTypeEnum Enum (atlas.en-us.apexref.meta/apexref/apex_enum_canvas_ContextTypeEnum.htm)
- EnvironmentContext Interface (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_EnvironmentContext.htm)
- RenderContext Interface (atlas.en-us.apexref.meta/apexref/apex_interface_canvas_RenderContext.htm)
- Test Class (atlas.en-us.apexref.meta/apexref/apex_class_canvas_Test.htm)
- Canvas Exceptions (atlas.en-us.apexref.meta/apexref/apex_exceptions_canvas.htm)
