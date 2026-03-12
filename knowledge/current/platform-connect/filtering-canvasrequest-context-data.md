---
title: "Filtering CanvasRequest Context Data"
domain: platform-connect
topic: filtering-canvasrequest-context-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.421Z
estimatedTokens: 338
keywords: [Filtering, CanvasRequest, Context, Data, filter, parts, sent, canvas, app, provide, implementation]
---

# Filtering CanvasRequest Context Data

> To filter out parts of the CanvasRequest Context data that gets sent to your canvas
        app, you need to provide an implementation of Canvas.CanvasLifecycleHandler.excludeContextTypes().

# Filtering CanvasRequest Context Data

To filter out parts of the CanvasRequest Context data that gets sent to your canvas app, you need to provide an implementation of Canvas.CanvasLifecycleHandler.excludeContextTypes().

Salesforce calls your implementation of excludeContextTypes() to determine what context information is sent to your app. Your implementation returns a set of context data to exclude or returns null (or an empty set) if you need to receive all context data. The set consists of values from the Canvas.ContextTypeEnum Apex enum type.

The enum values are used as follows::

-   ORGANIZATION: Exclude context information about the organization in which the canvas app is running.
-   RECORD\_DETAIL: Exclude context information about the object record on which the canvas app appears.
-   USER: Exclude context information about the current user.

Here’s an example excludeContextTypes() implementation that excludes the Organization and User context data:

```

```

When your canvas app receives CanvasRequest Context data, the JSON data does not include the “organization” and “user” sections.

Reference documentation for the Apex Canvas.ContextTypeEnum is provided in the [Apex Code Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_chapter.htm "HTML (New Window)").

## Code Examples

```apex
public Set<Canvas.ContextTypeEnum> excludeContextTypes(){
    Set<Canvas.ContextTypeEnum> excluded = new Set<Canvas.ContextTypeEnum>();

    // Exclude the Organization and User context data
    excluded.add(Canvas.ContextTypeEnum.ORGANIZATION);
    excluded.add(Canvas.ContextTypeEnum.USER);

    return excluded;
}
```
