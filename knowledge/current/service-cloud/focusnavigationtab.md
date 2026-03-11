---
title: "focusNavigationTab()"
domain: service-cloud
topic: focusnavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.930Z
keywords: [focusNavigationTab, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# focusNavigationTab()

# focusNavigationTab()

Focuses the browser on the navigation tab. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if returning the object IDs was successful; false otherwise. |