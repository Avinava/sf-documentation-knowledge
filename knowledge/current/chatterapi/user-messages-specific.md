---
title: "User Messages, Specific"
domain: chatterapi
topic: user-messages-specific
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.970Z
estimatedTokens: 367
keywords: [User, Messages, Specific, message, context]
---

# User Messages, Specific

> Get a private message for the context
        user.

# User Messages, Specific

Get a private message for the context user.

To get a specific private conversation, see [User Conversations, Specific](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsSpecific.htm "Get a private conversation for the context user. Search within a private conversation and change the status of a private conversation."). To get all private messages for the context user, see [User Messages, General](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm "Get private messages for the context user. Search across private messages and post a private message.").

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

Response body

[Message](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm "Message.")

## Code Examples

```
/chatter/users/userId/messages/messageId
```

```
/connect/communities/communityId/chatter/users/userId/messages/messageId
```

## Related Topics

- User Conversations, Specific (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_UserConversationsSpecific.htm)
- User Messages, General (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_messages_general.htm)
- Feed Elements, Post and Search (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- Message (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm)
