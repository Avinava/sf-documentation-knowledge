---
title: "Events for the Minimized Chat Window"
domain: snapins-web-dev
topic: events-for-the-minimized-chat-window
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.408Z
estimatedTokens: 1495
keywords: [Events, Minimized, Chat, Window, eventHandlerFunction, Embedded, Service, Aura, component]
---

# Events for the Minimized Chat Window

> Use the following events in eventHandlerFunction in your minimized Embedded Service Aura component.

# Events for the Minimized Chat Window

Use the following events in eventHandlerFunction in your minimized Embedded Service Aura component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

eventHandlerFunction is called with two positional arguments, eventName and eventData.

Below are the possible values for eventName and the corresponding scenario

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

Some events are fired multiple times per scenario. Avoid writing logic that can’t be safely executed multiple times.

| eventName | Scenario |
| --- | --- |
| chatConferenceState | Fired in the following scenarios:An agent joins a one-on-one chat, which becomes a chat conference.An agent joins a chat conference.An agent leaves a chat conference.There are two agents in a chat conference. One agent leaves the conference, which becomes a one-on-one chat. |
| chatEndedState | Fired when the chat has ended for any reason. |
| chatState | Fired in the following scenarios:The visitor's chat request has been accepted and they’re chatting with an agent.After starting a chat, the visitor navigates to another page and resumes chatting.A chat transfer has completed (see chatTransferringState), and the visitor is now chatting with the new agent.The visitor had previously lost connection (see reconnectingState) and has regained it. |
| chatTimeoutUpdate | Fired when the visitor idle timeout has started, and every additional second during which the visitor is still idle. |
| chatTransferringState | Fired when the a chat transfer has been initiated. |
| chatUnreadMessage | Fired every time the visitor has received a message from the agent, but the visitor hasn't read it yet. |
| offlineSupportState | Fired when the offline support form has loaded. |
| prechatState | Fired when the pre-chat form has loaded. |
| postchatState | Fired when the post chat form has loaded. |
| queueUpdate | Fired in the following scenarios:The visitor has requested a chat and is waiting for an agent.After requesting a chat, the visitor navigates to another page, but is still waiting for an agent.The visitor had previously lost connection (see reconnectingState) and has regained it.The visitor has advanced in the queue, but is still waiting for an agent to accept the chat request.A bot or agent has requested a chat transfer and is waiting for another agent to accept.During a chat transfer, the visitor navigates to another page, but is still waiting to be transferred.The visitor has advanced in the queue, but is still waiting for an agent to accept the chat transfer.NoteThis event fires only if queue position is enabled for your Embedded Service deployment and your Embedded Service code snippet is version 5.0 or later. |
| reconnectingState | Fired when the visitor has lost connection. |
| waitingEndedState | Fired when the visitor's chat request has failed for any reason. |
| waitingState | Fired in the following scenarios:The visitor has requested a chat and is waiting for an agent.After requesting a chat, the visitor navigates to another page but is still waiting for an agent.The visitor had previously lost connection (see reconnectingState) and has regained it.NoteThis event fires only if either queue position is disabled for your Embedded Service deployment or your Embedded Service code snippet is version is earlier than 5.0. |

The eventData is an object that contains the default localized label for the event. For some events, it contains additional values. Below are the possible additional values for eventData.

| eventName | Property | Type | Description |
| --- | --- | --- | --- |
| chatConferenceState | agentsInChat | array of strings | A list of the agents in the chat conference. |
| agentName | string | The name of the agent who is joining or leaving the chat conference. |
| isAgentJoining | boolean | A boolean indicating whether an agent is joining (true) or leaving (false) the chat conference. |
| chatEndedState | reason | string | A description of why the chat ended. Possible values include:agentEndedChat– The agent ended the chat.visitorConnectionError– The visitor lost connection for too long.visitorEndedChat– The visitor ended the chat.visitorTimeout– The visitor was idle too long and the chat timed out. |
| chatState | agentName | string | The name of the agent. |
| agentType | string | The type of agent handling the chat. Possible values are agent (support agent) and chatbot (Einstein Bots). |
| chatTimeoutUpdate | timeoutSecondsRemaining | int | The number of seconds remaining until the chat times out due to the visitor being idle for too long. |
| chatUnreadMessage | unreadMessageCount | int | The number of unread messages. |
| agentType | string | The type of agent handling the chat. Possible values are agent (support agent) and chatbot (Einstein Bots). |
| queueUpdate | queuePosition | int | The visitor’s current place in line. |
| waitingEndedState | reason | string | A description of why the visitor’s chat request failed. Possible values include:agentsUnavailable– All agents were unavailable, or an agent declined the chat request.connectionError– The chat request failed for any other reason.visitorBlocked– The visitor’s IP address has been blocked. |
