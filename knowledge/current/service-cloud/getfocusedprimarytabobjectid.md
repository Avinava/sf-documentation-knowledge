---
title: "getFocusedPrimaryTabObjectId()"
domain: service-cloud
topic: getfocusedprimarytabobjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.025Z
keywords: [getFocusedPrimaryTabObjectId, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getFocusedPrimaryTabObjectId()

# getFocusedPrimaryTabObjectId()

Returns the object ID of the primary tab on which the browser is focused. This method is only available in API version 25.0 or later.

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
| id | string | The object ID of the primary tab on which the browser is focused. If there is no primary tab open, the ID is null. |
| success | boolean | true if returning the primary tab object ID on which the browser is focused was successful; false if returning the primary tab object ID on which the browser is focused wasn't successful. |