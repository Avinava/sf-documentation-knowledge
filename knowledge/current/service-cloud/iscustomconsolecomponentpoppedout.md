---
title: "isCustomConsoleComponentPoppedOut()"
domain: service-cloud
topic: iscustomconsolecomponentpoppedout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.074Z
keywords: [isCustomConsoleComponentPoppedOut, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# isCustomConsoleComponentPoppedOut()

# isCustomConsoleComponentPoppedOut()

Determines if a custom console component is popped out from a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if returning the component’s pop out status was successful; false otherwise. |
| poppedOut | boolean | true if the component is popped out; false otherwise. |