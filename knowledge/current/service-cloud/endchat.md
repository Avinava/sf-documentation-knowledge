---
title: "endChat()"
domain: service-cloud
topic: endchat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.823Z
keywords: [endChat, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# endChat()

# endChat()

Ends a chat in which an agent is currently engaged. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the engaged chat you wish to end. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if ending the chat was successful; false if ending the chat wasn’t successful. |