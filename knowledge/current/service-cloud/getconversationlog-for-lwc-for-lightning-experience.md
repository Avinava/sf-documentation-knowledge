---
title: "getConversationLog() for LWC for Lightning Experience"
domain: service-cloud
topic: getconversationlog-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.745Z
estimatedTokens: 327
keywords: [getConversationLog, LWC, Lightning, Experience, Retrieves, conversation, log., works, only, console, apps., Arguments, Response, message]
---

# getConversationLog() for LWC for Lightning Experience

> Retrieves the conversation log. This method works only in Lightning console
  apps.

# getConversationLog() for LWC for Lightning Experience

Retrieves the conversation log. This method works only in Lightning console apps.

This method returns up to 200 entries from the point the user scrolled to in the transcript. Rich content from bots, for example, messaging components with a question with choices, are not supported.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the record for the Messaging session. |

## Response

Returns a Promise. Success resolves to a messages response object. The Promise is rejected if there's an error.

| Name | Type | Description |
| --- | --- | --- |
| messages | Array of message objects. | An array of message objects containing all of the messages from the conversation log. |

## message

The message object containing a single message from the conversation log.

| Name | Type | Description |
| --- | --- | --- |
| content | String | The text content of a message in the conversation log. |
| name | String | The name of the user who sent the message in the conversation log. This name appears exactly as it is displayed in the conversation. |
| type | String | The type of message that was received, such as AGENT or END_USER. |
| timestamp | String | The date and time the message was received. |
