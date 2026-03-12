---
title: "Get Unread Count for Conversations"
domain: chatterapi
topic: get-unread-count-for-conversations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.003Z
estimatedTokens: 199
keywords: [Unread, Count, Conversations, number, messages, user]
---

# Get Unread Count for Conversations

> Get the number of private conversations that have unread
   messages for a user.

# Get Unread Count for Conversations

Get the number of private conversations that have unread messages for a user.

Private messages and direct messages are different features. Direct messages are newer and offer a richer feature set for private communication in Experience Cloud sites. Direct messages are a capability within Chatter feeds. To work with direct messages, see [Feed Elements, Post and Search](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.").

Resource

```

```

```

```

Available since version

23.0

HTTP methods

GET or HEAD

Request body

[Conversation Unread Count](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_unread_count.htm "Conversation unread count.")

## Code Examples

```
/chatter/users/userId/conversations/unread-count
```

```
/connect/communities/communityId/chatter/users/userId/conversations/unread-count
```

## Related Topics

- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Conversation Unread Count (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_unread_count.htm)
