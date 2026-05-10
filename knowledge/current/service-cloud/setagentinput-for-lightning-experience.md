---
title: "setAgentInput() for Lightning Experience"
domain: service-cloud
topic: setagentinput-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:40:42.345Z
estimatedTokens: 237
keywords: [Arguments, setAgentInput, Lightning, Experience, text, agent's, box, showing, typing, indicators, works, console, apps, argumentObj]
---

> Sets the text in the agent's text box while showing typing indicators. This method works only in
   Lightning console apps.

# setAgentInput() for Lightning Experience

Sets the text in the agent's text box while showing typing indicators. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work associated with the current chat. |
| message | Object | The message to place in the agent’s text box. The message should be an object with a string property for the text value. For example: { text: "This is a sample message." } |
| setAtCursor | Boolean | Indicates whether to insert the message at the current cursor location. If false, the message overwrites any existing text. Default value is false. |

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.
