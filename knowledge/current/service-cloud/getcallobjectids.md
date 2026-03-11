---
title: "getCallObjectIds()"
domain: service-cloud
topic: getcallobjectids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.009Z
keywords: [getCallObjectIds, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getCallObjectIds()

# getCallObjectIds()

Returns any active call object IDs in the order in which they arrived or null if there aren’t any active calls. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

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

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| ids | string | The call object IDs of active calls or null if no call is active. |
| success | boolean | true if returning the active call object IDs was successful; false if returning the active call object IDs wasn’t successful. |