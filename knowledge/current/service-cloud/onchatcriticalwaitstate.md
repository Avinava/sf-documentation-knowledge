---
title: "onChatCriticalWaitState()"
domain: service-cloud
topic: onchatcriticalwaitstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.526Z
keywords: [onChatCriticalWaitState, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatCriticalWaitState()

# onChatCriticalWaitState()

Registers a function to call when a chat becomes critical to answer or a waiting chat is answered. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which the critical wait state has changed. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| state | Boolean | Indicates whether the chat is in critical wait state (true) or not (false). |