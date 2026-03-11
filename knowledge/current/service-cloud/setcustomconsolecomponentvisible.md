---
title: "setCustomConsoleComponentVisible()"
domain: service-cloud
topic: setcustomconsolecomponentvisible
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.694Z
keywords: [setCustomConsoleComponentVisible, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentVisible()

# setCustomConsoleComponentVisible()

Sets the window visibility of an application-level custom console component that’s on a page. This method is available in API version 32.0 and later. In API version 31.0 and earlier, this method was called setCustomConsoleComponentWindowVisible().

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| visible | boolean | true to make the custom console component window visible, false to hide the custom console component window. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button window visibility was successful; false if setting the button window visibility wasn't successful. |