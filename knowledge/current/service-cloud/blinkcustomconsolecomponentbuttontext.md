---
title: "blinkCustomConsoleComponentButtonText()"
domain: service-cloud
topic: blinkcustomconsolecomponentbuttontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.753Z
keywords: [blinkCustomConsoleComponentButtonText, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# blinkCustomConsoleComponentButtonText()

# blinkCustomConsoleComponentButtonText()

Blinks a button’s text on an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| alternateText | string | The alternate text to display when the button text blinks. |
| interval | number | Controls how often the text blinks in milliseconds. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if blinking, the button text was successful; false if blinking the button text wasn't successful. |