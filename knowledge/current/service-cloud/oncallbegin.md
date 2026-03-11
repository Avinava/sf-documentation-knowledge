---
title: "onCallBegin()"
domain: service-cloud
topic: oncallbegin
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.563Z
keywords: [onCallBegin, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onCallBegin()

# onCallBegin()

Registers a function that is called when a call begins (comes in). This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a call begins. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The call object ID of the call which has begun. |