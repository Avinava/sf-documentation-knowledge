---
title: "setCustomConsoleComponentButtonIconUrl()"
domain: service-cloud
topic: setcustomconsolecomponentbuttoniconurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.680Z
keywords: [setCustomConsoleComponentButtonIconUrl, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentButtonIconUrl()

# setCustomConsoleComponentButtonIconUrl()

Sets the button icon URL of an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| iconUrl | string | A URL that points to an image that’s used as a button to launch a custom console component. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button icon URL was successful; false if setting the button icon URL wasn't successful. |