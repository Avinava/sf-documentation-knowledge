---
title: "startChat"
domain: live-agent-dev
topic: startchat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.194Z
estimatedTokens: 288
keywords: [startChat, chat, button, new, window, Usage]
---

# startChat

> Use the startChat method to request a chat from a button in a new window.

# startChat

Use the startChat method to request a chat from a button in a new window.

## Usage

Requests a chat from the provided button in a new window.

Optionally, you can route chats from a specific button directly to the agent with the userId you specify. If the agent is unavailable, you can route the chat to additional agents by specifying whether to fallback to the button’s routing rules (true) or not (false).

## Syntax

**void** startChat(**String** buttonId, (optional) **String** userId, (optional) **Boolean** fallback)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button for which to request a chat in a new window. | Available in API versions 28.0 and later |
| (Optional) userId | String | The Salesforce user ID of the agent to whom to directly route chats from the button. | Available in API versions 29.0 and later. |
| (Optional) fallback | Boolean | Specifies whether to fall back to the button’s routing rules (true) or not (false) if the agent with the specified sfdcUserId is unavailable. | Available in API versions 29.0 and later. |
