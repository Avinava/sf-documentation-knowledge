---
title: "Events for Chat"
domain: service-cloud
topic: events-for-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.908Z
estimatedTokens: 771
keywords: [Events, Chat, JavaScript, executed, certain, occur, console, user, closes, tab, few, specific, apply, Lightning, Experience]
---

# Events for Chat

> JavaScript can be executed when certain types of events occur in a console, such as
    when a user closes a tab. A few events are specific to Chat. These events apply to Lightning
    Experience only.

# Events for Chat

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Chat. These events apply to Lightning Experience only.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US "HTML (New Window)"). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US "HTML (New Window)") love plus asynchronous conversations that can be picked back up at any time. For Lightning Console JavaScript API, use [Lightning Web Component Events for Enhanced Messaging](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_enhanced_messaging_lwc_events.htm "JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Lightning web components in Lightning Experience only.") or [Aura Events for Enhanced Messaging](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_messaging_events.htm "JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Aura components in Lightning Experience only.").

-   **[lightning:conversationAgentSend](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationagentsend.htm)**
    Event triggered when an agent sends a chat message through the Salesforce console. This method does not intercept the message before it’s sent to the chat visitor. This event is also triggered when using Enhanced Messaging channels.
-   **[lightning:conversationChatEnded](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationchatended.htm)**
    Event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels.
-   **[lightning:conversationCustomEvent](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationcustomevent.htm)**
    Event triggered when a custom event occurs during a chat.
-   **[lightning:conversationNewMessage](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationnewmessage.htm)**
    Event triggered when the customer sends a new message. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Related Topics

- Lightning Web Component Events for Enhanced Messaging (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_enhanced_messaging_lwc_events.htm)
- Aura Events for Enhanced Messaging (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_messaging_events.htm)
- lightning:conversationAgentSend (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationagentsend.htm)
- lightning:conversationChatEnded (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationchatended.htm)
- lightning:conversationCustomEvent (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationcustomevent.htm)
- lightning:conversationNewMessage (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_liveagent_conversationnewmessage.htm)
