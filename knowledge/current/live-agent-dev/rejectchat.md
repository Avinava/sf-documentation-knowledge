---
title: "rejectChat"
domain: live-agent-dev
topic: rejectchat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.031Z
estimatedTokens: 121
keywords: [rejectChat, reject, retract, invitation, that’s, sent, customer, Usage]
---

# rejectChat

> Use the rejectChat method to reject and retract an invitation that’s been sent
to a customer.

# rejectChat

Use the rejectChat method to reject and retract an invitation that’s been sent to a customer.

## Usage

Rejects an invitation and causes it to be retracted.

Available in API versions 28.0 and later.

## Syntax

**void** rejectChat(**String** buttonId)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| buttonId | String | The ID of the chat button for which to reject chats. | Available in API versions 28.0 and later. |
