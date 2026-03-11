---
title: "getChatLog() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: getchatlog-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.273Z
keywords: [getChatLog, Lightning, Experience, Arguments, argumentObj, Sample, Code, Response, message]
---

# getChatLog() for Lightning Experience for Lightning
            Experience

# getChatLog() for Lightning Experience for Lightning Experience

Returns the chat log of an Enhanced Messaging chat associated with a specific recordId. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work associated with the current chat. |

## Sample Code

This example retrieves the chat log for the given chat, logs the result, and if successful, saves the result to a variable.

Component Code:

```

```

Controller Code:

```

```

## Response

Returns a Promise. Success resolves to a response object containing the messages. The Promise is rejected if there's an error.

| Name | Type | Description |
| --- | --- | --- |
| messages | Array of message objects. | An array of chat message objects containing all of the chat messages from the chat log. |

## message

The message object contains a single chat message from the chat log and the following properties:

| Property | Type | Description |
| --- | --- | --- |
| content | String | The text content of a message in the chat log. |
| name | String | The name of the user who sent the message in the chat log. This name appears exactly as it is displayed in the chat log. |
| type | String | The type of message that was received, such as Agent or Visitor. |
| timestamp | Date/Time | The date and time the chat message was received. |