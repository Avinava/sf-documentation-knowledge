---
title: "sendTextMessage() for LWC for Lightning Experience"
domain: service-cloud
topic: sendtextmessage-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.007Z
estimatedTokens: 162
keywords: [sendTextMessage, LWC, Lightning, Experience, new, text, message, agent, end, user, works, console, apps, Arguments]
---

# sendTextMessage() for LWC for Lightning Experience

> Sends a new text message from the agent to an end user. This method works only in
  Lightning console apps.

# sendTextMessage() for LWC for Lightning Experience

Sends a new text message from the agent to an end user. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the record for the Messaging session. |
| message | Object | The message object with the message to send to the customer. |

## message

| Name | Type | Description |
| --- | --- | --- |
| text | String | The message to the customer. For example: { text: "This is a sample message." } |

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.
