---
title: "Chat Visualforce Components Code Sample"
domain: live-agent-dev
topic: chat-visualforce-components-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.236Z
estimatedTokens: 459
keywords: [Chat, Visualforce, Components, Code, Sample, test, preview, how, help, customize, windows]
---

# Chat Visualforce Components Code Sample

> Use this code sample to test and preview how Visualforce components
can help you customize your chat windows.

# Chat Visualforce Components Code Sample

Use this code sample to test and preview how Visualforce components can help you customize your chat windows.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

The following code sample shows a chat window that uses the following components:

-   liveAgent:clientChat
-   liveAgent:clientChatMessages
-   liveAgent:clientChatEndButton
-   liveAgent:clientChatLog
-   liveAgent:clientChatInput

```

```

For an active chat, this code results in the following chat window states:

Chat Waiting ![Chat window while chat is waiting to be accepted.](/docs/resources/img/en-us/260.0?doc_id=images%2Fcss_window_waiting.png&folder=live_agent_dev)

Chat in Progress ![Chat window during a chat.](/docs/resources/img/en-us/260.0?doc_id=images%2Fcss_window_engaged_new.png&folder=live_agent_dev)

Chat Ended ![Chat window when chat has ended.](/docs/resources/img/en-us/260.0?doc_id=images%2Fcss_window_ended_new.png&folder=live_agent_dev)

## Code Examples

```
<apex:page showHeader="false">
<style>
#liveAgentClientChat.liveAgentStateWaiting {
// The CSS class that is applied when the chat request is waiting to be accepted
// See "Waiting State" screenshot below
}
#liveAgentClientChat {
// The CSS class that is applied when the chat is currently engaged
// See "Engaged State" screenshot below
}
#liveAgentClientChat.liveAgentStateEnded {
// The CSS class that is applied when the chat has ended
// See "Ended State" screenshot below
}
body { overflow: hidden; width: 100%; height: 100%; padding: 0; margin: 0 }
#waitingMessage { height: 100%; width: 100%; vertical-align: middle; text-align: center;
display: none; }
#liveAgentClientChat.liveAgentStateWaiting #waitingMessage { display: table; }
#liveAgentSaveButton, #liveAgentEndButton { z-index: 2; }
.liveAgentChatInput {
height: 25px;
border-width: 1px;
border-style: solid;
border-color: #000;
padding: 2px 0 2px 4px;
background: #fff;
display: block;
width: 99%;
}
.liveAgentSendButton {
display: block;
width: 60px;
height: 31px;
padding: 0 0 3px;
position: absolute;
top: 0;
right: -67px;
}
#liveAgentChatLog {
width: auto;
height: auto;
top: 0px;
position: absolute;
overflow-y: auto;
left: 0;
right: 0;
bottom: 0;
}
</style>
<div style="top: 0; left: 0; right: 0; bottom: 0; position: absolute;">
<liveAgent:clientChat>
<liveAgent:clientChatSaveButton />
<liveAgent:clientChatEndButton />
<div style="top: 25px; left: 5px; right: 5px; bottom: 5px; position: absolute; z-index:
0;">
<liveAgent:clientChatAlertMessage />
<liveAgent:clientChatStatusMessage />
<table id="waitingMessage" cellpadding="0" cellspacing="0">
<tr>
<td>Please wait while you are connected to an available agent.</td>
</tr>
</table>
<div style="top: 0; right: 0; bottom: 41px; left: 0; padding: 0; position: absolute;
word-wrap: break-word; z-index: 0;">
<liveAgent:clientChatLog />
</div>
<div style="position: absolute; height: auto; right: 0; bottom: 0; left: 0; margin-right:
67px;">
<liveagent:clientChatInput /><liveAgent:clientChatSendButton />
</div>
</div>
</liveAgent:clientChat>
</div>
</apex:page>
```
