---
title: "Methods for Chat Visitors"
domain: service-cloud
topic: methods-for-chat-visitors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.420Z
keywords: [Methods, Chat, Visitors, Important]
---

# Methods for Chat Visitors

# Methods for Chat Visitors

There are a few methods available that you can use to customize the visitor experience for Chat in a custom Visualforce chat window. These methods apply to Salesforce Classic only.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US "HTML (New Window)"). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US "HTML (New Window)") love plus asynchronous conversations that can be picked back up at any time.

-   **[chasitor.addCustomEventListener()](atlas.en-us.api_console.meta/api_console/sforce_api_console_chasitor_addCustomEventListener.htm)**  
    Registers a function to call when a custom event is received in the chat window. Available in API version 29.0 or later.
-   **[chasitor.getCustomEvents()](atlas.en-us.api_console.meta/api_console/sforce_api_console_chasitor_getCustomEvents.htm)**  
    Retrieves a list of custom events that have been received in this chat window during this chat session. Available in API version 29.0 or later.
-   **[chasitor.sendCustomEvent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_chasitor_sendCustomEvent.htm)**  
    Sends a custom event to the agent console of the agent who is currently chatting with a customer. Available in API version 29.0 or later.