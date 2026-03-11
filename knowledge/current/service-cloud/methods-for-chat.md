---
title: "Methods for Chat"
domain: service-cloud
topic: methods-for-chat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.418Z
keywords: [Methods, Chat, Note, Important]
---

# Methods for Chat

# Methods for Chat

Connect with customers or website visitors in real time through Web-based chat.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

These methods in Salesforce Classic don’t work for chats routed with Omni-Channel. Chats with Omni-Channel routing use the [Methods for Omni-Channel](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_console.meta/api_console/sforce_api_console_omnichannel_methods.htm "HTML (New Window)"). If you’re using Lightning Experience, use the [Methods for Omni-Channel in Lightning Experience](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_console.meta/api_console/sforce_api_console_methods_lightning_omniToolkitAPI.htm "HTML (New Window)").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_console)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US "HTML (New Window)"). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US "HTML (New Window)") love plus asynchronous conversations that can be picked back up at any time.

-   **[acceptChat()](atlas.en-us.api_console.meta/api_console/sforce_api_console_acceptChat.htm)**  
    Accepts a chat request. Available in API version 29.0 or later. This method isn't supported with Omni-Channel in API version 37.0 or later.
-   **[cancelFileTransferByAgent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_cancelFileTransferByAgent.htm)**  
    Indicates that a file transfer request has been canceled by an agent. Available in API version 31.0 or later.
-   **[declineChat()](atlas.en-us.api_console.meta/api_console/sforce_api_console_declineChat.htm)**  
    Declines a chat request. Available in API version 29.0 or later. This method isn't supported with Omni-Channel in API version 37.0 or later.
-   **[endChat()](atlas.en-us.api_console.meta/api_console/sforce_api_console_endChat.htm)**  
    Ends a chat in which an agent is currently engaged. Available in API version 29.0 or later.
-   **[getAgentInput()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getAgentInput.htm)**  
    Returns the string of text which is currently in the agent’s text input area in the chat log of a chat with a specific chat key. Available in API version 29.0 or later.
-   **[getAgentState()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getAgentState.htm)**  
    Returns the agent's current Chat status, such as Online, Away, or Offline. Available in API version 29.0 or later.
-   **[getChatLog()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getChatLog.htm)**  
    Returns the chat log of a chat associated with a specific chat key. Available in API version 29.0 or later.
-   **[getChatRequests()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getChatRequests.htm)**  
    Returns the chat keys of the chat requests that have been assigned to an agent. Available in API version 29.0 or later.
-   **[getDetailsByChatKey()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getDetailsByChatKey.htm)**  
    Returns the details of the chat associated with a specific chat key. Available in API version 29.0 or later.
-   **[getDetailsByPrimaryTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getDetailsByPrimaryTabId.htm)**  
    Returns the details of the chat associated with a specific primary tab ID. Available in API version 29.0 or later.
-   **[getEngagedChats()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getEngagedChats.htm)**  
    Returns the chat keys of the chats in which the agent is currently engaged. Available in API version 29.0 or later.
-   **[getMaxCapacity()](atlas.en-us.api_console.meta/api_console/sforce_api_console_getMaxCapacity.htm)**  
    Returns the maximum chat capacity for the current agent, as specified in the agent's assigned agent configuration. Available in API version 29.0 or later.
-   **[initFileTransfer()](atlas.en-us.api_console.meta/api_console/sforce_api_console_initFileTransfer.htm)**  
    Initiates the process of transferring a file from a customer to an agent. Available in API version 31.0 or later.
-   **[onAgentSend()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onAgentSend.htm)**  
    Registers a function to call when an agent sends a chat message through the Salesforce console. This method intercepts the message and occurs before it is sent to the chat visitor. Available in API version 29.0 or later.
-   **[onAgentStateChanged()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onAgentStateChanged.htm)**  
    Registers a function to call when agents change their Chat status, such as from Online to Away. Available in API version 29.0 or later.
-   **[onChatCanceled()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatCanceled.htm)**  
    Registers a function to call when a chat visitor cancels a chat request. Available in API version 29.0 or later.
-   **[onChatCriticalWaitState()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatCriticalWaitState.htm)**  
    Registers a function to call when a chat becomes critical to answer or a waiting chat is answered. Available in API version 29.0 or later.
-   **[onChatDeclined()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatDeclined.htm)**  
    Registers a function to call when an agent declines a chat request. Available in API version 29.0 or later.
-   **[onChatEnded()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatEnded.htm)**  
    Registers a function to call when an engaged chat ends. Available in API version 29.0 or later.
-   **[onChatRequested()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatRequested.htm)**  
    Registers a function to call when an agent receives a chat request. Available in API version 29.0 or later.
-   **[onChatStarted()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatStarted.htm)**  
    Registers a function to call when an agent starts a new chat with a customer. Available in API version 29.0 or later.
-   **[onChatTransferredOut()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onChatTransferredOut.htm)**  
    Registers a function to call when an engaged chat is transferred out to another agent. Available in API version 29.0 or later.
-   **[onCurrentCapacityChanged()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onCurrentCapacityChanged.htm)**  
    Registers a function to call when an agent's capacity for accepting chats changes—for example, if an agent accepts a new chat, ends a currently engaged chat, or otherwise changes the number of chats to which they are assigned, or if a chat request is pushed to their chat queue. Available in API version 29.0 or later.
-   **[onCustomEvent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onCustomEvent.htm)**  
    Registers a function to call when a custom event takes place during a chat. Available in API version 29.0 or later.
-   **[onFileTransferCompleted()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onFileTransferCompleted.htm)**  
    Registers a function to call when a file is transferred from a customer to an agent. Available in API version 31.0 or later.
-   **[onNewMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onNewMessage.htm)**  
    Registers a function to call when a new message is sent from a customer, agent, or supervisor. Available in API version 29.0 or later.
-   **[onTypingUpdate()](atlas.en-us.api_console.meta/api_console/sforce_api_console_onTypingUpdate.htm)**  
    Registers a function to call when the customer’s text in the chat window changes. If Sneak Peek is enabled, this function is called whenever the customer edits the text in the chat window. If Sneak Peek is not enabled, this function is called whenever a customer starts or stops typing in the chat window. Available in API version 29.0 or later.
-   **[sendCustomEvent()](atlas.en-us.api_console.meta/api_console/sforce_api_console_sendCustomEvent.htm)**  
    Sends a custom event to the client-side chat window for a chat with a specific chat key. Available in API version 29.0 or later.
-   **[sendMessage()](atlas.en-us.api_console.meta/api_console/sforce_api_console_sendMessage.htm)**  
    Sends a new chat message from the agent to a chat with a specific chat key. Available in API version 29.0 or later.
-   **[setAgentInput()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setAgentInput.htm)**  
    Sets the string of text in the agent’s text input area in the chat log of a chat with a specific chat key.Available in API version 29.0 or later.
-   **[setAgentState()](atlas.en-us.api_console.meta/api_console/sforce_api_console_setAgentState.htm)**  
    Sets an agent's Chat status, such as Online, Away, or Offline. Available in API version 29.0 or later.
-   **[Methods for Chat Visitors](atlas.en-us.api_console.meta/api_console/sforce_api_console_live_agent_methods_chasitor.htm)**  
    There are a few methods available that you can use to customize the visitor experience for Chat in a custom Visualforce chat window. These methods apply to Salesforce Classic only.