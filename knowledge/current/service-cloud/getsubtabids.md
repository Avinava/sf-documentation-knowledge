---
title: "getSubtabIds()"
domain: service-cloud
topic: getsubtabids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.057Z
keywords: [getSubtabIds, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getSubtabIds()

# getSubtabIds()

Returns all of the IDs of the subtabs on the primary tab specified by a primary tab ID. If the primary tab ID is null, it returns the IDs of the subtabs on the current primary tab. This method can only be called from a custom console component or a detail page overwritten by a Visualforce page. This method is only available in API version 26.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| primaryTabId | string | ID of the primary tab from which the subtab IDs are returned. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| ids | string | An array of open subtab IDs. |
| success | boolean | true if firing the event was successful; false if firing the event wasn't successful. |