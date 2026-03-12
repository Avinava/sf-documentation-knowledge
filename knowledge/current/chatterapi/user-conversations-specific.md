---
title: "User Conversations, Specific"
domain: chatterapi
topic: user-conversations-specific
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.847Z
estimatedTokens: 603
keywords: [User, Conversations, Specific, conversation, context, Search, change, status]
---

# User Conversations, Specific

> Get a private conversation for the context user.
            Search within a private conversation and change the status of a private
            conversation.

# User Conversations, Specific

Get a private conversation for the context user. Search within a private conversation and change the status of a private conversation.

To get a specific private message for a context user, see [User Messages, Specific](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_specific.htm "Get a private message for the context user."). To get all private conversations for a context user, see [User Conversations, General](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsGeneral.htm "Get private conversations for the context user and search across private conversations.").

Private messages and direct messages are different features. Direct messages are newer and offer a richer feature set for private communication in Experience Cloud sites. Direct messages are a capability within Chatter feeds. To work with direct messages, see [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

Resource

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

userId must be the ID of the context user or the alias me.

Available since version

23.0

Requires Chatter

Yes

HTTP methods

GET, PATCH, or HEAD

Request parameter for GET

| Parameter Name | Type | Required or Optional | Description | Available Version |
| --- | --- | --- | --- | --- |
| q | String | Optional | Specifies the string to search. The search string must contain at least two characters, not including any wildcards. For more information about wildcards, see Wildcards. This parameter is optional.NoteThe query parameter only searches message text bodies, not user names, titles, and so on. | 24.0 |

Request body for PATCH

Root XML tag

<conversation>

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| read | Boolean | Changes the conversation status to unread (false) or read (true). | 24.0 |

Request parameters for PATCH

| Parameter Name | Type | Description |
| --- | --- | --- |
| read | Boolean | Changes the conversation status to unread (false) or read (true). |

Response body for GET or HEAD

[Conversation Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm "Conversation detail.")

## Code Examples

```
/chatter/users/userId/conversations/conversationId
```

```
/connect/communities/communityId/chatter/users/userId/conversations/conversationId
```

## Related Topics

- User Messages, Specific (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_specific.htm)
- User Conversations, General (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsGeneral.htm)
- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Conversation
                            Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm)
