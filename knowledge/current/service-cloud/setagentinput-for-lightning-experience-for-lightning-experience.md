---
title: "setAgentInput() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: setagentinput-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.010Z
estimatedTokens: 243
keywords: [setAgentInput, Lightning, Experience, text, agent's, box, showing, typing, indicators, works, console, apps, Arguments, argumentObj]
---

# setAgentInput() for Lightning Experience for
            Lightning Experience

> Sets the text in the agent's text box while showing typing indicators. This method works only in
   Lightning console apps.

# setAgentInput() for Lightning Experience for Lightning Experience

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
