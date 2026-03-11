---
title: "getSelectedNavigationTab()"
domain: service-cloud
topic: getselectednavigationtab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.047Z
keywords: [getSelectedNavigationTab, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getSelectedNavigationTab()

# getSelectedNavigationTab()

Returns the selected object in the navigation tab. This method is only available in API version 31.0 or later.

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

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| navigationTabId | string | The object ID of the selected object. |
| listViewUrl | object | The list view URL of the selected object. |
| label | object | The label of the selected object. |
| selected | boolean | true if returning the selected field of the object was successful, false otherwise. |
| success | boolean | true if returning the object IDs was successful, false otherwise. |