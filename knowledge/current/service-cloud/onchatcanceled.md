---
title: "onChatCanceled()"
domain: service-cloud
topic: onchatcanceled
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.524Z
keywords: [onChatCanceled, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatCanceled()

# onChatCanceled()

Registers a function to call when a chat visitor cancels a chat request. Available in API version 29.0 or later.

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

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | string | The chat key for the chat request that has been canceled. |