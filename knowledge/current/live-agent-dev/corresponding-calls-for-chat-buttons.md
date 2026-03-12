---
title: "Corresponding Calls for Chat Buttons"
domain: live-agent-dev
topic: corresponding-calls-for-chat-buttons
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.230Z
estimatedTokens: 287
keywords: [Corresponding, Calls, Chat, Buttons, sure, chats, start, correctly, aligning, direct-to-agent, agent, fallback-to-button]
---

# Corresponding Calls for Chat Buttons

> Make sure your chats start correctly by aligning your calls when using buttons,
    direct-to-agent, and agent with fallback-to-button.

# Corresponding Calls for Chat Buttons

Make sure your chats start correctly by aligning your calls when using buttons, direct-to-agent, and agent with fallback-to-button.

Keep in mind that the syntax for startChat also applies to startChatWithWindow, and the syntax for showWhenOnline also applies to showWhenOffline.

Use the following corresponding calls when you’re creating chats with a button, direct-to-agent, and agent with fallback-to-button:

| Scenario | Call to startChat (or startChatWithWindow) | Call to showWhenOnline (or showWhenOffline) | Call to addButtonEventHandler |
| --- | --- | --- | --- |
| Button | startChat(String buttonId) | showWhenOnline(String buttonId, Object element, (optional) String userId) | addButtonEventHandler( String buttonId, Function callback) |
| Agent (no fallback) | startChat(String buttonId, String userId, false) | showWhenOnline(String userId, Object element) | addButtonEventHandler( String userId, Function callback) |
| Agent (fallback to button) | startChat(String buttonId, String userId, true) | showWhenOnline(String buttonId, Object element, String userId) | Use multiple handlers. |
