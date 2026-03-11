---
title: "setTabStyle()"
domain: service-cloud
topic: settabstyle
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.724Z
keywords: [setTabStyle, Syntax, Arguments, Sample, Code–Visualforce, Response, Note]
---

# setTabStyle()

# setTabStyle()

Sets a cascading style sheet (CSS) on the specified tab. If a tab is not specified, the CSS is set on the enclosing tab. Use this method to customize a tab’s look and feel. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| style | string | A CSS specification string used to style the tab. If null or undefined, the tab’s default style is used. |
| tabId | string | The ID of the tab on which to set the style. If null or undefined, the enclosing tab’s ID is used. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the tab’s style was successful, false if setting the tab’s style wasn’t successful. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called without passing in a tab ID, the tab in which the Visualforce page is enclosed is used. If there isn’t an enclosing tab, the error message Cannot get a workspace or view tab from the given ID displays in the browser’s developer console.