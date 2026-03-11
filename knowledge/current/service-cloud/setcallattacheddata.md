---
title: "setCallAttachedData()"
domain: service-cloud
topic: setcallattacheddata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.674Z
keywords: [setCallAttachedData, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCallAttachedData()

# setCallAttachedData()

Sets the call data associated with a call object ID. Use to get information or send information between an interaction log and a custom console component.This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callObjectId | string | The object ID of the call. |
| callData | string | JSON string that specifies the data to attach to the call. |
| callType | string | String that specifies the call type, such as internal, inbound, or outbound. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if the event firing was successful; false otherwise. |