---
title: "isInCustomConsoleComponent()"
domain: service-cloud
topic: isincustomconsolecomponent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.082Z
keywords: [isInCustomConsoleComponent, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# isInCustomConsoleComponent()

# isInCustomConsoleComponent()

Determines if the page is in an application-level custom console component. This method is only available in API version 25.0 or later.

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
| inCustomConsoleComponent | boolean | true if the page is in a custom console component; false if the page isn’t in a custom console component. |
| success | boolean | true if returning the page status was successful; false if returning the page status wasn't successful. |