---
title: "Lightning Web Component Events for Enhanced Messaging"
domain: service-cloud
topic: lightning-web-component-events-for-enhanced-messaging
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.701Z
estimatedTokens: 531
keywords: [Lightning, Web, Component, Events, Enhanced, Messaging, JavaScript, executed, certain, types, events, occur, console, such, user, closes, tab., few, specific, Messaging.]
---

# Lightning Web Component Events for Enhanced Messaging

> JavaScript can be executed when certain types of events occur in a console, such as
    when a user closes a tab. A few events are specific to Messaging. These events apply to
    Lightning web components in Lightning Experience only.

# Lightning Web Component Events for Enhanced Messaging

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. A few events are specific to Messaging. These events apply to Lightning web components in Lightning Experience only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Use only rendered components with the Conversation Toolkit APIs. If you use a component that doesn’t have markup or that operates in the background, the APIs don’t work. The conversation component must also be rendered for the APIs to work.

-   **[lightning\_\_conversationAgentSend](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationagentsend.htm)**
    Messaging event triggered when an agent sends a message through the Salesforce console. This method intercepts the message before it’s sent to the chat visitor. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.
-   **[lightning\_\_conversationEnded](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationchatended.htm)**
    Messaging event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.
-   **[lightning\_\_conversationEndUserMessage](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationendusermessage.htm)**
    Messaging event triggered when the customer sends a new message. In Enhanced Messaging channels, this event is triggered only for text messages. This event is not triggered for messages with files or rich content. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Related Topics

- lightning__conversationAgentSend (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationagentsend.htm)
- lightning__conversationEnded (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationchatended.htm)
- lightning__conversationEndUserMessage (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_messaging_lwc_conversationendusermessage.htm)
