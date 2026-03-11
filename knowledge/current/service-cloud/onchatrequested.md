---
title: "onChatRequested()"
domain: service-cloud
topic: onchatrequested
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.534Z
keywords: [onChatRequested, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatRequested()

# onChatRequested()

Registers a function to call when an agent receives a chat request. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a chat request is assigned to an agent. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the incoming chat request. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |