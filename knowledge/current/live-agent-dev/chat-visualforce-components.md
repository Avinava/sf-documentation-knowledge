---
title: "Chat Visualforce Components"
domain: live-agent-dev
topic: chat-visualforce-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.141Z
estimatedTokens: 1199
keywords: [Chat, Visualforce, Components, customize, appearance, behavior, windows, liveAgent, clientChatQueuePosition]
---

# Chat Visualforce Components

> Use Visualforce components to
    customize the appearance and behavior of chat windows.

# Chat Visualforce Components

Use Visualforce components to customize the appearance and behavior of chat windows.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Chat includes the following customizable Visualforce components. These components are placed on your Visualforce form to make certain functionality available and to customize the appearance of the chat window.

Chat windows have various states to inform chat visitors of their chat’s progress. The following components let you customize how the chat window looks and behaves in these states to best help your visitors.

| Component Name | Description |
| --- | --- |
| liveAgent:clientChat | The main parent element for any chat window. This element is necessary to do any additional customization of Chat. This component can only be used once in a Chat deployment. |
| liveAgent:clientChatAlertMessage | The area in a chat window that displays system alert messages (such as "You have been disconnected"). |
| liveAgent:clientChatMessages | The area in a chat window that displays system status messages, such as "Chat session has been disconnected." Must be used within liveAgent:clientChat. Each chat window can have only 1 message area. |
| liveAgent:clientChatStatusMessage | The area in a chat window that displays system status messages (such as "You are being reconnected"). |
| liveAgent:clientChatQueuePosition | A text label indicating a visitor's position in a queue for a chat session that’s initiated by a button that uses push routing. (This component has no effect on buttons that use pull routing.) Must be used within liveAgent:clientChat. For more information on this component, see Using liveAgent:clientChatQueuePosition. |
| liveAgent:clientChatCancelButton | The button within a chat window when the chat is in a waiting state that allows the visitor to cancel the chat. Must be used within liveAgent:clientChat. |
| liveAgent:clientChatSaveButton | The button in a chat window that a visitor clicks to save the chat transcript as a local file. Must be used within liveAgent:clientChat. Each chat window can have multiple save buttons. |
| liveAgent:clientChatEndButton | The button within a chat window that a visitor clicks to end a chat session. Must be used within liveAgent:clientChat. |
| liveAgent:clientChatLog | The area in a chat window that displays the chat conversation to a visitor. Must be used within liveAgent:clientChat. Each chat window can have only 1 chat log. |
| liveAgent:clientChatInput | The text box in a chat window where a visitor types messages to a support agent. Must be used within liveAgent:clientChat. Each chat window can have only 1 input box. |
| liveAgent:clientChatSendButton | The button in a chat window that a visitor clicks to send a chat message to an agent. Must be used within liveAgent:clientChat. Each chat window can have multiple send buttons. |
| liveAgent:clientChatLogAlertMessage | The area in a chat window that displays the idle time-out alert (customer warning) to a visitor. |
| liveAgent:clientChatFileTransfer | The file upload area in a chat window where a visitor can send a file to an agent. Must be used within liveAgent:clientChat. |

For more information about each of these components, see the [Visualforce Component Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_compref.htm "HTML (New Window)").

## Using liveAgent:clientChatQueuePosition

The liveAgent:clientChatQueuePosition component shows where in the chat queue a visitor is. In order for a chat to enter the queue:

-   The button from which the chat was requested must have queuing enabled.
-   All online agents (with the relevant skills, if applicable) must be at capacity, causing a queue to form.
-   The chat must be in the queue and not yet assigned to an agent.

If all three of these conditions aren’t met, liveAgent:clientChatQueuePosition doesn't display a value.
