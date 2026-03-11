---
title: "setCallObjectIds()"
domain: service-cloud
topic: setcallobjectids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.677Z
keywords: [setCallObjectIds, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCallObjectIds()

# setCallObjectIds()

Sets call object IDs, in ascending order of arrival. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | array | An array of string IDs specifying the calls to set. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if setting the call IDs was successful; false otherwise. |