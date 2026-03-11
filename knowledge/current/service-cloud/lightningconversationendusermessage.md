---
title: "lightning__conversationEndUserMessage"
domain: service-cloud
topic: lightningconversationendusermessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.864Z
keywords: [lightning__conversationEndUserMessage, lightning, _conversationEndUserMessage, Response, LWC, Sample, Code, Aura, Components]
---

# lightning__conversationEndUserMessage

# lightning\_\_conversationEndUserMessage

Messaging event triggered when the customer sends a new message. In Enhanced Messaging channels, this event is triggered only for text messages. This event is not triggered for messages with files or rich content. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current conversation. |
| content | String | The message sent by the customer. |
| name | String | The name of the user who sent the message. This name matches the username displayed in the conversation log. |
| timestamp | Date/Time | The date and time the message was received. |

## LWC Sample Code

To listen to the lightning\_\_conversationEndUserMessage event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

```

```

## Aura Components Sample Code

Component code:

```

```

Controller code:

```

```