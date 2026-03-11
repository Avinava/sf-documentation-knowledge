---
title: "onCallEnd()"
domain: service-cloud
topic: oncallend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.566Z
keywords: [onCallEnd, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onCallEnd()

# onCallEnd()

Registers a function that is called when a call ends. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a call ends. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The call object ID of the call which has ended. |
| duration | string | The duration of the call. |
| disposition | string | The disposition of the call. |