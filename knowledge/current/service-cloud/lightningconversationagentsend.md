---
title: "lightning__conversationAgentSend"
domain: service-cloud
topic: lightningconversationagentsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.856Z
keywords: [lightning__conversationAgentSend, lightning, _conversationAgentSend, Response, LWC, Sample, Code, Aura, Components]
---

# lightning__conversationAgentSend

# lightning\_\_conversationAgentSend

Messaging event triggered when an agent sends a message through the Salesforce console. This method intercepts the message before it’s sent to the chat visitor. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current conversation. |
| content | String | The text of the message in the conversation log. |
| name | String | The name of the agent who is attempting to send the message. This name matches the agent name displayed in the conversation log. |
| timestamp | Date/Time | The date and time that the agent attempted to send the message. |

## LWC Sample Code

To listen to the lightning\_\_conversationAgentSend event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

```

```

## Aura Components Sample Code

Component code:

```

```

Controller code:

```

```