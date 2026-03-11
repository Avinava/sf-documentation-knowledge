---
title: "setCustomConsoleComponentButtonStyle()"
domain: service-cloud
topic: setcustomconsolecomponentbuttonstyle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.683Z
keywords: [setCustomConsoleComponentButtonStyle, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentButtonStyle()

# setCustomConsoleComponentButtonStyle()

Sets the style of a button used to launch an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| style | string | The style of a button used to launch a custom console component. The styles supported include font, font color, and background color. Font and font color isn’t available for Internet Explorer® 7. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the button style was successful; false if setting the button style wasn't successful. |