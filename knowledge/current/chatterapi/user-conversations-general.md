---
title: "User Conversations, General"
domain: chatterapi
topic: user-conversations-general
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.842Z
estimatedTokens: 517
keywords: [User, Conversations, General, context, search, across]
---

# User Conversations, General

> Get private conversations for the context user and
            search across private conversations.

# User Conversations, General

Get private conversations for the context user and search across private conversations.

To get all private messages for a context user, see [User Messages, General](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm "Get private messages for the context user. Search across private messages and post a private message.").

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

GET or HEAD

Request parameters for GET

| Parameter Name | Type | Required or Optional | Description | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Optional | A page token that indicates where retrieval begins. Get this token from the NextPageUrl property in the response body. | 23.0 |
| pageSize | Integer | Optional | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 23.0 |
| q | String | Optional | Specifies the string to search. The search string must contain at least two characters, not including any wildcards. For more information about wildcards, see Wildcards. This parameter is optional.NoteThe query parameter only searches message text bodies, not user names, titles, and so on. | 24.0 |

Response body

[Conversation Summary Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary_collection.htm "Conversation summary collection.")

## Code Examples

```
/chatter/users/userId/conversations
```

```
/connect/communities/communityId/chatter/users/userId/conversations
```

## Related Topics

- User Messages, General (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm)
- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Conversation Summary
                            Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary_collection.htm)
