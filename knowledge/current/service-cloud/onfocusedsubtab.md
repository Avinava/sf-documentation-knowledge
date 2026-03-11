---
title: "onFocusedSubtab()"
domain: service-cloud
topic: onfocusedsubtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.579Z
keywords: [onFocusedSubtab, Syntax, Arguments, Sample, Code–Visualforce, Event, Handler, Response]
---

# onFocusedSubtab()

# onFocusedSubtab()

Registers a function to call when the focus of the browser changes to a different subtab. This method is only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the focus of the browser changes to a different subtab. |

## Sample Code–Visualforce

```

```

## Event Handler Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the subtab on which the browser is focused. |
| objectId | string | The object ID of the subtab on which the browser is focused or null if no object exists. |