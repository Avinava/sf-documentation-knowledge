---
title: "Presenting User Error Messages"
domain: platform-connect
topic: presenting-user-error-messages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.470Z
estimatedTokens: 296
keywords: [Presenting, User, Error, Messages, Canvas.CanvasRenderException, display]
---

# Presenting User Error Messages

> You can use Canvas.CanvasRenderException to display error messages to the
        user.

# Presenting User Error Messages

You can use Canvas.CanvasRenderException to display error messages to the user.

If you throw a CanvasRenderException from your onRender() implementation, the error message in that exception will be displayed to the user in the Salesforce UI. This exception will be managed only within the onRender() method.

CanvasRenderException supports all the standard Apex exception class methods and constructors. See ”Exception Class and Build-In Exceptions” in the [Apex Code Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_chapter.htm "HTML (New Window)") for more information on Apex exceptions.

Here’s an example onRender() implementation that throws a Canvas.CanvasRenderException. Salesforce uses this exception and displays “Error: Could not set URL” as the user error message.

```

```

If the canvas app is run from the Salesforce Chatter tab, the error message resembles:![Screenshot of Salesforce Chatter tab with custom canvas app error](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_connect%2Fimages%2Flifecycle_canvasrenderexception_error.png&folder=platform_connect)

## Code Examples

```apex
public void onRender(Canvas.RenderContext renderContext) {
    // Code omitted that determines if the error condition occured
    ...
    throw new Canvas.CanvasRenderException('Error: Could not set URL.');
}
```
