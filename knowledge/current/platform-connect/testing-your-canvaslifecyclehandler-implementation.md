---
title: "Testing Your CanvasLifecycleHandler Implementation"
domain: platform-connect
topic: testing-your-canvaslifecyclehandler-implementation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.486Z
estimatedTokens: 537
keywords: [Testing, CanvasLifecycleHandler, Implementation, Canvas.Test, test, Canvas.CanvasLifecycleHandler.onRender, having, run, canvas, app]
---

# Testing Your CanvasLifecycleHandler Implementation

> You can use the Canvas.Test class to test your Canvas.CanvasLifecycleHandler.onRender() implementation without having to run your canvas app.

# Testing Your CanvasLifecycleHandler Implementation

You can use the Canvas.Test class to test your Canvas.CanvasLifecycleHandler.onRender() implementation without having to run your canvas app.

Use Canvas.Test to create a test Canvas.RenderContext with mock application and environment context data. Call Canvas.Test.testCanvasLifecycle() with the mock RenderContext and your CanvasLifecycleHandler implementation to verify that your CanvasLifecycleHandler is being invoked correctly.

Use Canvas.Test.mockRenderContext() to create a mock RenderContext. You can provide initial mock application and environment context data or let Canvas.Test use a default set of mock data. You provide initial mock application and environment context data in two Maps of key-value pairs. Use the predefined Canvas.Test key name constants as your keys. The following example sets the app name in the application context data and the sublocation in the environment context data.

```

```

For the full list of context keys that Canvas.Test provides, see “Test Constants” in the [Apex Code Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_chapter.htm "HTML (New Window)").

When you’ve got a mock RenderContext, you can call Canvas.Test.testCanvasLifecycleHandler() with the RenderContext and your CanvasLifecycleHandler. This call invokes the handler’s onRender() method, and passies the mock RenderContext as context data.

Here’s an example test class that uses Canvas.Test. The test class has three methods.

-   testDefaultMockValues() invokes MyCanvasLifecycleHandler, using the default Canvas.Test mock context data.
-   testOverriddenAppValues() invokes MyCanvasLifecycleHandler, using a custom mock RenderContext with mock app URL and version application context data.
-   testOverriddenEnvironmentValues() invokes MyCanvasLifecycleHandler, using a custom mock RenderContext with mock display location, location URL, and custom parameter environment context data. The custom parameters are set through the Canvas.EnvironmentContext interface after the mock RenderContext is created.

```

```

## Code Examples

```apex
Map<String,String> appValues = new Map<String,String>();
appValues.put(Canvas.Test.KEY_NAME,'AppName');

Map<String,String> envValues = new Map<String,String>();
envValues.put(Canvas.Test.KEY_SUB_LOCATION,'mobileDevice');
```

```apex
-@isTest
global class MyCanvasLifecycleHandlerTest {

    static testMethod void testDefaultMockValues(){
        // Test handler using the default mock RenderContext Canvas.Test creates
        MyCanvasLifecycleHandler handler = new MyCanvasLifecycleHandler();
        Canvas.Test.testCanvasLifecycle(handler,null);
    }

    static testMethod void testOverriddenAppValues(){
        // Test handler with some mock application context values
        Map<String,String> appValues = new Map<String,String>();
        appValues.put(Canvas.Test.KEY_CANVAS_URL,'https://myserver.com:6000/myAppPath');
        appValues.put(Canvas.Test.KEY_VERSION,'3.0');
        
        Canvas.RenderContext mock = Canvas.Test.mockRenderContext(appValues,null);
        MyCanvasLifecycleHandler handler = new MyCanvasLifecycleHandler();
        Canvas.Test.testCanvasLifecycle(handler,mock);
    }

    static testMethod void testOverriddenEnvironmentValues(){
        // Test handler with some mock environment context values
        Map<String,String> envValues = new Map<String,String>();
        envValues.put(Canvas.Test.KEY_DISPLAY_LOCATION,'Chatter');
        envValues.put(Canvas.Test.KEY_LOCATION_URL,
            'https://myinstance.salesforce.com/_ui/core/chatter/ui/ChatterPage');
        MyCanvasLifecycleHandler handler = new MyCanvasLifecycleHandler();
        Canvas.RenderContext mock = Canvas.Test.mockRenderContext(null,envValues);
        // Directly update the mock RenderContext and set the custom parameters
        mock.getEnvironmentContext().setParametersAsJSON(
            '{"one":1,"two":2,"bool":true,"stringVal":"some string"}');
        Canvas.Test.testCanvasLifecycle(handler,mock);
    }

}
```
