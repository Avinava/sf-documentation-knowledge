---
title: "reopenLastClosedTab()"
domain: service-cloud
topic: reopenlastclosedtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.640Z
keywords: [reopenLastClosedTab, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# reopenLastClosedTab()

# reopenLastClosedTab()

Reopens the last closed primary tab, and any of its subtabs that were open, the moment it was closed. This method is only available in API version 35.0 or later.

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

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the tab was reopened, false otherwise. |