---
title: "onNewMessage()"
domain: service-cloud
topic: onnewmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.556Z
keywords: [onNewMessage, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onNewMessage()

# onNewMessage()

Registers a function to call when a new message is sent from a customer, agent, or supervisor. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | string | The chatKey associated with the chat for which to call a function when a new customer message is received. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| content | String | The text of a message in the chat log. |
| name | String | The name of the user who sent the message. This appears exactly as it is displayed in the chat log. |
| type | String | The type of message that was received, such as an Agent or Visitor message. |
| timestamp | Date/Time | The date and time the message was received. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |