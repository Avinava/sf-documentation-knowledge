---
title: "getNavigationTabs()"
domain: service-cloud
topic: getnavigationtabs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.036Z
keywords: [getNavigationTabs, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getNavigationTabs()

# getNavigationTabs()

Returns all of the objects in the navigation tab. This method is only available in API version 31.0 or later.

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
| menuItems | object | The IDs of objects in the navigation tab. |
| success | boolean | true if returning the IDs of objects in the navigation tab was successful, false otherwise. |