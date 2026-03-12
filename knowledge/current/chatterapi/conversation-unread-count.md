---
title: "Conversation Unread Count"
domain: chatterapi
topic: conversation-unread-count
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.075Z
estimatedTokens: 130
keywords: [Conversation, Unread, Count]
---

# Conversation Unread Count

> Conversation unread count.

# Conversation Unread Count

Conversation unread count.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasMore | Boolean | true if the actual number of unread conversations is greater than 50, false otherwise | Small, 29.0 | 23.0 |
| unreadCount | Integer | Number of unread conversations, that is, conversations that have unread messages. Is an exact value up to the maximum of 50, and is capped at 50 if the value is greater. | Small, 29.0 | 23.0 |
