---
title: "isCustomConsoleComponentHidden()"
domain: service-cloud
topic: iscustomconsolecomponenthidden
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.071Z
keywords: [isCustomConsoleComponentHidden, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# isCustomConsoleComponentHidden()

# isCustomConsoleComponentHidden()

Determines if the application-level custom console component window is hidden. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called isCustomConsoleComponentWindowHidden().

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| hidden | boolean | true if the custom console component window is hidden; false if the custom console component window is visible. |
| success | boolean | true if the isCustomConsoleComponentHidden() call was successful; false if the isCustomConsoleComponentHidden() call wasn’t successful. |