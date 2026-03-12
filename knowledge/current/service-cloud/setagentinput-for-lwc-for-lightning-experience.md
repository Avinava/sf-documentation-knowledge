---
title: "setAgentInput() for LWC for Lightning Experience"
domain: service-cloud
topic: setagentinput-for-lwc-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.985Z
estimatedTokens: 205
keywords: [setAgentInput, LWC, Lightning, Experience, text, agent's, box., works, only, console, apps., Arguments, message, Response]
---

# setAgentInput() for LWC for Lightning Experience

> Sets the text in the agent's text box. This method works only in Lightning console
  apps.

# setAgentInput() for LWC for Lightning Experience

Sets the text in the agent's text box. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the record for the Messaging session. |
| message | Object | The message object with the message to place in the agent's text box. |
| setAtCursor | Boolean | Optional. Indicates whether to insert the message at the current cursor location. If false, the message overwrites any existing text. Default value is false. |

## message

| Name | Type | Description |
| --- | --- | --- |
| text | String | The message to the agent. For example: { text: "This is a sample message." } |

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.
