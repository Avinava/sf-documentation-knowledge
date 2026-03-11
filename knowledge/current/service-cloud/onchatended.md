---
title: "onChatEnded()"
domain: service-cloud
topic: onchatended
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.532Z
keywords: [onChatEnded, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatEnded()

# onChatEnded()

Registers a function to call when an engaged chat ends. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when an engaged chat ends. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the engaged chat that has ended. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |