---
title: "lightning__conversationEnded"
domain: service-cloud
topic: lightningconversationended
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.861Z
keywords: [lightning__conversationEnded, lightning, _conversationEnded, Response, LWC, Sample, Code, Aura, Components]
---

# lightning__conversationEnded

# lightning\_\_conversationEnded

Messaging event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current chat. |

## LWC Sample Code

To listen to the lightning\_\_conversationEnded event, import the Lightning Message Service features from lightning/messageService and pass the event to the subscribe() method.

```

```

## Aura Components Sample Code

Component code:

```

```

Controller code:

```

```