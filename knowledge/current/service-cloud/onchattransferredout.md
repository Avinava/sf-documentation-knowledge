---
title: "onChatTransferredOut()"
domain: service-cloud
topic: onchattransferredout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.542Z
keywords: [onChatTransferredOut, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatTransferredOut()

# onChatTransferredOut()

Registers a function to call when an engaged chat is transferred out to another agent. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a chat has been successfully transferred out to another agent. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat that has been transferred. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |