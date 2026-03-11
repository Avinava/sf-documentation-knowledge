---
title: "scrollCustomConsoleComponentButtonText()"
domain: service-cloud
topic: scrollcustomconsolecomponentbuttontext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.654Z
keywords: [scrollCustomConsoleComponentButtonText, Syntax, Arguments, Tip, Sample, Code–Visualforce, Response]
---

# scrollCustomConsoleComponentButtonText()

# scrollCustomConsoleComponentButtonText()

Scrolls a button’s text on an application-level custom console component that’s on a page. This method is only available in API version 25.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| interval | number | Controls how often the button text is scrolled in milliseconds. |
| pixelsToScroll | number | Controls how many pixels the button text scrolls. |
| isLeftScrolling | boolean | If true, the text scrolls left. If false, the text scrolls right. |
| callback | function | JavaScript method that’s called upon completion of the method. |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_console)

#### Tip

Try to give buttons short names. Scrolling is limited to the width of the button. If a button name is too long, scrolling can restart before the name finishes displaying.

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if scrolling the button text was successful; false if scrolling the button text wasn't successful. |