---
title: "sendMessage() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: sendmessage-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.345Z
keywords: [sendMessage, Lightning, Experience, Arguments, argumentObj, message, Sample, Code, Response]
---

# sendMessage() for Lightning Experience for Lightning
            Experience

# sendMessage() for Lightning Experience for Lightning Experience

Sends a new chat message from the agent to a chat with a specific chat key. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the chat that you want to end. |
| message | Object | An object containing the data to send in the message. |

## message

| Name | Type | Description |
| --- | --- | --- |
| text | String | The text to be sent in the message. |

## Sample Code

This example sends a message to the visitor and logs the result.

Component Code:

```

```

Controller Code:

```

```

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.