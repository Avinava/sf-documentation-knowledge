---
title: "Aura Events for Enhanced
    Messaging"
domain: service-cloud
topic: aura-events-for-enhanced-messaging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.922Z
estimatedTokens: 431
keywords: [Aura, Events, Enhanced, Messaging, JavaScript, executed, certain, occur, console, user, closes, tab, few, specific, apply]
---

# Aura Events for Enhanced
    Messaging

> JavaScript can be executed when certain types of events occur in a console, such as
    when a user closes a tab. A few events are specific to Messaging. These events apply to Aura
    components in Lightning Experience only.

# Aura Events for Enhanced Messaging

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Aura components in Lightning Experience only.

-   **[lightning:conversationAgentSend](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationagentsend.htm)**
    Messaging event triggered when an agent sends a message through the Salesforce console. This method intercepts the message before it’s sent to the chat visitor. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.
-   **[lightning:conversationChatEnded](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationchatended.htm)**
    Messaging event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.
-   **[lightning:conversationNewMessage](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationnewmessage.htm)**
    Messaging event triggered when the customer sends a new message. In Enhanced Messaging channels, this event is triggered only for text messages. This event is not triggered for messages with files or rich content. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Related Topics

- lightning:conversationAgentSend (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationagentsend.htm)
- lightning:conversationChatEnded (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationchatended.htm)
- lightning:conversationNewMessage (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_conversationnewmessage.htm)
