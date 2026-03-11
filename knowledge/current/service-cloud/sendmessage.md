---
title: "sendMessage()"
domain: service-cloud
topic: sendmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.663Z
keywords: [sendMessage, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# sendMessage()

# sendMessage()

Sends a new chat message from the agent to a chat with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey of the chat where the agent’s message is sent. |
| message | String | The message you would like to send from the agent to the customer in a chat. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if sending the message was successful; false if sending the message wasn’t successful. |