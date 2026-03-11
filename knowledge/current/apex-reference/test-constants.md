---
title: "Test Constants"
domain: apex-reference
topic: test-constants
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.139Z
keywords: [Test, Constants]
---

# Test Constants

# Test Constants

The Test class provides constants that are used as keys when you set mock application and environment context data.

When you call [Canvas.Test.mockRenderContext(applicationContextTestValues, environmentContextTestValues)](atlas.en-us.apexref.meta/apexref/apex_canvas_Test_mockRenderContext.htm "Creates and returns a test Canvas.RenderContext based on the provided application and environment context parameters."), you need to provide maps of key-value pairs to represent your mock application and environment context data. The Test class provides static constant strings that you can use as keys for various parts of the application and environment context.

| Constant | Description |
| --- | --- |
| KEY_CANVAS_URL | Represents the canvas app URL key in the ApplicationContext. |
| KEY_DEVELOPER_NAME | Represents the canvas app developer or API name key in the ApplicationContext. |
| KEY_DISPLAY_LOCATION | Represents the canvas app display location key in the EnvironmentContext. |
| KEY_LOCATION_URL | Represents the canvas app location URL key in the EnvironmentContext. |
| KEY_NAME | Represents the canvas app name key in the ApplicationContext. |
| KEY_NAMESPACE | Represents the canvas app namespace key in the ApplicationContext. |
| KEY_SUB_LOCATION | Represents the canvas app sublocation key in the EnvironmentContext. |
| KEY_VERSION | Represents the canvas app version key in the ApplicationContext. |