---
title: "setCustomConsoleComponentWidth()"
domain: service-cloud
topic: setcustomconsolecomponentwidth
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.697Z
keywords: [setCustomConsoleComponentWidth, Note, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentWidth()

# setCustomConsoleComponentWidth()

Sets the window width of an application-level custom console component that’s on a page. This method is available in API version 32.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

If this method is called from a popped out component in a Salesforce console where multi-monitor components is turned on, nothing will happen.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| width | number | The new width in pixels. |
| callback | function | Javascript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the method call was successful; false otherwise. |