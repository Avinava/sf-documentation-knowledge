---
title: "onEnclosingTabRefresh()"
domain: service-cloud
topic: onenclosingtabrefresh
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.575Z
keywords: [onEnclosingTabRefresh, Syntax, Arguments, Sample, Code–Visualforce, Event, Handler, Response]
---

# onEnclosingTabRefresh()

# onEnclosingTabRefresh()

Registers a function to call when the enclosing tab refreshes. This method is only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the enclosing tab refreshes. |

## Sample Code–Visualforce

```

```

## Event Handler Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the refreshed tab. |
| objectId | string | The object ID of the refreshed tab or null if no object exists. |