---
title: "onChatStarted()"
domain: service-cloud
topic: onchatstarted
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.537Z
keywords: [onChatStarted, Usage, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatStarted()

# onChatStarted()

Registers a function to call when an agent starts a new chat with a customer. Available in API version 29.0 or later.

## Usage

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a chat request is accepted and becomes an engaged chat. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat request that has become an engaged chat. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |