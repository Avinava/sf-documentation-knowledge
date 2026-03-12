---
title: "startChatWithWindow"
domain: live-agent-dev
topic: startchatwithwindow
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.197Z
estimatedTokens: 275
keywords: [startChatWithWindow, chat, button, window, Usage]
---

# startChatWithWindow

> Use the startChatWithWindow method to request
    a chat from a button using the name of a window.

# startChatWithWindow

Use the startChatWithWindow method to request a chat from a button using the name of a window.

## Usage

Requests a chat from the provided button using the provided window name. Available in API versions 28.0 and later.

## Syntax

**void** startChatWithWindow(**String** buttonId, **String** windowName, (optional) **String** userId, (optional) **Boolean** fallback)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button for which to request a chat in a new window. | Available in API versions 28.0 and later. |
| windowName | String | The name of the window. | Available in API versions 28.0 and later. |
| (Optional) userId | String | The Salesforce user ID of the agent to whom to directly route chats from the button. | Available in API versions 29.0 and later |
| (Optional) fallback | Boolean | Specifies whether to fall back to the button’s routing rules (true) or not (false) if the agent with the specified sfdcUserId is unavailable. | Available in API versions 29.0 and later |
