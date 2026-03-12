---
title: "User Conversation Status"
domain: chatterapi
topic: user-conversation-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.824Z
estimatedTokens: 254
keywords: [User, Conversation, Status, Change]
---

# User Conversation Status

> Change the status of a conversation.

# User Conversation Status

Change the status of a conversation.

Resource

```

```

Available versions

23.0–29.0

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 30.0 and later, use [User Conversations, Specific](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsSpecific.htm "Get a private conversation for the context user. Search within a private conversation and change the status of a private conversation.") to change the status of a conversation.

Requires Chatter

Yes

HTTP methods

POST, PUT

Request body

Root XML tag

<conversation>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| read | Boolean | Changes the conversation status to unread (false) or read (true). | 24.0 |

Request parameters

| Parameter Name | Type | Description |
| --- | --- | --- |
| read | Boolean | Changes the conversation status to unread (false) or read (true). |

## Code Examples

```
/chatter/users/me/conversations/conversationId/mark-read
```

## Related Topics

- User Conversations, Specific (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsSpecific.htm)
