---
title: "Conversation Detail"
domain: chatterapi
topic: conversation-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.065Z
estimatedTokens: 159
keywords: [Conversation, Detail]
---

# Conversation Detail

> Conversation detail.

# Conversation Detail

Conversation detail.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conversationId | String | 18-character ID of the conversation | Medium, 29.0 | 23.0 |
| conversationUrl | String | URL to the conversation detail page | Small, 29.0 | 23.0 |
| members | User Summary[] | Collection of users participating in this conversation | Small, 29.0 | 23.0 |
| messages | Message Collection | Messages in this conversation | Small, 29.0 | 23.0 |
| read | Boolean | Does the context user have unread messages in this conversation? | Small, 29.0 | 23.0 |

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Message Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message_collection.htm)
