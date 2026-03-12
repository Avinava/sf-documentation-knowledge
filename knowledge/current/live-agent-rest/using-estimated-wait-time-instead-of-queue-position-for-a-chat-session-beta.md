---
title: "Using Estimated Wait Time Instead of Queue Position for a Chat Session (Beta)"
domain: live-agent-rest
topic: using-estimated-wait-time-instead-of-queue-position-for-a-chat-session-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.371Z
estimatedTokens: 1034
keywords: [Estimated, Wait, Time, Instead, Queue, Position, Chat, Session, Beta, API, relay, customers, However, receive, addition]
---

# Using Estimated Wait Time Instead of Queue Position for a Chat Session (Beta)

> By default, the Chat API returns queue position information that you can relay to
    customers. However, you can also receive the estimated wait time in addition to the queue
    position. Sometimes, the estimated wait time more effectively conveys the right information to
    customers than a queue position number. This feature is available in API version 47.0 and
    later.

# Using Estimated Wait Time Instead of Queue Position for a Chat Session (Beta)

By default, the Chat API returns queue position information that you can relay to customers. However, you can also receive the estimated wait time in addition to the queue position. Sometimes, the estimated wait time more effectively conveys the right information to customers than a queue position number. This feature is available in API version 47.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_rest)

#### Note

As a beta feature, Estimated Wait Time is a preview and isn’t part of the “Services” under your main subscription agreement with Salesforce. Use this feature at your sole discretion, and make your purchase decisions only on the basis of generally available products and features. Salesforce doesn’t guarantee general availability of this feature within any particular time frame or at all, and we can discontinue it at any time. This feature is for evaluation purposes only, not for production use. It’s offered as is and isn’t supported, and Salesforce has no liability for any harm or damage arising out of or in connection with it. All restrictions, Salesforce reservation of rights, obligations concerning the Services, and terms for related Non-Salesforce Applications and Content apply equally to your use of this feature.

The following algorithm is used to calculate the wait time:

```

```

Where:

-   A′ is the previous value for A. If no previous value exists, this value is W.
-   W is the wait time of the chat that has most recently been accepted.

The value returned is the value of A minus the time already spent waiting.

Additional algorithm details:

-   This value is calculated separately for each chat button.
-   A is recalculated each time a chat is accepted.
-   0 is returned if the result is less than 0.
-   \-1 is returned when the value cannot be calculated.

To use this feature, specify that you want the estimated wait time from the [Settings](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Settings.htm "Retrieves all settings information about the Chat deployment that’s associated with your chat session. The Settings request is required as the first request to establish a chat visitor’s session.") request (by setting Settings.needEstimatedWaitTime to 1) and the [Availability](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Availability.htm "Indicates whether a chat button is available to receive new chat requests.") request (by setting Availability.needEstimatedWaitTime to 1). When this value is set to 1, the response includes the estimated wait time for each button ID requested.

If receiveQueueUpdates is set when initializing the session, [ChatRequestSuccess](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm "Indicates that the chat request was successful and routed to available agents.") and [QueueUpdate](atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_QueueUpdate.htm "Indicates the new position of the chat visitor in the chat queue when the visitor’s position in the queue changes.") will both contain the estimated wait time (in seconds) in their responses.

## Code Examples

```
A = (0.9 * A′) + (0.1 * W)
```

## Related Topics

- Settings (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Settings.htm)
- Availability (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_Availability.htm)
- ChatRequestSuccess (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_ChatRequestSuccess.htm)
- QueueUpdate (atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_QueueUpdate.htm)
