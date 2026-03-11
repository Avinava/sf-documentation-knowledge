---
title: "sendCustomEvent()"
domain: service-cloud
topic: sendcustomevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.660Z
keywords: [sendCustomEvent, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# sendCustomEvent()

# sendCustomEvent()

Sends a custom event to the client-side chat window for a chat with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat to which to send a custom event. |
| type | String | The name of the custom event you want to send to the chat window. |
| data | String | Additional data you want to send to the chat window along with the custom event. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if sending the custom event was successful; false if sending the custom event wasn’t successful. |